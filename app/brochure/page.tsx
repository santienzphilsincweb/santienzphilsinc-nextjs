import CTABtn from "@/components/CTA-btn";
import Heading1AndP from "@/components/heading-1-and-p";
import LinearGradientMask from "@/components/linear-gradient-mask";
import Image from "next/image";
import brochurePage1 from "@/public/brochure/1.webp";
import brochurePage2 from "@/public/brochure/2.webp";
import { Download } from "lucide-react";

import { Metadata } from "next";
import { blurDataURL } from "@/lib/utils";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.santienzphilsinc.com"),
  title: "Brochure | Santienz Phils. Inc.",
  description:
    "Learn more about Santienz's polyurethane mortar flooring solutions. Download our brochure for details.",
  openGraph: {
    title: "Brochure | Santienz Phils. Inc.",
    description:
      "Learn more about Santienz's polyurethane mortar flooring solutions. Download our brochure for details.",
    images: new URL("https://www.santienzphilsinc.com/summary-new.png"),
    type: "website",
    url: new URL("https://www.santienzphilsinc.com/brochure"),
    siteName: "Santienz Phils. Inc.",
  },
  twitter: {
    title: "Brochure | Santienz Phils. Inc.",
    description:
      "Learn more about Santienz's polyurethane mortar flooring solutions. Download our brochure for details.",
    images: new URL("https://www.santienzphilsinc.com/summary-new.png"),
    card: "summary_large_image",
    creator: "@dondycles",
  },
  keywords: ["santienz", "philippines", "polyurethane", "brochure"],
};
export default function Brochure() {
  return (
    <>
      <section className="relative">
        <Heading1AndP
          h1andpParentClass="mx-auto px-4 pt-24 sm:pt-32 max-w-6xl"
          pClass="text-center"
          alignment="center-only"
          h1="Brochure"
          p="Learn more about Santienz's polyurethane mortar flooring solutions. Download our brochure for details."
        />
        <LinearGradientMask />
      </section>
      <section className="relative mt-6">
        <div className="flex flex-col items-center justify-center">
          <div className="xmd:gap-4 xmd:px-4 grid max-w-6xl gap-1 px-1 md:grid-cols-2">
            <Image
              src={brochurePage1}
              alt="Santienz Brochure Page 1"
              className="rounded-md border shadow-lg"
              loading="eager"
              width={450}
              height={200}
              quality={50}
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
            <Image
              src={brochurePage2}
              alt="Santienz Brochure Page 2"
              className="rounded-md border shadow-lg"
              loading="eager"
              width={450}
              height={200}
              quality={50}
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </div>
          <div className="my-6">
            <CTABtn
              variant="tertiary"
              href="santienz-brochure.pdf"
              target="_blank"
              noGlow
            >
              Download <Download />
            </CTABtn>
          </div>
          <LinearGradientMask className="[mask-image:linear-gradient(transparent,transparent,white)]" />
        </div>
      </section>
    </>
  );
}
