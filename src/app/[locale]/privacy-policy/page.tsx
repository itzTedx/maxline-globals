import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("PrivacyPolicy");

  return (
    <main className="bg-background relative z-10 container rounded-b-3xl pb-20 shadow-xl">
      <div className="mx-auto max-w-prose px-4 py-8">
        <h1 className="font-grotesk text-brand-dark mb-8 text-3xl font-bold md:text-4xl lg:text-5xl">
          {t("title")}
        </h1>
        <div className="space-y-8">
          <section>
            <h2 className="font-grotesk text-brand-dark mb-4 text-2xl font-semibold">
              {t("introduction.title")}
            </h2>
            <p className="mb-4 font-light">{t("introduction.text1")}</p>
            <p className="font-light">{t("introduction.text2")}</p>
          </section>
          <section>
            <h2 className="font-grotesk text-brand-dark mb-4 text-2xl font-semibold">
              {t("informationWeCollect.title")}
            </h2>
            <h3 className="text-secondary mb-3 text-xl font-medium">
              {t("informationWeCollect.informationYouProvide.title")}
            </h3>
            <p className="mb-4 font-light">
              {t("informationWeCollect.informationYouProvide.text")}
            </p>
            <ul className="list-disc space-y-2 pl-6 font-light">
              <li>
                {t(
                  "informationWeCollect.informationYouProvide.personalInformation.title"
                )}
                <ul className="mt-2 list-disc pl-6">
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.personalInformation.fullName"
                    )}
                  </li>
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.personalInformation.companyName"
                    )}
                  </li>
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.personalInformation.emailAddress"
                    )}
                  </li>
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.personalInformation.phoneNumber"
                    )}
                  </li>
                </ul>
              </li>
              <li>
                {t(
                  "informationWeCollect.informationYouProvide.shippingInformation.title"
                )}
                <ul className="mt-2 list-disc pl-6">
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.shippingInformation.senderRecipient"
                    )}
                  </li>
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.shippingInformation.shippingAddresses"
                    )}
                  </li>
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.shippingInformation.packageDescriptions"
                    )}
                  </li>
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.shippingInformation.weightVolume"
                    )}
                  </li>
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.shippingInformation.preferredDates"
                    )}
                  </li>
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.shippingInformation.transportMode"
                    )}
                  </li>
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.shippingInformation.customsDocumentation"
                    )}
                  </li>
                </ul>
              </li>
              <li>
                {t(
                  "informationWeCollect.informationYouProvide.serviceInformation.title"
                )}
                <ul className="mt-2 list-disc pl-6">
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.serviceInformation.serviceType"
                    )}
                  </li>
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.serviceInformation.industryRequirements"
                    )}
                  </li>
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.serviceInformation.customLogistics"
                    )}
                  </li>
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.serviceInformation.additionalSpecs"
                    )}
                  </li>
                </ul>
              </li>
              <li>
                {t(
                  "informationWeCollect.informationYouProvide.documentation.title"
                )}
                <ul className="mt-2 list-disc pl-6">
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.documentation.attachedFiles"
                    )}
                  </li>
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.documentation.projectDocumentation"
                    )}
                  </li>
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.documentation.customRequirements"
                    )}
                  </li>
                  <li>
                    {t(
                      "informationWeCollect.informationYouProvide.documentation.certificatesPermits"
                    )}
                  </li>
                </ul>
              </li>
            </ul>
            <h3 className="text-secondary mt-6 mb-3 text-xl font-medium">
              {t("informationWeCollect.automaticallyCollected.title")}
            </h3>
            <p className="mb-4 font-light">
              {t("informationWeCollect.automaticallyCollected.text")}
            </p>
            <ul className="list-disc space-y-2 pl-6 font-light">
              <li>
                {t("informationWeCollect.automaticallyCollected.deviceInfo")}
              </li>
              <li>
                {t("informationWeCollect.automaticallyCollected.usageData")}
              </li>
              <li>
                {t("informationWeCollect.automaticallyCollected.locationInfo")}
              </li>
              <li>
                {t(
                  "informationWeCollect.automaticallyCollected.referralSource"
                )}
              </li>
              <li>
                {t(
                  "informationWeCollect.automaticallyCollected.deviceIdentifiers"
                )}
              </li>
            </ul>
          </section>
          <section>
            <h2 className="font-grotesk text-brand-dark mb-4 text-2xl font-semibold">
              {t("howWeUseYourInformation.title")}
            </h2>
            <p className="mb-4 font-light">
              {t("howWeUseYourInformation.text")}
            </p>
            <ul className="list-disc space-y-2 pl-6 font-light">
              <li>{t("howWeUseYourInformation.processRequests")}</li>
              <li>{t("howWeUseYourInformation.provideSolutions")}</li>
              <li>{t("howWeUseYourInformation.manageWarehousing")}</li>
              <li>{t("howWeUseYourInformation.handleProjectForwarding")}</li>
              <li>{t("howWeUseYourInformation.facilitateCustoms")}</li>
              <li>{t("howWeUseYourInformation.communicateShipments")}</li>
              <li>{t("howWeUseYourInformation.sendNotices")}</li>
              <li>{t("howWeUseYourInformation.improveServices")}</li>
              <li>{t("howWeUseYourInformation.complyLegal")}</li>
              <li>{t("howWeUseYourInformation.protectFraud")}</li>
            </ul>
          </section>
          <section>
            <h2 className="font-grotesk text-brand-dark mb-4 text-2xl font-semibold">
              {t("informationSharing.title")}
            </h2>
            <p className="mb-4 font-light">{t("informationSharing.text")}</p>
            <ul className="list-disc space-y-2 pl-6 font-light">
              <li>{t("informationSharing.logisticsPartners")}</li>
              <li>{t("informationSharing.customsAuthorities")}</li>
              <li>{t("informationSharing.shippingCarriers")}</li>
              <li>{t("informationSharing.warehousingPartners")}</li>
              <li>{t("informationSharing.professionalAdvisors")}</li>
              <li>{t("informationSharing.lawEnforcement")}</li>
            </ul>
          </section>
          <section>
            <h2 className="font-grotesk text-brand-dark mb-4 text-2xl font-semibold">
              {t("dataSecurity.title")}
            </h2>
            <p className="mb-4 font-light">{t("dataSecurity.text")}</p>
            <ul className="list-disc space-y-2 pl-6 font-light">
              <li>{t("dataSecurity.encryption")}</li>
              <li>{t("dataSecurity.secureSubmission")}</li>
              <li>{t("dataSecurity.accessControls")}</li>
              <li>{t("dataSecurity.securityAssessments")}</li>
              <li>{t("dataSecurity.employeeTraining")}</li>
            </ul>
            <p className="mt-4 font-light">{t("dataSecurity.disclaimer")}</p>
          </section>
          <section>
            <h2 className="font-grotesk text-brand-dark mb-4 text-2xl font-semibold">
              {t("yourRights.title")}
            </h2>
            <p className="mb-4 font-light">{t("yourRights.text")}</p>
            <ul className="list-disc space-y-2 pl-6 font-light">
              <li>{t("yourRights.access")}</li>
              <li>{t("yourRights.correct")}</li>
              <li>{t("yourRights.delete")}</li>
              <li>{t("yourRights.object")}</li>
              <li>{t("yourRights.withdraw")}</li>
              <li>{t("yourRights.optOut")}</li>
            </ul>
            <p className="mt-4 font-light">{t("yourRights.contact")}</p>
          </section>
          <section>
            <h2 className="font-grotesk text-brand-dark mb-4 text-2xl font-semibold">
              {t("internationalTransfers.title")}
            </h2>
            <p className="font-light">{t("internationalTransfers.text")}</p>
          </section>
          <section>
            <h2 className="font-grotesk text-brand-dark mb-4 text-2xl font-semibold">
              {t("changesToPolicy.title")}
            </h2>
            <p className="font-light">{t("changesToPolicy.text")}</p>
          </section>
          <section>
            <h2 className="font-grotesk text-brand-dark mb-4 text-2xl font-semibold">
              {t("contactUs.title")}
            </h2>
            <p className="font-light">
              {t("contactUs.text")}
              <br />
              <a
                href="mailto:info@maxlineglobals.com"
                className="text-primary hover:underline"
              >
                info@maxlineglobals.com
              </a>
            </p>
          </section>
          <p className="mt-8 text-sm font-light">{t("lastUpdated")}</p>
        </div>
      </div>
    </main>
  );
}
