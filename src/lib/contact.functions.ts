import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "./contact-schema";

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot filled → silently accept without processing.
    if (data.website) return { ok: true };
    // Delivery (email / storage) is connected once a backend is enabled.
    console.log("New consultation inquiry", { name: data.fullName, type: data.projectType });
    return { ok: true };
  });
