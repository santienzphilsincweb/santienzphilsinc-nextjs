import Heading1AndP from "@/components/heading-1-and-p";
import Heading2AndP from "@/components/heading-2-and-p";
import LinearGradientMask from "@/components/linear-gradient-mask";
import { CREDS_INFO } from "@/lib/creds-info";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.santienzphilsinc.com"),
  title: "Credentials | Santienz Phils. Inc.",
  description:
    "Our credentials reflect our dedication to delivering reliable flooring solutions and maintaining the highest standards in every project we undertake.",
  openGraph: {
    title: "Credentials | Santienz Phils. Inc.",
    description:
      "Our credentials reflect our dedication to delivering reliable flooring solutions and maintaining the highest standards in every project we undertake.",
    images: new URL("https://www.santienzphilsinc.com/summary-new.png"),
    type: "website",
    url: new URL("https://www.santienzphilsinc.com/credentials"),
    siteName: "Santienz Phils. Inc.",
  },
  twitter: {
    title: "Credentials | Santienz Phils. Inc.",
    description:
      "Our credentials reflect our dedication to delivering reliable flooring solutions and maintaining the highest standards in every project we undertake.",
    images: new URL("https://www.santienzphilsinc.com/summary-new.png"),
    card: "summary_large_image",
    creator: "@dondycles",
  },
  keywords: [
    "santienz",
    "philippines",
    "polyurethane",
    "credentials",
    "flooring",
    "construction",
  ],
};

export default function Credentials() {
  return (
    <>
      <section className="relative">
        <Heading1AndP
          h1andpParentClass="mx-auto px-4 pt-24 sm:pt-32 max-w-6xl"
          pClass="text-center"
          alignment="center-only"
          h1="Credentials"
          p="Our credentials reflect our dedication to delivering reliable flooring solutions and maintaining the highest standards in every project we undertake."
        />
        <LinearGradientMask />
      </section>
      <div className="relative pb-6">
        <section
          hidden={
            CREDS_INFO.filter((cert) => cert.type === "certificate").length ===
            0
          }
          className="mx-auto mt-24 max-w-6xl space-y-6"
        >
          <Heading2AndP h="Certificates" alignment="left-only" />
          <div className="xmd:gap-4 xmd:px-4 grid grid-cols-3 gap-1 px-1">
            {CREDS_INFO.filter((cert) => cert.type === "certificate").map(
              (cert) => (
                <div key={cert.title} className="flex h-full">
                  <h3 className="sr-only">{cert.title}</h3>
                  <div className="xmd:p-4 bg-primary/5 mx-auto max-w-xl flex-1 rounded-md p-1">
                    <Link href={cert.img.src} target="_blank">
                      <Image
                        src={cert.img}
                        alt={cert.title}
                        className="object-fit h-full w-full rounded-md"
                        width={400}
                        height={250}
                        quality={50}
                      />
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
        <section
          hidden={
            CREDS_INFO.filter((cert) => cert.type === "permit").length === 0
          }
          className="mx-auto mt-24 max-w-6xl space-y-6"
        >
          <Heading2AndP h="Permits" alignment="left-only" />
          <div className="xmd:gap-4 xmd:px-4 grid grid-cols-2 gap-1 px-1">
            {CREDS_INFO.filter((cert) => cert.type === "permit").map((cert) => (
              <div
                key={cert.title}
                className={`flex h-full ${
                  cert.title === "Business Permit" && "col-span-2"
                }`}
              >
                <h3 className="sr-only">{cert.title}</h3>
                <div className="xmd:p-4 bg-primary/5 mx-auto rounded-md p-1">
                  <Link href={cert.img.src} target="_blank">
                    <Image
                      src={cert.img}
                      alt={cert.title}
                      className="rounded-md"
                      width={400}
                      height={250}
                      quality={50}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section
          hidden={
            CREDS_INFO.filter((cert) => cert.type === "receipt").length === 0
          }
          className="mx-auto mt-24 max-w-6xl space-y-6"
        >
          <Heading2AndP h="Receipts" alignment="left-only" />
          {CREDS_INFO.filter((cert) => cert.type === "receipt").map((cert) => (
            <div key={cert.title} className="xmd:px-4 space-y-4 px-1">
              <h3 className="sr-only">{cert.title}</h3>
              <div className="xmd:p-4 bg-primary/5 mx-auto max-w-xl rounded-md p-1">
                <Link href={cert.img.src} target="_blank">
                  <Image
                    src={cert.img}
                    alt={cert.title}
                    className="rounded-md"
                    width={400}
                    height={250}
                    quality={50}
                  />
                </Link>
              </div>
            </div>
          ))}
        </section>
        <LinearGradientMask className="[mask-image:linear-gradient(transparent,transparent,white)]" />
      </div>
    </>
  );
}
