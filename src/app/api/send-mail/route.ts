import { sendMicrosoftEmail } from "@/lib/transporter";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await sendMicrosoftEmail({ emailHtml: "test", fromName: "test", replyToEmail: "test", subject: "test" });
  
  if(res.success) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false, error: res.error });
  }
}
