import React from "react";

import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Section,
  Text,
} from "@react-email/components";

import { QuoteFormData } from "@/feature/forms/schema/quote-schema";

interface QuoteRequestEmailProps {
  data: QuoteFormData;
}

export function QuoteRequestEmail(props: QuoteRequestEmailProps) {
  const {
    customerName = "Valued Customer",
    companyName,
    email = "no-email@example.com",
    phone = "N/A",
    senderName = "Sender",
    recipientName = "Recipient",
    senderAddress = "N/A",
    recipientAddress = "N/A",
    preferredDeliveryDate,
    preferredModeOfTransport = "N/A",
    typeOfPackaging = "N/A",
    shippingDate,
    attachFiles,
    pieces = 0,
    packageDescription = "N/A",
    weight = 0,
    volume = 0,
    additionalInformation,
  } = props.data;

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return "N/A";
    // Ensure it's a Date object
    const d = date instanceof Date ? date : new Date(date);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatNumber = (num: number | undefined, unit = "") => {
    if (typeof num !== "number") return "N/A";
    return `${num.toLocaleString()}${unit ? " " + unit : ""}`;
  };

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header as React.CSSProperties}>
            <Img
              src="/maxline-global-logo.png"
              width="50"
              height="50"
              alt="Maxline Logo"
              style={logo as React.CSSProperties}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://v0.dev/placeholder.svg?height=50&width=50";
              }}
            />
            <Text style={heading as React.CSSProperties}>
              New Quote Request
            </Text>
            <Text style={subheading as React.CSSProperties}>
              A new quote request has been submitted.
            </Text>
          </Section>

          {/* Quote Details */}
          <Section style={content}>
            <Text style={sectionTitle}>Customer Information</Text>
            <Text style={detailText}>
              <strong>Customer Name:</strong> {customerName}
            </Text>
            {companyName && (
              <Text style={detailText}>
                <strong>Company Name:</strong> {companyName}
              </Text>
            )}
            <Text style={detailText}>
              <strong>Email:</strong>{" "}
              <Link href={`mailto:${email}`} style={link}>
                {email}
              </Link>
            </Text>
            <Text style={detailText}>
              <strong>Phone:</strong> {phone}
            </Text>

            <Hr style={divider} />

            <Text style={sectionTitle}>Shipping Details</Text>
            <Text style={detailText}>
              <strong>Sender Name:</strong> {senderName}
            </Text>
            <Text style={detailText}>
              <strong>Sender Address:</strong> {senderAddress}
            </Text>
            <Text style={detailText}>
              <strong>Recipient Name:</strong> {recipientName}
            </Text>
            <Text style={detailText}>
              <strong>Recipient Address:</strong> {recipientAddress}
            </Text>
            <Text style={detailText}>
              <strong>Preferred Delivery Date:</strong>{" "}
              {formatDate(preferredDeliveryDate)}
            </Text>
            <Text style={detailText}>
              <strong>Preferred Mode of Transport:</strong>{" "}
              {preferredModeOfTransport}
            </Text>
            <Text style={detailText}>
              <strong>Type of Packaging:</strong> {typeOfPackaging}
            </Text>
            <Text style={detailText}>
              <strong>Shipping Date:</strong> {formatDate(shippingDate)}
            </Text>

            <Hr style={divider} />

            <Text style={sectionTitle}>Package Details</Text>
            <Text style={detailText}>
              <strong>Pieces:</strong> {formatNumber(pieces)}
            </Text>
            <Text style={detailText}>
              <strong>Package Description:</strong> {packageDescription}
            </Text>
            <Text style={detailText}>
              <strong>Weight:</strong> {formatNumber(weight, "kg")}
            </Text>
            <Text style={detailText}>
              <strong>Volume:</strong> {formatNumber(volume, "m³")}
            </Text>

            {additionalInformation && (
              <>
                <Hr style={divider} />
                <Text style={sectionTitle}>Additional Information</Text>
                <Text style={detailText}>{additionalInformation}</Text>
              </>
            )}

            {attachFiles && attachFiles.length > 0 && (
              <>
                <Hr style={divider} />
                <Text style={sectionTitle}>Attached Files</Text>
                {attachFiles.map((file: File, index: number) => (
                  <Text key={index} style={detailText}>
                    - {file.name}
                  </Text>
                ))}
              </>
            )}
          </Section>

          {/* Footer */}
          <Hr style={hr} />
          <Section style={footer as React.CSSProperties}>
            <Text style={footerText as React.CSSProperties}>
              &copy; {new Date().getFullYear()} Maxline. All rights reserved.
            </Text>
            <Text style={footerText as React.CSSProperties}>
              This is an automated notification. Please do not reply.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "600px",
};

const header = {
  padding: "20px 0",
  textAlign: "center",
};

const logo = {
  margin: "0 auto 10px",
};

const heading = {
  fontSize: "32px",
  fontWeight: "700",
  color: "#1f2937",
  textAlign: "center",
  margin: "0 0 8px",
  lineHeight: "1.2",
};

const subheading = {
  fontSize: "16px",
  color: "#6b7280",
  textAlign: "center",
  margin: "0 0 24px",
};

const content = {
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  padding: "32px 24px",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
};

const sectionTitle = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#1f2937",
  margin: "0 0 16px",
  borderBottom: "1px solid #e5e7eb",
  paddingBottom: "8px",
};

const detailText = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#374151",
  margin: "0 0 10px",
};

const link = {
  color: "#4f46e5",
  textDecoration: "none",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "32px 0",
};

const footer = {
  padding: "0 40px",
  textAlign: "center",
};

const footerText = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0 0 8px",
  lineHeight: "1.5",
};
