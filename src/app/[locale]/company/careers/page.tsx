import { IconArrowRight, IconClock, IconGlobe, IconHeart, IconStar, IconUsers } from "@tabler/icons-react";

import LetterSwapPingPong from "@/components/animation/letter-swap-pingpong-anim";
import SpotlightCard from "@/components/animation/spotlight-card";
import { StaggeredText } from "@/components/animation/staggered-text";
import { HeroHeader } from "@/components/hero-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function CareersPage() {
  const benefits = [
    {
      icon: IconStar,
      title: "Innovative Environment",
      description: "Work on forward-thinking projects in tech, logistics, and global distribution."
    },
    {
      icon: IconUsers,
      title: "Career Growth",
      description: "Get the support and tools to advance your skills and grow within the company."
    },
    {
      icon: IconHeart,
      title: "Inclusive Culture",
      description: "Join a diverse, collaborative team that values transparency and integrity."
    },
    {
      icon: IconGlobe,
      title: "Global Impact",
      description: "Be part of a company making waves across international markets."
    },
    {
      icon: IconClock,
      title: "Work-Life Balance",
      description: "We value your well-being and offer flexible working opportunities where possible."
    }
  ];



  return (
    <main className="bg-background relative z-10 rounded-b-3xl pb-20 shadow-xl">
      <HeroHeader
        subtitle="Join Our Team"
        title={[
          { text: "Careers at " },
          { text: "Maxline", className: "text-secondary" },
          { text: " Globals" }
        ]}
        description="Join a team that's powering the future of technology and logistics."
        className="container"
      />

      {/* Mission Statement */}
      <section className="container py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          <div className="space-y-6 col-span-2">
            <h2 className="font-grotesk text-brand-dark text-3xl md:text-4xl lg:text-5xl">
              <StaggeredText text="Building Careers, Not Just Jobs" />
            </h2>
            <p className="text-brand-gray text-lg leading-relaxed font-light md:text-xl">
              At Maxline Globals, we don&apos;t just offer jobs—we build careers. As a leading provider of cutting-edge technology solutions, logistics innovations, and global distribution, we&apos;re on a mission to simplify and transform industries through smart, scalable solutions.
            </p>
            <p className="text-brand-gray text-lg leading-relaxed font-light md:text-xl">
              We believe that our success is driven by the talent, passion, and innovation of our people. If you&apos;re looking for a place where your ideas are valued, your growth is supported, and your work truly matters—you&apos;re in the right place.
            </p>
          </div>
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <div className="space-y-4">
              <h3 className="font-grotesk text-brand-dark text-2xl md:text-3xl">
                Why Choose Maxline?
              </h3>
              <ul className="grid  gap-4">
                <li className="flex items-start gap-3">
                  <div className="bg-secondary text-white rounded-full p-2 ">
                    <IconStar className="size-4" />
                  </div>
                  <span className="text-brand-gray">Innovation-driven culture</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary text-white rounded-full p-2 ">
                    <IconUsers className="size-4" />
                  </div>
                  <span className="text-brand-gray">Global team collaboration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary text-white rounded-full p-2 ">
                    <IconGlobe className="size-4" />
                  </div>
                  <span className="text-brand-gray">International opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary text-white rounded-full p-2 ">
                    <IconHeart className="size-4" />
                  </div>
                  <span className="text-brand-gray">Work-life balance focus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <Separator />
      </div>

      {/* Benefits Section */}
      <section className="container py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-grotesk text-brand-dark text-3xl md:text-4xl lg:text-5xl mb-4">
            <StaggeredText text="Why Work with Us?" />
          </h2>
        </div>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <SpotlightCard
            key={index} 
            spotlightColor="rgba(0, 200, 255, 0.3)"
            className="overflow-hidden rounded-xl bg-white p-6 md:p-10"
          >
            <div className="bg-muted flex size-16 items-center justify-center rounded-full md:size-20">
              <benefit.icon className="text-brand-gray size-8 stroke-[1.5] md:size-12" />
            </div>
            <h5 className="font-grotesk text-brand-dark mt-8 mb-2 text-2xl md:mt-12 md:mb-3 md:text-4xl">
            {benefit.title}
            </h5>
            <p className="text-sm md:text-base">
            {benefit.description}
            </p>
          </SpotlightCard>
            // <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            //   <CardHeader>
            //     <div className="bg-muted flex size-12 items-center justify-center rounded-full mb-4">
            //       <benefit.icon className="text-secondary size-6" />
            //     </div>
            //     <CardTitle className="font-grotesk text-brand-dark text-xl md:text-2xl">
            //       {benefit.title}
            //     </CardTitle>
            //   </CardHeader>
            //   <CardContent>
            //     <CardDescription className="text-brand-gray text-base leading-relaxed">
            //       {benefit.description}
            //     </CardDescription>
            //   </CardContent>
            // </Card>
          ))}
        </ul>
      </section>

      
      {/* CTA Section */}
      <section className="container py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-grotesk text-brand-dark text-3xl md:text-4xl lg:text-5xl mb-6">
            <StaggeredText text="Ready to Power the Future?" />
          </h2>
                      <p className="text-brand-gray text-lg leading-relaxed font-light md:text-xl mb-8">
              Whether you&apos;re an experienced professional or just starting out, Maxline Globals is a place to grow, innovate, and lead. Join us in shaping the future.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="btnIcon" >
      <Link href="mailto:enquires@maxlineglobals.com" className="text-brand-dark group gap-3">
        <LetterSwapPingPong
          label="Apply Now"
          staggerFrom="first"
          reverse={false}
          className="w-full justify-start font-semibold"
        />
        <div className="bg-primary text-brand-dark group-hover:bg-background flex size-8 shrink-0 items-center justify-center rounded transition duration-500">
          <IconArrowRight />
        </div>
      </Link>
    </Button>
          <Button asChild size="btnIcon" variant='secondary' className="bg-white">
      <Link href="mailto:enquires@maxlineglobals.com" className="text-brand-dark group gap-3">
        <LetterSwapPingPong
          label="Email Us"
          staggerFrom="first"
          reverse={false}
          className="w-full justify-start font-semibold"
        />
        <div className="bg-primary text-brand-dark group-hover:bg-background flex size-8 shrink-0 items-center justify-center rounded transition duration-500">
          <IconArrowRight />
        </div>
      </Link>
    </Button>
            
            
          </div>
          <p className="text-brand-gray text-sm mt-4">
            Send your resume to{' '}
            <a href="mailto:enquires@maxlineglobals.com" className="text-secondary hover:underline">
            enquires@maxlineglobals.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
