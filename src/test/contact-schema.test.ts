import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

const valid = {
  fullName: "Jane Doe", email: "jane@example.com", phone: "(214) 555-1234",
  address: "", projectType: "Interior Finish-Out", budget: "$3M+",
  vision: "A limestone home with a chef's kitchen.", website: "",
};

describe("consultation form", () => {
  it("accepts a complete inquiry", () => expect(contactSchema.safeParse(valid).success).toBe(true));
  it("rejects an invalid email", () => expect(contactSchema.safeParse({ ...valid, email: "nope" }).success).toBe(false));
  it("rejects submissions where the spam trap is filled", () =>
    expect(contactSchema.safeParse({ ...valid, website: "spam" }).success).toBe(false));
});
