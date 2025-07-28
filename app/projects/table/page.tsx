import CTABtn from "@/components/CTA-btn";
import Heading1AndP from "@/components/heading-1-and-p";
import LinearGradientMask from "@/components/linear-gradient-mask";
import SearchBar from "@/components/search-bar";
import { supabaseServer } from "@/utils/supabase/server";
import { ChevronLeft } from "lucide-react";
import {
  TableBody,
  TableCell,
  Table as TableComponent,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.santienzphilsinc.com"),
  title:
    "Table View of Santienz Phils. Inc. Completed Projects | The Ultimate Polyurethane Mortar Floor",
  description:
    "Explore the complete list of finished projects of Santienz Phils. Inc. showcasing high-quality polyurethane mortar flooring and other projects completed across the Philippines since 1998.",
  openGraph: {
    title: "Santienz Phils. Inc. | The Ultimate Polyurethane Mortar Floor",
    description:
      "Explore the complete list of finished projects of Santienz Phils. Inc. showcasing high-quality polyurethane mortar flooring and other projects completed across the Philippines since 1998.",
    images: new URL("https://www.santienzphilsinc.com/summary-new.png"),
    type: "website",
    url: new URL("https://www.santienzphilsinc.com/projects/table"),
    siteName: "Santienz Phils. Inc.",
  },
  twitter: {
    title: "Santienz Phils. Inc. | The Ultimate Polyurethane Mortar Floor",
    description:
      "Explore the complete list of finished projects of Santienz Phils. Inc. showcasing high-quality polyurethane mortar flooring and other projects completed across the Philippines since 1998.",
    images: new URL("https://www.santienzphilsinc.com/summary-new.png"),
    card: "summary_large_image",
    creator: "@dondycles",
  },
  keywords: ["santienz", "philippines", "projects", "table", "polyurethane"],
};

export default async function ProjectsTable({
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
    .select("title, address, products, sqm, slug");
  return (
    <>
      <section className="relative">
        <Heading1AndP
          h1="Complete List of Finished Projects"
          p="Explore the complete list of finished projects of Santienz Phils. Inc. showcasing high-quality polyurethane mortar flooring and other projects completed across the Philippines since 1998."
          withCta
          parentClass="mx-auto px-4 pt-24 sm:pt-32 max-w-6xl"
          alignment="center-only"
        >
          <CTABtn variant="tertiary" href="/projects" noGlow>
            <ChevronLeft /> Back to Featured Projects
          </CTABtn>
        </Heading1AndP>
        <LinearGradientMask />
      </section>
      <section className="relative">
        <div className="xmd:px-4 relative mx-auto mt-6 max-w-6xl space-y-6 px-1">
          <SearchBar />
          <div className="border-tertiary xmd:px-1 rounded-md border px-3 shadow-lg">
            <TableComponent>
              <TableHeader>
                <TableRow className="[&>th]:text-tertiary [&>th]:font-semibold">
                  <TableHead>Client</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Product used</TableHead>
                  <TableHead>Area serviced</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.data?.map((project) => (
                  <TableRow key={project.slug}>
                    <TableCell className="font-medium text-primary hover:underline">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </TableCell>
                    <TableCell>{project.address}</TableCell>
                    <TableCell>
                      {(project.products as string[])?.map((product, i) => (
                        <span key={`${project.slug}-${product}-${i}`}>
                          <Link
                            href={`/products#${product
                              .toLocaleLowerCase()
                              .replaceAll(" ", "-")}`}
                            className="text-primary hover:underline"
                          >
                            {(project.products as string[])?.length - 1 !== i
                              ? `${product.toUpperCase()}, `
                              : product.toUpperCase()}
                          </Link>
                        </span>
                      ))}
                    </TableCell>
                    <TableCell>
                      {project.sqm
                        ? `${Intl.NumberFormat().format(project.sqm)} sqm`
                        : null}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </TableComponent>
          </div>
        </div>
        <div className="mx-auto w-fit max-w-6xl py-6">
          <CTABtn noGlow variant="tertiary" href="/projects">
            <ChevronLeft /> Back to Featured Projects
          </CTABtn>
        </div>
        <LinearGradientMask className="[mask-image:linear-gradient(transparent,transparent,white)]" />
      </section>
    </>
  );
}
