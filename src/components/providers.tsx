"use client";

import { ProgressProvider } from "@bprogress/next/app";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ProgressProvider
			color="#078CD9"
			height="3px"
			memo
			options={{ showSpinner: false }}
			shallowRouting
		>
			{children}
		</ProgressProvider>
	);
};

export default Providers;
