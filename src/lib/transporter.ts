import { ConfidentialClientApplication } from "@azure/msal-node";
import axios from "axios";

const config = {
  auth: {
    clientId: process.env.AZURE_CLIENT_ID!,
    authority: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}`,
    clientSecret: process.env.AZURE_CLIENT_SECRET!,
  },
};

const SCOPES = ["https://graph.microsoft.com/.default"];

const cca = new ConfidentialClientApplication(config);

export async function sendMicrosoftEmail(emailParams: {
  subject: string;
  emailHtml: string;
  fromName: string;
  replyToEmail: string;
  replyToName?: string;
  fileUpload?: File | null;
}) {
  try {
    const tokenResponse = await cca.acquireTokenByClientCredential({ scopes: SCOPES });
    const accessToken = tokenResponse?.accessToken;
    if (!accessToken) throw new Error("Failed to acquire access token");

    const { subject, emailHtml, fromName, replyToEmail, replyToName, fileUpload } = emailParams;

    // Prepare attachments if file exists
    const attachments = [];
    if (fileUpload) {
      const arrayBuffer = await fileUpload.arrayBuffer();
      const base64Content = Buffer.from(arrayBuffer).toString('base64');
      attachments.push({
        "@odata.type": "#microsoft.graph.fileAttachment",
        name: fileUpload.name,
        contentType: fileUpload.type,
        contentBytes: base64Content,
      });
    }

    const graphEmailData = {
      message: {
        subject: subject || "New Contact Form Submission",
        body: {
          contentType: "HTML",
          content: emailHtml,
        },
        toRecipients: [{ emailAddress: { address: "melwinafs@gmail.com" } }],
        from: { emailAddress: { address: "enquires@maxlineglobal.com" } },
        replyTo: [{ emailAddress: { address: replyToEmail, name: replyToName || fromName } }],
        attachments: attachments.length > 0 ? attachments : undefined,
      },
    };

    const response = await axios.post(
      "https://graph.microsoft.com/v1.0/users/enquires@maxlineglobal.com/sendMail",
      graphEmailData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 202) {
      console.log("📨 Email sent successfully!");
      return { success: true };
    } else {
      console.error(`❌ Failed to send email: ${response.statusText}`);
      return { success: false, error: "Failed to send email" };
    }
  } catch (err) {
    console.error("Error sending mail via Microsoft Graph:", err);
    return { success: false, error: "Failed to send email" };
  }
}
