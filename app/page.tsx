import CredentialsSlider from "@/components/credentials-slider";
import CTABtn from "@/components/CTA-btn";
import Heading1AndP from "@/components/heading-1-and-p";
import Heading2AndP from "@/components/heading-2-and-p";
import LinkButton from "@/components/link-button";
import MainHeroOverlay from "@/components/main-hero-overlay";
import ProjectsMapper from "@/components/projects-mapper";
import TrustedBy from "@/components/trusted-by";
import aboutUsBg from "@/public/about-us-bg.webp";
import { supabaseServer } from "@/utils/supabase/server";
import {
  BicepsFlexed,
  Calendar,
  CheckCircle,
  Medal,
  Smile,
  Users,
} from "lucide-react";
import Image from "next/image";
export default async function Home() {
  const supabase = await supabaseServer();

  const featured_projects = await supabase
    .from("projects")
    .select("id, imgs, slug, title")
    .eq("is_featured", true)
    .not("imgs", "is", null)
    .order("title");

  const features = [
    {
      count: 100,
      title: "Projects Completed",
      icon: Medal,
    },
    { count: 60, title: "Satisfied Clients", icon: Smile },
    { count: 20, title: "Years of Experience", icon: Calendar },
    { count: 100, title: "Team Members", icon: Users },
  ];

  return (
    <>
      <section
        id="main-hero"
        className="bg-primary xmd:pt-30 relative w-full overflow-hidden pt-20 pb-6"
      >
        <Heading1AndP
          h1="Santienz Phils. Inc."
          p={`The Ultimate
            Polyurethane Mortar Floor`}
          withCta
          h1Class="font-bold text-base md:text-base lg:text-base text-primary-foreground leading-tight z-20 relative"
          pClass="text-tertiary z-20 relative text-center whitespace-pre-line text-4xl md:text-6xl lg:text-6xl leading-tight font-bold"
          parentClass="max-w-6xl mx-auto px-4"
          alignment="center-only"
        >
          <div className="xmd:gap-4 z-20 mx-auto flex w-fit flex-col gap-1 sm:flex-row">
            <CTABtn variant="tertiary" href="/contact-us">
              Request Quote
            </CTABtn>
            <CTABtn
              className="border-tertiary text-primary-foreground bg-tertiary/10 hover:bg-tertiary/20 hover:text-primary-foreground backdrop-blur"
              href="/about-us"
              variant="outline"
            >
              Learn More About Us
            </CTABtn>
          </div>
        </Heading1AndP>
        <div className="xmd:px-4 xmd:gap-4 mx-auto mt-6 grid max-w-6xl grid-cols-2 gap-1 px-1 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={crypto.randomUUID()}
              className="bg-background/5 xmd:p-4 z-20 flex flex-col gap-2 rounded-md p-3 drop-shadow-lg backdrop-blur-xs"
            >
              <div className="text-tertiary inline-flex items-center gap-1 text-2xl font-bold md:text-4xl">
                <span className="shrink-0">
                  <feature.icon />
                </span>
                {feature.count}+
              </div>
              <span className="text-primary-foreground">{feature.title}</span>
            </div>
          ))}
        </div>
        <MainHeroOverlay>
          <video
            src="AVP_2023.mp4"
            autoPlay
            loop
            className="xmd:rounded-md h-full w-full object-cover brightness-50"
            muted
          ></video>
        </MainHeroOverlay>
      </section>
      <section className="mt-6 space-y-6">
        <Heading2AndP
          h="Featured Projects"
          p="Take a look at some of our completed projects"
          alignment="left-only"
        />
        <div className="xmd:gap-4 xxs:grid-cols-2 xmd:px-4 mx-auto grid max-w-6xl auto-rows-fr gap-1 px-1">
          <ProjectsMapper projects={featured_projects.data ?? []} />
        </div>
        <div className="flex px-4">
          <LinkButton href="/projects" title="View More Projects" />
        </div>
      </section>
      <TrustedBy />
      <section className="mt-24 space-y-6">
        <Heading2AndP
          h="About Santienz"
          p="Over the years, we have successfully completed more than 1 million square meters of installations across the Philippines, demonstrating our commitment to quality, innovation, and nationwide service."
          alignment="left-only"
        />

        <div className="xmd:px-4 mx-auto max-w-6xl px-1 drop-shadow-lg">
          <Image
            src={aboutUsBg}
            className="aspect-video w-full rounded-md"
            alt="About Us"
            quality={50}
            loading="lazy"
            width={720}
            height={420}
          />
        </div>
        <div className="mx-auto mt-8 grid w-fit max-w-6xl grid-cols-2 gap-4 px-4 sm:grid-cols-4">
          <div>
            <Medal className="text-tertiary inline size-6" />
            <h3 className="text-muted-foreground inline">Certified</h3>
          </div>
          <div>
            <Users className="text-tertiary inline size-6" />
            <h3 className="text-muted-foreground inline">Expert</h3>
          </div>
          <div>
            <CheckCircle className="text-tertiary inline size-6" />
            <h3 className="text-muted-foreground inline">Proven</h3>
          </div>
          <div>
            <BicepsFlexed className="text-tertiary inline size-6" />
            <h3 className="text-muted-foreground inline">Reliable</h3>
          </div>
        </div>
        <div className="flex px-4">
          <LinkButton href="/about-us" title="Read More About Us" />
        </div>
      </section>
      <CredentialsSlider className="mt-12" />
    </>
  );
}
