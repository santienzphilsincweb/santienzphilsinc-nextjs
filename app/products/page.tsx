import Heading1AndP from "@/components/heading-1-and-p";
import Heading2AndP from "@/components/heading-2-and-p";
import LinearGradientMask from "@/components/linear-gradient-mask";
import { imgUrlFromSb } from "@/lib/utils";
import { supabaseServer } from "@/utils/supabase/server";
import { Database } from "@/utils/supabase/types";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.santienzphilsinc.com"),
  title: "Products | Santienz Phils. Inc.",
  description:
    "Explore the featured projects of Santienz Phils. Inc. showcasing high-quality polyurethane mortar flooring and other projects completed across the Philippines since 1998.",
  openGraph: {
    title: "Products | Santienz Phils. Inc.",
    description:
      "Explore the featured projects of Santienz Phils. Inc. showcasing high-quality polyurethane mortar flooring and other projects completed across the Philippines since 1998.",
    images: new URL("https://www.santienzphilsinc.com/summary-new.png"),
    type: "website",
    url: new URL("https://www.santienzphilsinc.com/products"),
    siteName: "Santienz Phils. Inc.",
  },
  twitter: {
    title: "Products | Santienz Phils. Inc.",
    description:
      "Explore the featured projects of Santienz Phils. Inc. showcasing high-quality polyurethane mortar flooring and other projects completed across the Philippines since 1998.",
    images: new URL("https://www.santienzphilsinc.com/summary-new.png"),
    card: "summary_large_image",
    creator: "@dondycles",
  },
  keywords: [
    "santienz",
    "philippines",
    "polyurethane",
    "products",
    "flooring",
    "construction",
  ],
};

export default async function Products() {
  const supabase = await supabaseServer();
  const products = await supabase
    .from("products")
    .select("description, id, imgs, name, highlights")
    .order("name");
  return (
    <>
      <section className="relative">
        <Heading1AndP
          h1andpParentClass="mx-auto px-4 pt-24 sm:pt-32 max-w-6xl"
          h1="Products"
          p="Explore the featured projects of Santienz Phils. Inc. showcasing high-quality polyurethane mortar flooring and other projects completed across the Philippines since 1998."
          alignment="center-only"
          withCta={false}
        />
        <LinearGradientMask />
      </section>
      <div className="space-y-32">
        {products.data?.map((product, i) => {
          if (i === products.data?.length - 1)
            return (
              <div key={`product-${product.id}-div`} className="relative">
                <Product product={product} />
                <LinearGradientMask className="[mask-image:linear-gradient(transparent,white)]" />
              </div>
            );
          return <Product key={`product-${product.id}`} product={product} />;
        })}
      </div>
    </>
  );
}

const Product = ({
  product,
}: {
  product: Pick<
    Database["public"]["Tables"]["products"]["Row"],
    "description" | "id" | "imgs" | "name" | "highlights"
  >;
}) => {
  const haveImages = (product.imgs as string[]).length > 0;
  return (
    <section
      id={product.name.toLocaleLowerCase().replaceAll(" ", "-")}
      className={`${
        haveImages ? "grid" : ""
      } grid-cols-1 lg:grid-cols-5 gap-6 scroll-m-18 mt-12 max-w-6xl mx-auto`}
    >
      <Heading2AndP
        h={product.name}
        p={product.description}
        alignment="left-only"
        hClass="text-tertiary"
        pClass=" whitespace-pre-wrap"
        hAndPParentClass={`${haveImages ? "" : ""} w-full lg:col-span-3`}
      >
        <div className="mt-6 flex flex-wrap gap-4">
          {(product.highlights as string[]).map((highlight) => (
            <div key={highlight}>
              <CheckCircle className="inline mr-1 text-tertiary" />
              <span className="text-muted-foreground capitalize">
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </Heading2AndP>
      {haveImages ? (
        <div className="mx-auto mt-0 mb-auto grid w-full max-w-4xl gap-1 px-1 sm:grid-cols-[repeat(auto-fit,minmax(256px,1fr))] lg:col-span-2 lg:grid-cols-[repeat(auto-fit,minmax(156px,1fr))]">
          {(product.imgs as string[]).map((img, i) => (
            <Image
              key={`${product.id}-${i}`}
              src={imgUrlFromSb("products", img)}
              alt={`${product.name},${i}`}
              width={450}
              height={200}
              quality={50}
              loading="lazy"
              className="m-auto w-full max-w-md rounded-md object-contain drop-shadow-xl"
            />
          ))}
        </div>
      ) : null}
    </section>
  );
};
