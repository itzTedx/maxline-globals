export type ServiceMessages = Record<string, unknown>;

export async function loadServiceMessages(
	locale: string
): Promise<ServiceMessages> {
	if (locale === "ar") {
		return (await import("@/dictionaries/services.ar.json")).default;
	}
	return (await import("@/dictionaries/services.en.json")).default;
}
