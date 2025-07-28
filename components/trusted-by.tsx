import Image from "next/image";
import Heading2AndP from "./heading-2-and-p";

const clients: Array<{
  src: string;
  alt: string;
}> = [
  {
    src: "https://static.wikia.nocookie.net/logopedia/images/e/e2/SMHypermarket2010.svg/revision/latest/scale-to-width-down/300?cb=20211202101121",
    alt: "SM Hypermarket",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Nestl%C3%A9.svg/800px-Nestl%C3%A9.svg.png",
    alt: "Nestle",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Magnolia_dairy_logo.png",
    alt: "Magnolia",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/640px-McDonald%27s_Golden_Arches.svg.png",
    alt: "McDonalds",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Jollibee_2011_logo.svg/800px-Jollibee_2011_logo.svg.png",
    alt: "Jollibee",
  },
  {
    src: "https://lirp.cdn-website.com/b3fbd289/dms3rep/multi/opt/san-miguel-foods_logo-640w.png",
    alt: "San Miguel Foods",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Mang_Inasal.svg/395px-Mang_Inasal.svg.png?20200712183642",
    alt: "Mang Inasal",
  },
  {
    src: "https://royalecoldstorage.com.ph/wp-content/uploads/2024/07/royal-cold-storage-logo-2022.webp",
    alt: "Royale Cold Storage",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/en/5/5e/KCC_Mall_logo.png",
    alt: "KCC Malls",
  },
  {
    src: "https://isocholdings.com/wp-content/uploads/2019/12/orca-blk-logo.png",
    alt: "ORCA Cold Chain Solutions",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/86/Alfamart_logo.svg",
    alt: "Alfamart",
  },
  {
    src: "https://delimondo.ph/cdn/shop/files/Delimondo_Logo-Black_2048x2048.png",
    alt: "Delimondo",
  },
  {
    src: "https://static.wikia.nocookie.net/logopedia/images/e/e6/RedRibbon2009Logo.png/revision/latest?cb=20231224062231",
    alt: "Red Ribbon",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Universal_Robina_logo_2016.svg",
    alt: "Universal Robina",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Max_Group_logo.png",
    alt: "Max's Group, Inc.",
  },
];

export default function TrustedBy() {
  return (
    <section className="mt-12 space-y-6">
      <Heading2AndP
        h="Trusted By"
        p="Proud to have collaborated with the following companies."
        alignment="left-only"
      />
      <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-center-safe gap-8 px-4 sm:gap-12 lg:gap-16">
        {clients.map((client) => (
          <Image
            key={client.src}
            src={client.src}
            alt={client.alt}
            quality={25}
            width={256}
            height={64}
            className="max-w-12 sm:max-w-20 md:max-w-26 w-full h-fit object-center object-contain m-auto"
            loading="eager"
          />
        ))}
      </div>
    </section>
  );
}
