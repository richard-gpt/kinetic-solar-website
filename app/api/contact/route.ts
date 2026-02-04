import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  contactFormSchema,
  inquiryTypeLabels,
  inquiryTypeEmails,
} from "@/lib/contact-schema";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    const {
      fullName,
      company,
      email,
      phone,
      country,
      inquiryType,
      message,
      preferredContact,
    } = validatedData;

    const toEmail = inquiryTypeEmails[inquiryType];
    const inquiryLabel = inquiryTypeLabels[inquiryType];

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: "Kinetic Solar Website <noreply@kineticsolar.com>",
      to: [toEmail],
      replyTo: email,
      subject: `New ${inquiryLabel} from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${fullName}</td>
          </tr>
          ${
            company
              ? `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${company}</td>
          </tr>
          `
              : ""
          }
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${
            phone
              ? `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          `
              : ""
          }
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Country</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${country}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Inquiry Type</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${inquiryLabel}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Preferred Contact</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${preferredContact === "email" ? "Email" : "Phone"}</td>
          </tr>
        </table>
        <h3 style="margin-top: 20px;">Message</h3>
        <div style="padding: 16px; background: #f5f5f5; border-radius: 4px;">
          ${message.replace(/\n/g, "<br>")}
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
