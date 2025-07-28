import Image from "next/image";
import Logo from "./logo";
import {
  BiCopyright,
  BiLogoGmail,
  BiMapPin,
  BiPhoneCall,
} from "react-icons/bi";
import sunRays from "@/public/sun-rays.webp";
import { supabaseServer } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Footer() {
  const supabase = await supabaseServer();
  const products = await supabase
    .from("products")
    .select("id, name")
    .order("name");

  return (
    <footer className="bg-primary/5 relative mt-auto mb-0 space-y-8 overflow-hidden pt-6 md:pt-16">
      <div className="z-10 mx-auto grid max-w-6xl gap-x-4 gap-y-8 px-4 md:grid-cols-3">
        <div className="space-y-4">
          <h4 className="text-primary font-semibold">Santienz Phils. Inc.</h4>
          <Logo className="size-24" />
        </div>
        <div className="space-y-4 not-md:hidden">
          <div className="space-y-4">
            <h4 className="text-primary font-semibold">Navigation</h4>
            <ul className="text-muted-foreground space-y-2 text-base">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/credentials">Credentials</Link>
              </li>
              <li>
                <Link href="/brochure">Brochure</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-primary font-semibold">Products</h4>
            <ul className="text-muted-foreground space-y-2 text-base">
              {products.data?.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/#${product.name
                      .toLocaleLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-primary font-semibold">Contact</h4>
          <ul className="text-muted-foreground space-y-4 text-base">
            <li className="space-y-2">
              <h5 className="text-muted-foreground font-semibold">
                Head Office
              </h5>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <BiMapPin className="size-5" />
                  <span>352 San Agustin Ave., Palatiw, Pasig City</span>
                </div>
                <div className="flex gap-2">
                  <BiLogoGmail className="size-5 shrink-0" />
                  <span className="break-all">santienztechnical@gmail.com</span>
                </div>
                <div className="flex gap-2">
                  <BiPhoneCall className="size-5 shrink-0" />
                  <span>Technical Dept. : (02) 7001-0273</span>
                </div>
                <div className="flex gap-2">
                  <BiPhoneCall className="size-5 shrink-0" />
                  <span>Admin Dept. : (02) 7728-3381</span>
                </div>
              </div>
            </li>
            <li className="space-y-2">
              <h5 className="text-muted-foreground font-semibold">
                Cebu Office
              </h5>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <BiMapPin className="size-5 shrink-0" />
                  <span>Lot 4863 D2, Lower Linao, Talisay City, Cebu</span>
                </div>
                <div className="flex gap-2">
                  <BiLogoGmail className="size-5 shrink-0" />
                  <span className="break-all">
                    santienzacctg.visayas@gmail.com{" "}
                  </span>
                </div>
              </div>
            </li>
            <li className="space-y-2">
              <h5 className="text-muted-foreground font-semibold">
                Davao Office
              </h5>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <BiMapPin className="size-5 shrink-0" />
                  <span>
                    Purok 7, Composano Compound, Brgy. Tugbok, Davao City{" "}
                  </span>
                </div>
                <div className="flex gap-2">
                  <BiLogoGmail className="size-5 shrink-0" />
                  <span className="break-all">santienzDavao@gmail.com</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="z-10 p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.6519226290716!2d121.08610509999998!3d14.561886800000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c7d0d940b8ab%3A0x1914a2886e799f11!2sSantienz%20Philippines%20Incorporated!5e0!3m2!1sen!2sph!4v1750235424619!5m2!1sen!2sph"
          height="225"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Santienz Philippines Incorporated Location Map"
          className="mx-auto w-full max-w-6xl rounded-md outline"
        ></iframe>
      </div>
      <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full opacity-10">
        <Image
          src={sunRays}
          alt="Santienz Logo Sun Rays"
          className="xmd:object-top-left z-0 h-full w-full object-cover brightness-125 saturate-25"
        />
      </div>
      <div className="bg-primary text-muted-foreground z-10 py-8 text-center text-sm">
        <BiCopyright className="inline size-6" />
        <span> 2025 Santienz Phils. Inc.</span>
      </div>
    </footer>
  );
}
