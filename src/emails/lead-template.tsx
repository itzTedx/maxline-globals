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

interface LeadEmailProps {
	data: {
		name: string;
		email: string;
		phone: string;
		grossWeight: string;
		volume: string;
		chargeableVolume: number;
		totalCost: number;
		localDoc: boolean;
	};
}

export function LeadEmail({ data }: LeadEmailProps) {
	return (
		<Html>
			<Head />
			<Body style={main}>
				<Container style={container}>
					<Section style={header}>
						<Img
							alt="Maxline Logo"
							height="50"
							src="https://maxlineglobal.com/maxline-global-logo.png"
							style={logo}
							width="50"
						/>
						<Text style={heading}>New Calculator Lead</Text>
						<Text style={subheading}>
							A user has just completed a freight calculation on your website.
						</Text>
					</Section>

					<Section style={content}>
						<Text style={sectionTitle}>Lead Information</Text>
						<Text style={detailText}>
							<strong>Name:</strong> {data.name}
						</Text>
						<Text style={detailText}>
							<strong>Email:</strong>{" "}
							<Link href={`mailto:${data.email}`} style={link}>
								{data.email}
							</Link>
						</Text>
						<Text style={detailText}>
							<strong>Phone:</strong> {data.phone}
						</Text>

						<Hr style={divider} />

						<Text style={sectionTitle}>Calculation Details</Text>
						<Text style={detailText}>
							<strong>Gross Weight:</strong> {data.grossWeight} kg
						</Text>
						<Text style={detailText}>
							<strong>Volume:</strong> {data.volume} CBM
						</Text>
						<Text style={detailText}>
							<strong>Chargeable Volume:</strong> {data.chargeableVolume.toFixed(2)} CBM
						</Text>
						<Text style={detailText}>
							<strong>Local Documentation:</strong> {data.localDoc ? "Yes" : "No"}
						</Text>
						<Text style={detailText}>
							<strong>Estimated Total Cost:</strong> ${data.totalCost.toFixed(2)}
						</Text>
					</Section>

					<Hr style={hr} />
					<Section style={footer}>
						<Text style={footerText}>
							&copy; {new Date().getFullYear()} Maxline. All rights reserved.
						</Text>
						<Text style={footerText}>
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
	textAlign: "center" as const,
};

const logo = {
	margin: "0 auto 10px",
};

const heading = {
	fontSize: "32px",
	fontWeight: "700",
	color: "#1f2937",
	textAlign: "center" as const,
	margin: "0 0 8px",
	lineHeight: "1.2",
};

const subheading = {
	fontSize: "16px",
	color: "#6b7280",
	textAlign: "center" as const,
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
	color: "#078CD9",
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
	textAlign: "center" as const,
};

const footerText = {
	fontSize: "14px",
	color: "#6b7280",
	margin: "0 0 8px",
	lineHeight: "1.5",
};
