import CTABtn from "@/components/CTA-btn";
import Heading1AndP from "@/components/heading-1-and-p";
import LinearGradientMask from "@/components/linear-gradient-mask";
import ProjectsMapper from "@/components/projects-mapper";
import SearchBar from "@/components/search-bar";
import { supabaseServer } from "@/utils/supabase/server";
import { TableIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.santienzphilsinc.com"),
  title:
    "Projects of Santienz Phils. Inc. | The Ultimate Polyurethane Mortar Floor",
  description:
    "Explore the featured projects of Santienz Phils. Inc. showcasing high-quality polyurethane mortar flooring and other projects completed across the Philippines since 1998.",
  openGraph: {
    title:
      "Projects of Santienz Phils. Inc. | The Ultimate Polyurethane Mortar Floor",
    description:
      "Explore the featured projects of Santienz Phils. Inc. showcasing high-quality polyurethane mortar flooring and other projects completed across the Philippines since 1998.",
    images: new URL("https://www.santienzphilsinc.com/summary-new.png"),
    type: "website",
    url: new URL("https://www.santienzphilsinc.com/projects"),
    siteName: "Santienz Phils. Inc.",
  },
  twitter: {
    title:
      "Projects of Santienz Phils. Inc. | The Ultimate Polyurethane Mortar Floor",
    description:
      "Explore the featured projects of Santienz Phils. Inc. showcasing high-quality polyurethane mortar flooring and other projects completed across the Philippines since 1998.",
    images: new URL("https://www.santienzphilsinc.com/summary-new.png"),
    card: "summary_large_image",
    creator: "@dondycles",
  },
  keywords: ["santienz", "philippines", "polyurethane", "projects"],
};

export default async function Projects({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = (await searchParams).query;
  const supabase = await supabaseServer();
  const projects = await supabase
    .from("projects")
    .select()
    .order("title", { ascending: true })
    .ilike("title", `%${query ?? ""}%`)
    .select("id, title, slug, imgs");
  return (
    <>
      <section className="relative">
        <Heading1AndP
          parentClass="mx-auto px-4 pt-24 sm:pt-32 max-w-6xl"
          h1="Featured Projects"
          p="Explore the featured projects of Santienz Phils. Inc. showcasing high-quality polyurethane mortar flooring and other projects completed across the Philippines since 1998."
          withCta
          alignment="center-only"
        >
          <CTABtn variant="tertiary" href="/projects/table" wShadow noGlow>
            See All Projects in Table View <TableIcon />
          </CTABtn>
        </Heading1AndP>
        <LinearGradientMask />
      </section>
      <div className="relative mt-6">
        {projects.data ? (
          <div className="xmd:px-4 mx-auto max-w-6xl space-y-6 px-1">
            <SearchBar />
            <div
              className={`xxs:grid-cols-2 xmd:gap-4 grid w-full auto-rows-fr grid-cols-1 gap-1`}
            >
              <ProjectsMapper projects={projects.data} />
            </div>
          </div>
        ) : null}
        <LinearGradientMask className="[mask-image:linear-gradient(transparent,white)]" />
      </div>
    </>
  );
}
