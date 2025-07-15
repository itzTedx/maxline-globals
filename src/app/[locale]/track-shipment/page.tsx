import { Metadata } from "next";
import { Suspense } from "react";

import { RedirectWithLoading } from "./redirect-with-loading";

export const metadata: Metadata = {
  title: "Track Your Shipment | Maxline Global",
  description:
    "Track your shipment status with Maxline Global's real-time tracking system. Get instant updates on your cargo's location and delivery status.",
  openGraph: {
    title: "Track Your Shipment | Maxline Global",
    description:
      "Track your shipment status with Maxline Global's real-time tracking system. Get instant updates on your cargo's location and delivery status.",
    type: "website",
  },
};

export default function TrackingRedirect() {
  return (
    <Suspense>
      <RedirectWithLoading />;
    </Suspense>
  );
}
