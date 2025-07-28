import CTABtn from "@/components/CTA-btn";
import Grid3DBg from "@/components/grid-3d-bg";
import Heading1AndP from "@/components/heading-1-and-p";
import LinearGradientMask from "@/components/linear-gradient-mask";
import MainHeroOverlay from "@/components/main-hero-overlay";
import { blurDataURL, imgUrlFromSb } from "@/lib/utils";
import { supabaseServer } from "@/utils/supabase/server";
import { ChevronLeft, Info, MapPin, Ruler, Star, Tag } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await supabaseServer();
  const { data } = await supabase
    .from("projects")
    .select()
    .eq("slug", slug ?? "")
    .single();

  const images = data?.imgs?.length
    ? Array.from({ length: data.imgs.length }).map((_, index) =>
        imgUrlFromSb("projects", (data.imgs as string[])[index])
      )
    : null;

  return {
    title: `${data?.title ?? "Project"} | Santienz Phils. Inc.`,
    description: `${
      data?.title ?? "This project"
    } is one of the valued clients served by Santienz Phils. Inc. Explore our work on their project and how we helped bring their vision to life.`,
    openGraph: {
      title: `${data?.title ?? "Project"} | Santienz Phils. Inc.`,
      description: `${
        data?.title ?? "This project"
      } is one of the valued clients served by Santienz Phils. Inc. Explore our work on their project and how we helped bring their vision to life.`,
      images: images
        ? images[0]
        : new URL("https://www.santienzphilsinc.com/summary-new.png"),
      type: "website",
      url: new URL(`https://www.santienzphilsinc.com/projects/${slug}`),
      siteName: "Santienz Phils. Inc.",
    },
    twitter: {
      title: `${data?.title ?? "Project"} | Santienz Phils. Inc.`,
      description: `${
        data?.title ?? "This project"
      } is one of the valued clients served by Santienz Phils. Inc. Explore our work on their project and how we helped bring their vision to life.`,
      images: images
        ? images[0]
        : new URL("https://www.santienzphilsinc.com/summary-new.png"),
      card: "summary_large_image",
      creator: "@dondycles",
    },
    keywords: [
      "santienz",
      "philippines",
      "polyurethane",
      "projects",
      "flooring",
      "construction",
    ],
  };
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await supabaseServer();
  const { data } = await supabase
    .from("projects")
    .select()
    .eq("slug", slug ?? "")
    .single();

  if (!data) return redirect("/projects");

  const images = data.imgs?.length
    ? Array.from({ length: data.imgs.length }).map((_, index) =>
        imgUrlFromSb("projects", (data.imgs as string[])[index])
      )
    : null;

  return (
    <>
      <section
        id="main-hero"
        className="bg-primary xmd:pt-30 relative w-full overflow-hidden pt-20"
      >
        <Heading1AndP
          h1={data.title as string}
          p={`${
            data.title as string
          } is one of the valued clients served by Santienz Phils. Inc.
        Explore our work on their project and how we helped bring their vision to
        life.`}
          withCta
          h1Class="text-tertiary"
          pClass="text-center text-primary-foreground"
          parentClass="max-w-6xl mx-auto px-4"
          alignment="center-only"
        >
          <CTABtn
            className="border-tertiary text-primary-foreground bg-tertiary/10 hover:bg-tertiary/20 hover:text-primary-foreground z-20 w-full px-12 drop-shadow-[0_4px_8px_var(--tertiary)] backdrop-blur"
            variant="outline"
            href="/projects"
          >
            <ChevronLeft />
            <span>Back to all projects</span>
          </CTABtn>
        </Heading1AndP>
        <MainHeroOverlay>
          {images ? (
            <Image
              src={images[0]}
              alt={data.title ? data.title : "Grid 3D Background"}
              className="absolute inset-0 h-full w-full object-cover blur-xs brightness-75"
              quality={25}
              width={720}
              height={480}
              loading="eager"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          ) : (
            <Grid3DBg />
          )}
        </MainHeroOverlay>
      </section>
      <section className="text-muted-foreground mx-auto my-6 max-w-6xl space-y-2 px-4">
        <p>
          <span>
            <Star className="mr-1 inline size-5" />
          </span>
          Client: {data.title}
        </p>
        <p hidden={!data.address}>
          <span>
            <MapPin className="mr-1 inline size-5" />
          </span>
          Location: {data.address}
        </p>
        <p>
          <span>
            <Tag className="mr-1 inline size-5" />
          </span>
          Products used:{" "}
          {(data.products as string[]).map((prod, i) => (
            <Link
              key={i}
              href={`/products#${prod
                .toLocaleLowerCase()
                .replaceAll(" ", "-")}`}
              className="text-primary hover:underline"
            >
              {(data.products as string[]).length - 1 !== i
                ? `${prod.toUpperCase()}, `
                : prod.toUpperCase()}
            </Link>
          ))}
        </p>
        <p hidden={!data.sqm}>
          <span>
            <Ruler className="mr-1 inline size-5" />
          </span>
          Area: {data.sqm}sqm
        </p>
        <p hidden={!data.description}>
          <span>
            <Info className="mr-1 inline size-5" />
          </span>
          Other info: {data.description}
        </p>
      </section>
      <section className="relative">
        {images ? (
          <div className="xmd:px-4 xxs:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] xmd:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] not-xmd:gap-1 relative mx-auto grid w-full max-w-6xl gap-4 px-1">
            {images?.map((img, i) => (
              <div
                key={i}
                className="relative m-auto h-full w-full overflow-hidden rounded-md"
              >
                <Image
                  className="h-full w-full object-cover"
                  src={img}
                  alt={`image-${i}-of-${data.slug}`}
                  quality={50}
                  width={720}
                  height={480}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              </div>
            ))}
          </div>
        ) : null}
        <LinearGradientMask className="[mask-image:linear-gradient(transparent,transparent,white)]" />
      </section>
    </>
  );
}
