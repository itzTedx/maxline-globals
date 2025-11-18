import { Body, Container, Head, Hr, Html, Img, Link, Section, Text } from "@react-email/components";

import { ContactFormData } from "@/feature/forms/schema/contact-schema";

interface Props {
  data: ContactFormData;
}

export default function ContactFormSubmission(props: Props) {
  const {
    fullName = "N/A",
    companyName = "N/A",
    email = "N/A",
    phoneNumber = "N/A",
    serviceType = "Not specified",
    subject = "No subject provided",
    message = "No message content.",
    privacyPolicyConsent = false,
    fileUpload,
  } = props.data;

  const fileName = fileUpload ? fileUpload.name : undefined;
  const fileType = fileUpload ? fileUpload.type : undefined;
  const hasAttachment = !!fileUpload;
  const companyLogo = "https://maxlineglobal.com/maxline-global-logo.png";

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header with Company Logo */}
          <Section style={header}>
            <Img
              alt="Company Logo"
              height="60"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://v0.dev/placeholder.svg?height=60&width=60";
              }}
              src={companyLogo}
              style={logo as React.CSSProperties}
              width="60"
            />
          </Section>

          {/* Main Content Card */}
          <Section style={content}>
            <Text style={heading}>New Contact Form Submission</Text>
            <Text style={introText}>
              You have received a new message from your website&apos;s contact form. Details are provided below:
            </Text>

            {/* Personal Details Section */}
            <Section style={detailsSection}>
              <Text style={sectionTitle}>Personal Details</Text>
              <Hr style={divider} />
              <Section style={detailRow}>
                <Text style={detailLabel}>Full Name:</Text>
                <Text style={detailValue}>{fullName}</Text>
              </Section>
              <Section style={detailRow}>
                <Text style={detailLabel}>Company Name:</Text>
                <Text style={detailValue}>{companyName}</Text>
              </Section>
              <Section style={detailRow}>
                <Text style={detailLabel}>Email:</Text>
                <Text style={detailValue}>{email}</Text>
              </Section>
              <Section style={detailRow}>
                <Text style={detailLabel}>Phone Number:</Text>
                <Text style={detailValue}>{phoneNumber}</Text>
              </Section>
            </Section>

            {/* Message Details Section */}
            <Section style={detailsSection}>
              <Text style={sectionTitle}>Message Details</Text>
              <Hr style={divider} />
              <Section style={detailRow}>
                <Text style={detailLabel}>Service Type:</Text>
                <Text style={detailValue}>{serviceType}</Text>
              </Section>
              <Section style={detailRow}>
                <Text style={detailLabel}>Subject:</Text>
                <Text style={detailValue}>{subject}</Text>
              </Section>
              <Section style={messageSection}>
                <Text style={detailLabel}>Message:</Text>
                <Text style={messageContent}>{message}</Text>
              </Section>
            </Section>

            {/* Consent and Attachment Section */}
            <Section style={detailsSection}>
              <Text style={sectionTitle}>Additional Information</Text>
              <Hr style={divider} />
              <Section style={detailRow}>
                <Text style={detailLabel as React.CSSProperties}>Privacy Policy Consent:</Text>
                <Text style={detailValue as React.CSSProperties}>{privacyPolicyConsent ? "Yes" : "No"}</Text>
              </Section>

              {hasAttachment && (
                <Section style={detailRow as React.CSSProperties}>
                  <Text style={detailLabel as React.CSSProperties}>Attached File:</Text>
                  <Text style={detailValue as React.CSSProperties}>
                    {fileName} ({fileType})
                  </Text>
                </Section>
              )}
            </Section>

            <Text style={closingText}>Please respond to the sender at your earliest convenience.</Text>
          </Section>

          {/* Footer */}
          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>This email was sent from your website&apos;s contact form.</Text>
            <Text style={footerText}>
              <Link href="#" style={footerLink}>
                Manage your website
              </Link>
              {" • "}
              <Link href="#" style={footerLink}>
                Support
              </Link>
            </Text>
            <Text style={footerText}>© 2024 Your Company. All rights reserved.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f8f8f8",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "600px",
  maxWidth: "100%",
};

const header = {
  textAlign: "center" as React.CSSProperties["textAlign"],
  padding: "20px 0",
};

const logo = {
  margin: "0 auto",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
};

const content = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  padding: "36px 32px",
  boxShadow: "0 6px 16px -4px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)",
};

const heading = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#1a202c",
  textAlign: "center" as React.CSSProperties["textAlign"],
  margin: "0 0 16px",
  lineHeight: "1.2",
};

const introText = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#4a5568",
  textAlign: "center" as React.CSSProperties["textAlign"],
  margin: "0 0 32px",
};

const detailsSection = {
  backgroundColor: "#fbfbfb",
  borderRadius: "8px",
  padding: "24px",
  marginBottom: "24px",
  border: "1px solid #e2e8f0",
};

const sectionTitle = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#2d3748",
  margin: "0 0 16px",
};

const divider = {
  borderColor: "#edf2f7",
  margin: "0 0 20px",
};

const detailRow = {
  marginBottom: "16px",
};

const detailLabel = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#4a5568",
  margin: "0 0 4px",
  textTransform: "uppercase" as React.CSSProperties["textTransform"],
  letterSpacing: "0.05em",
};

const detailValue = {
  fontSize: "16px",
  color: "#2d3748",
  margin: "0",
  lineHeight: "1.5",
};

const messageSection = {
  marginTop: "20px",
};

const messageContent = {
  fontSize: "16px",
  color: "#2d3748",
  lineHeight: "1.6",
  backgroundColor: "#f0f4f8",
  padding: "16px",
  borderRadius: "8px",
  border: "1px solid #cbd5e0",
  whiteSpace: "pre-wrap" as React.CSSProperties["whiteSpace"],
  wordBreak: "break-word" as React.CSSProperties["wordBreak"],
};

const closingText = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#4a5568",
  textAlign: "center" as React.CSSProperties["textAlign"],
  margin: "32px 0 0",
};

const hr = {
  borderColor: "#e2e8f0",
  margin: "48px 0",
};

const footer = {
  textAlign: "center" as React.CSSProperties["textAlign"],
  padding: "0 20px",
};

const footerText = {
  fontSize: "13px",
  color: "#718096",
  margin: "0 0 8px",
  lineHeight: "1.5",
};

const footerLink = {
  color: "#3182ce",
  textDecoration: "none",
};
