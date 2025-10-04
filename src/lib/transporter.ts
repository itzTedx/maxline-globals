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

export async function sendMicrosoftEmail(data: {
    subject: string;
    html: string;
    replyToEmail: string,
    name: string
}) {
    try {
      const {subject, html, replyToEmail, name} = data;

    const tokenResponse = await cca.acquireTokenByClientCredential({ scopes: SCOPES });
    const accessToken = tokenResponse?.accessToken;
    if (!accessToken) throw new Error("Failed to acquire access token");

    const emailData = {
      message: {
        subject,
        body: {
          contentType: "HTML",
          content: html,
        },
        toRecipients: [{ emailAddress: { address: "melwinafs@gmail.com" } }],
        from: { emailAddress: { address: "enquires@maxlineglobal.com" } },
        replyTo: [{ emailAddress: { address: replyToEmail, name } }],
      },
    };

    const response = await axios.post(
      "https://graph.microsoft.com/v1.0/users/enquires@maxlineglobal.com/sendMail",
      emailData,
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
      return { success: false, error: response.statusText };
    }
  } catch (err) {
        console.error("Error sending mail via Microsoft Graph:", err);
        return { success: false, error: err };
  }
}
