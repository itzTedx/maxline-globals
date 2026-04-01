"use client";

import { ProgressProvider } from "@bprogress/next/app";

import OpenPanelProvider from "@/lib/openpanel";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<OpenPanelProvider>
			<ProgressProvider
				color="#078CD9"
				height="3px"
				memo
				options={{ showSpinner: false }}
				shallowRouting
			>
				{children}
			</ProgressProvider>
		</OpenPanelProvider>
	);
};

export default Providers;
