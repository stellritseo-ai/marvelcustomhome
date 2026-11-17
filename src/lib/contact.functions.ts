import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";
import { contactSchema, newsletterSchema } from "./contact-schema";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getMailTransporter() {
  const host = process.env["SMTP_HOST"] || "smtppro.zoho.com";
  const port = Number(process.env["SMTP_PORT"] || 465);
  const secure = process.env["SMTP_SECURE"] === "true" || port === 465;
  const user = process.env["SMTP_USER"] || "jack@stellrit.com";
  const pass = process.env["SMTP_PASS"] || "Kq4EnvwGUaQu";

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

const RECIPIENT_EMAIL = process.env["CONTACT_RECIPIENT_EMAIL"] || "jack@stellrit.com";
const SENDER_EMAIL = process.env["SMTP_USER"] || "jack@stellrit.com";

export const submitInquiry = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot filled → silently accept without processing
    if (data.website) {
      return { ok: true };
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const safeName = escapeHtml(data.fullName);
    const safeEmail = escapeHtml(data.email);
    const safePhone = escapeHtml(data.phone);
    const safeAddress = data.address ? escapeHtml(data.address) : "Not specified";
    const safeProjectType = escapeHtml(data.projectType);
    const safeBudget = escapeHtml(data.budget);
    const safeVision = escapeHtml(data.vision).replace(/\n/g, "<br />");

    const subject = `[Marvel Custom Homes] New Inquiry: ${data.fullName} — ${data.projectType}`;

    const textContent = `
NEW INQUIRY RECEIVED — MARVEL CUSTOM HOMES
==================================================

Client Information:
• Name: ${data.fullName}
• Email: ${data.email}
• Phone: ${data.phone}
• Location / Lot Address: ${data.address || "Not specified"}

Project Parameters:
• Discipline / Type: ${data.projectType}
• Estimated Budget: ${data.budget}

Project Vision & Notes:
${data.vision}

--------------------------------------------------
Received: ${timestamp} (Central Time)
Delivered via Marvel Custom Homes Private Consultation Portal
Reply-To: ${data.email}
`.trim();

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 24px 0; background-color: #f5f3ef; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1c1c1c;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e5dfd5; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
    <!-- Header Banner -->
    <tr>
      <td style="background: #171817; padding: 28px 32px; text-align: left; border-bottom: 3px solid #9B8766;">
        <p style="margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.22em; color: #d4af37; font-weight: 600;">Dallas Architectural Studio</p>
        <h1 style="margin: 6px 0 0; font-size: 24px; color: #faf8f5; font-family: Georgia, serif; font-weight: normal; letter-spacing: -0.01em;">
          New Consultation Inquiry
        </h1>
      </td>
    </tr>

    <!-- Body Content -->
    <tr>
      <td style="padding: 32px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px; background: #faf8f5; border-radius: 6px; border: 1px solid #ebd9c0; padding: 18px 20px;">
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #6b593b; font-weight: 600; width: 140px;">Client Name:</td>
            <td style="padding: 6px 0; font-size: 15px; color: #171817; font-weight: 700;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #6b593b; font-weight: 600;">Email Address:</td>
            <td style="padding: 6px 0; font-size: 14px; color: #171817;">
              <a href="mailto:${safeEmail}" style="color: #9B8766; text-decoration: underline; font-weight: 600;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #6b593b; font-weight: 600;">Phone Number:</td>
            <td style="padding: 6px 0; font-size: 14px; color: #171817;">
              <a href="tel:${safePhone}" style="color: #171817; text-decoration: none; font-weight: 600;">${safePhone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #6b593b; font-weight: 600;">Project Address / City:</td>
            <td style="padding: 6px 0; font-size: 14px; color: #171817;">${safeAddress}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #6b593b; font-weight: 600;">Discipline / Scope:</td>
            <td style="padding: 6px 0; font-size: 14px; color: #171817; font-weight: 600;">${safeProjectType}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-size: 13px; color: #6b593b; font-weight: 600;">Estimated Budget:</td>
            <td style="padding: 6px 0; font-size: 14px; color: #171817; font-weight: 600;">${safeBudget}</td>
          </tr>
        </table>

        <!-- Message / Vision Box -->
        <div style="margin-bottom: 24px;">
          <p style="margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.16em; color: #6b593b; font-weight: 700;">Project Vision &amp; Requirements:</p>
          <div style="background: #ffffff; border-left: 3px solid #9B8766; border: 1px solid #e5dfd5; border-left-width: 4px; padding: 16px; font-size: 14px; line-height: 1.7; color: #2e2e2e; border-radius: 4px;">
            ${safeVision}
          </div>
        </div>

        <!-- Quick Action Button -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top: 24px;">
          <tr>
            <td style="text-align: center;">
              <a href="mailto:${safeEmail}?subject=Re:%20Marvel%20Custom%20Homes%20Consultation%20—%20${encodeURIComponent(data.projectType)}" style="display: inline-block; background: #171817; color: #ffffff; padding: 12px 28px; text-decoration: none; border-radius: 50px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.18em; font-weight: 600; border: 1px solid #9B8766;">
                Reply to Client (${safeEmail})
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background: #faf8f5; border-top: 1px solid #e5dfd5; padding: 18px 32px; font-size: 11px; color: #7a7a7a; text-align: center;">
        <p style="margin: 0;">Received on ${timestamp} (Central Time)</p>
        <p style="margin: 4px 0 0;">Marvel Custom Homes · 10830 N. Central Expressway Ste. 130, Dallas, TX 75231</p>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

    try {
      const transporter = getMailTransporter();
      const info = await transporter.sendMail({
        from: `"Marvel Custom Homes" <${SENDER_EMAIL}>`,
        to: RECIPIENT_EMAIL,
        replyTo: data.email,
        subject,
        text: textContent,
        html: htmlContent,
      });

      console.log("Inquiry email sent successfully:", {
        messageId: info.messageId,
        recipient: RECIPIENT_EMAIL,
        name: data.fullName,
      });

      return { ok: true };
    } catch (error) {
      console.error("Failed to send consultation inquiry email via Zoho SMTP:", error);
      // Re-throw or return error so the UI can notify the user
      throw new Error(
        "Unable to deliver inquiry email at this time. Please try again or call our studio directly.",
      );
    }
  });

export const submitNewsletter = createServerFn({ method: "POST" })
  .validator((data: unknown) => newsletterSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot check
    if (data.website) {
      return { ok: true };
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const safeEmail = escapeHtml(data.email);
    const safeSource = escapeHtml(data.source || "Website Form");
    const subject = `[Marvel Custom Homes] New Newsletter Subscription: ${data.email}`;

    const textContent = `
NEW NEWSLETTER SUBSCRIBER
==================================================
Email: ${data.email}
Source: ${data.source || "Website Form"}
Received: ${timestamp} (Central Time)
--------------------------------------------------
Marvel Custom Homes Dispatch
`.trim();

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin: 0; padding: 24px 0; background-color: #f5f3ef; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1c1c1c;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 540px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e5dfd5; overflow: hidden;">
    <tr>
      <td style="background: #171817; padding: 20px 24px; text-align: left; border-bottom: 3px solid #9B8766;">
        <p style="margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.22em; color: #d4af37; font-weight: 600;">Marvel Custom Homes Journal</p>
        <h2 style="margin: 4px 0 0; font-size: 20px; color: #faf8f5; font-family: Georgia, serif; font-weight: normal;">New Subscriber Alert</h2>
      </td>
    </tr>
    <tr>
      <td style="padding: 24px;">
        <p style="margin: 0 0 12px; font-size: 14px; color: #45443f;">A visitor has subscribed to the Marvel Custom Homes journal and newsletters:</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: #faf8f5; border-radius: 6px; border: 1px solid #ebd9c0; padding: 14px 18px;">
          <tr>
            <td style="padding: 4px 0; font-size: 13px; color: #6b593b; font-weight: 600; width: 90px;">Subscriber:</td>
            <td style="padding: 4px 0; font-size: 15px; color: #171817; font-weight: 700;">
              <a href="mailto:${safeEmail}" style="color: #9B8766; text-decoration: underline;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 4px 0; font-size: 13px; color: #6b593b; font-weight: 600;">Source:</td>
            <td style="padding: 4px 0; font-size: 13px; color: #171817;">${safeSource}</td>
          </tr>
          <tr>
            <td style="padding: 4px 0; font-size: 13px; color: #6b593b; font-weight: 600;">Timestamp:</td>
            <td style="padding: 4px 0; font-size: 13px; color: #171817;">${timestamp}</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

    try {
      const transporter = getMailTransporter();
      await transporter.sendMail({
        from: `"Marvel Custom Homes" <${SENDER_EMAIL}>`,
        to: RECIPIENT_EMAIL,
        replyTo: data.email,
        subject,
        text: textContent,
        html: htmlContent,
      });

      console.log("Newsletter subscription email sent:", {
        recipient: RECIPIENT_EMAIL,
        email: data.email,
        source: data.source,
      });

      return { ok: true };
    } catch (error) {
      console.error("Failed to send newsletter email via Zoho SMTP:", error);
      // For newsletter, we still return ok: true to the user so UX is not blocked
      return { ok: true };
    }
  });
