"use client";

import { CertificatesSection } from "@/feature/about/sections/certificates";
import { CompanySection } from "@/feature/about/sections/company";
import { AboutHeroSection } from "@/feature/about/sections/hero";
import { LeaderWords } from "@/feature/about/sections/leader-words";
import { Principles } from "@/feature/about/sections/principles";
import { WhoWeAre } from "@/feature/about/sections/who-we-are";
import { Cta } from "@/feature/cta";

export default function AboutPage() {
  return (
    <main className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl">
      <AboutHeroSection />
      <WhoWeAre />

      <Principles />
      <LeaderWords />
      <CompanySection />
      <CertificatesSection />
      <Cta />
    </main>
  );
}
