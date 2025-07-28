import ContactUsForm from "@/components/contact-us-form";
import Heading1AndP from "@/components/heading-1-and-p";
import { Metadata } from "next";
import Link from "next/link";
import { BiLogoFacebook, BiLogoGmail } from "react-icons/bi";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.santienzphilsinc.com"),
  title:
    "Contact Santienz Phils. Inc. | The Ultimate Polyurethane Mortar Floor",
  description:
    "Contact Santienz Phils. Inc. for expert polyurethane mortar flooring solutions and a free quote. Serving the Philippines since 1998.",
  openGraph: {
    title:
      "Contact Santienz Phils. Inc. | The Ultimate Polyurethane Mortar Floor",
    description:
      "Contact Santienz Phils. Inc. for expert polyurethane mortar flooring solutions and a free quote. Serving the Philippines since 1998.",
    images: new URL("https://www.santienzphilsinc.com/summary-new.png"),
    type: "website",
    url: new URL("https://www.santienzphilsinc.com/contact-us"),
    siteName: "Santienz Phils. Inc.",
  },
  twitter: {
    title:
      "Contact Santienz Phils. Inc. | The Ultimate Polyurethane Mortar Floor",
    description:
      "Contact Santienz Phils. Inc. for expert polyurethane mortar flooring solutions and a free quote. Serving the Philippines since 1998.",
    images: new URL("https://www.santienzphilsinc.com/summary-new.png"),
    card: "summary_large_image",
    creator: "@dondycles",
  },
  keywords: ["santienz", "philippines", "polyurethane", "contact"],
};
export default function ContactUs() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-1 gap-x-16 gap-y-4 px-4 pt-24 pb-6 sm:pt-32 lg:grid-cols-2 lg:grid-rows-2">
      <Heading1AndP
        h1="Let’s Work Together"
        p="Contact Santienz Phils. Inc. for expert polyurethane mortar flooring solutions and a free quote. Serving the Philippines since 1998."
        withCta={false}
        h1andpParentClass="flex flex-col items-center lg:items-start gap-4 flex-1 col-start-1"
        alignment="left-only"
      />
      <ContactUsForm />
      <div className="text-primary col-span-1 mt-0 flex justify-center gap-4 border-t pt-4 text-2xl lg:col-span-2 lg:justify-start">
        <Link href="https://facebook.com/@santienz.hr" target="_blank">
          <BiLogoFacebook />
        </Link>
        <Link
          href="https://mail.google.com/mail/?view=cm&fs=1&to=santienzmanila@gmail.com"
          target="_blank"
        >
          <BiLogoGmail />
        </Link>
      </div>
    </section>
  );
}
