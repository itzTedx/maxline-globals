import ContactFormSubmission from "@/emails/contact-template";
import { sendMicrosoftEmail } from "@/lib/transporter";
import { render } from "@react-email/components";
import { NextResponse } from "next/server";

export async function GET() {

 const emailHtml = await render(ContactFormSubmission({data: {fullName: "Test Name", companyName: "Test Company", email: "test@test.com", phoneNumber: "1234567890", serviceType: "general_inquiry", subject: "Test Subject", message: "Test Message", privacyPolicyConsent: true, fileUpload: null}}));

  const res = await sendMicrosoftEmail({ subject: "test", html: emailHtml, name: "Test Name", replyToEmail: "test@test.com" });
  
  if(res?.success) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false, error: res?.error });
  }
  

}
