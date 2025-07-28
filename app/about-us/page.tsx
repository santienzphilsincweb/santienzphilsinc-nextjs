import CredentialsSlider from "@/components/credentials-slider";
import CTABtn from "@/components/CTA-btn";
import Heading1AndP from "@/components/heading-1-and-p";
import Heading2AndP from "@/components/heading-2-and-p";
import History from "@/components/history";
import LinearGradientMask from "@/components/linear-gradient-mask";
import TrustedBy from "@/components/trusted-by";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.santienzphilsinc.com"),
  title: "About Santienz Phils. Inc. | The Ultimate Polyurethane Mortar Floor",
  description:
    "Over the years, we have successfully completed more than 1 million square meters of installations across the Philippines, demonstrating our commitment to quality, innovation, and nationwide service.",
  openGraph: {
    title:
      "About Santienz Phils. Inc. | The Ultimate Polyurethane Mortar Floor",
    description:
      "Over the years, we have successfully completed more than 1 million square meters of installations across the Philippines, demonstrating our commitment to quality, innovation, and nationwide service.",
    images: new URL("https://www.santienzphilsinc.com/summary-new.png"),
    type: "website",
    url: new URL("https://www.santienzphilsinc.com/about-us"),
    siteName: "Santienz Phils. Inc.",
  },
  twitter: {
    title:
      "About Santienz Phils. Inc. | The Ultimate Polyurethane Mortar Floor",
    description:
      "Over the years, we have successfully completed more than 1 million square meters of installations across the Philippines, demonstrating our commitment to quality, innovation, and nationwide service.",
    images: new URL("https://www.santienzphilsinc.com/summary-new.png"),
    card: "summary_large_image",
    creator: "@dondycles",
  },
  keywords: ["santienz", "philippines", "polyurethane", "about"],
};
export default function AboutUs() {
  return (
    <>
      <section className="relative">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-16 gap-y-4 px-4 pt-24 sm:pt-32 lg:grid-cols-2">
          <Heading1AndP
            h1="About Us"
            p="Over the years, we have successfully completed more than 1 million square meters of installations across the Philippines, demonstrating our commitment to quality, innovation, and nationwide service."
            withCta
          >
            <CTABtn variant="tertiary" noGlow wShadow href="/projects">
              See All Projects
            </CTABtn>
          </Heading1AndP>
          <div className="shadow-xl">
            <iframe
              src="https://drive.google.com/file/d/1P0UcS0fa_ExazAVLeCqpOiGBSPFV5M2_/preview"
              allow="autoplay"
              className="bg-foreground/10 aspect-video w-full rounded-md"
            ></iframe>
          </div>
        </div>
        <LinearGradientMask />
      </section>
      <section className="mx-auto mt-12 max-w-6xl space-y-6">
        <Heading2AndP h="History" alignment="left-only" />
        <div className="px-4">
          <History />
        </div>
      </section>
      <section className="mx-auto mt-12 max-w-6xl space-y-6">
        <Heading2AndP h="Our Commitment" alignment="left-only" />
        <div className="px-4">
          <div className="bg-primary/5 text-muted-foreground space-y-2 rounded-md p-4">
            <p className="">
              <span className="-mb-1 inline-block">
                <ChevronRight className="text-tertiary size-5" />
              </span>
              <span>
                To continually provide the local construction and manufacturing
                industry with the latest advances in engineering methods,
                specifically in concrete floor repair, renovation and floor,
                roof protection systems.
              </span>
            </p>
            <br />
            <p>
              <span className="-mb-1 inline-block">
                <ChevronRight className="text-tertiary size-5" />
              </span>
              <span>
                Truly, with our long line of advance technology products, which
                have gained popular acceptance among maintenance and
                construction engineer, Santienz Philippines, Inc. id destined to
                be a &quot;household&quot; name.
              </span>
            </p>
            <br />

            <p>
              <span className="-mb-1 inline-block">
                <ChevronRight className="text-tertiary size-5" />
              </span>
              <span>
                Our company would like to come to you as a solution to your
                flooring and roofing problems.
              </span>
            </p>
            <br />

            <p>
              <span className="-mb-1 inline-block">
                <ChevronRight className="text-tertiary size-5" />
              </span>
              <span>
                On this premise will Santienz Philippines, Inc. serve its
                Philippine partners towards progressive industrialization.
              </span>
            </p>
          </div>
        </div>
      </section>
      <TrustedBy />
      <CredentialsSlider className="mt-12" />
    </>
  );
}
