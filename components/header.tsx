"use client";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BiCart,
  BiCheckCircle,
  BiFolder,
  BiHome,
  BiInfoCircle,
  BiLogoFacebook,
  BiLogoGmail,
  BiMenu,
  BiNote,
  BiPhone,
} from "react-icons/bi";
import CTABtn from "./CTA-btn";
import { usePathname } from "next/navigation";
export type Pages = {
  hideCTA?: boolean;
  hideBrochure?: boolean;
  hideProducts?: boolean;
  hideAboutUs?: boolean;
  hideCareers?: boolean;
  hideHome?: boolean;
  hideProjects?: boolean;
  hideTestimonials?: boolean;
  hideCredentials?: boolean;
};
export default function Header({ className }: { className?: string }) {
  const pathname = usePathname();
  const state = {
    hideCTA: pathname.startsWith("/contact-us"),
    hideBrochure: pathname.startsWith("/brochure"),
    hideProducts: pathname.startsWith("/products"),
    hideAboutUs: pathname.startsWith("/about-us"),
    hideCareers: true,
    hideHome: pathname === "/",
    hideProjects:
      pathname === "/projects" ||
      pathname === "/projects/" ||
      pathname === "/projects/table" ||
      pathname === "/projects/table/",
    hideTestimonials: true,
    hideCredentials: pathname.startsWith("/credentials"),
  };
  return (
    <header
      id="landing-page-header"
      className={cn(
        "fixed top-0 z-50 w-full bg-transparent",
        className,
        state.hideAboutUs ||
          state.hideBrochure ||
          state.hideCTA ||
          state.hideProducts ||
          state.hideProjects ||
          state.hideCredentials
          ? "text-primary backdrop-blur-lg"
          : "text-primary-foreground"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 p-4">
        <Link href="/">
          <Logo className="size-10" />
        </Link>

        <DesktopNavigation {...state} />
        <MobileNavigation {...state} />
      </div>
    </header>
  );
}

const DesktopNavigation = ({
  hideCTA = false,
  hideBrochure = false,
  hideAboutUs = false,
  hideCareers = true,
  hideProducts = false,
  hideProjects = false,
  hideTestimonials = true,
}: Pages) => {
  return (
    <div className="xmd:flex hidden flex-1 items-center justify-end gap-4">
      <nav className="flex flex-row gap-6">
        <Button
          hidden={hideAboutUs}
          variant="link"
          asChild
          className="header-links p-0 text-inherit"
        >
          <Link href="/about-us">About Us</Link>
        </Button>
        <Button
          hidden={hideProjects}
          variant="link"
          asChild
          className="header-links p-0 text-inherit"
        >
          <Link href="/projects">Projects</Link>
        </Button>
        <Button
          hidden={hideProducts}
          asChild
          variant="link"
          className="header-links p-0 text-inherit"
        >
          <Link href="/products">Products</Link>
        </Button>
        <Button
          hidden={hideBrochure}
          asChild
          variant="link"
          className="header-links p-0 text-inherit"
        >
          <Link href="/brochure">Brochure</Link>
        </Button>
        <Button
          hidden={hideTestimonials}
          asChild
          variant="link"
          className="header-links p-0 text-inherit"
        >
          <Link href="/testimonials">Testimonials</Link>
        </Button>
        <Button
          hidden={hideCareers}
          variant="link"
          asChild
          className="header-links p-0 text-inherit"
        >
          <Link href="/careers">Careers</Link>
        </Button>
      </nav>
      {hideCTA ? null : (
        <CTABtn href="/contact-us" wShadow noGlow variant="tertiary">
          Contact Us
        </CTABtn>
      )}
    </div>
  );
};

const MobileNavigation = ({
  hideCTA = false,
  hideBrochure = false,
  hideAboutUs = false,
  hideCareers = true,
  hideProducts = false,
  hideHome = false,
  hideProjects = false,
  hideTestimonials = true,
  hideCredentials,
}: Pages) => {
  return (
    <Sheet>
      <SheetTrigger className="xmd:hidden">
        <BiMenu id="header-burger-icon" className="size-5 cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="bg-background/80 w-2/3 gap-0 border-0 backdrop-blur-sm">
        <SheetHeader className="sr-only">
          <SheetTitle>Mobile Navigation</SheetTitle>
        </SheetHeader>
        <div className="border-t-muted mt-12 flex flex-col gap-4 border-t-1 p-4 text-lg">
          <Button
            hidden={hideHome}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <Link href="/">
              <BiHome className="size-5" />
              Home
            </Link>
          </Button>
          <Button
            hidden={hideAboutUs}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <Link href="/about-us">
              <BiInfoCircle className="size-5" />
              About Us
            </Link>
          </Button>{" "}
          <Button
            hidden={hideProjects}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <Link href="/projects">
              <BiFolder className="size-5" />
              Projects
            </Link>
          </Button>{" "}
          <Button
            hidden={hideProducts}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <Link href="/products">
              <BiCart className="size-5" />
              Products
            </Link>
          </Button>
          <Button
            hidden={hideCredentials}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <Link href="/credentials">
              <BiCheckCircle className="size-5" />
              Credentials
            </Link>
          </Button>
          <Button
            hidden={hideBrochure}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <Link href="/brochure">
              <BiNote className="size-5" />
              Brochure
            </Link>
          </Button>
          <Button
            hidden={hideCareers}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <Link href="/careers">Careers</Link>
          </Button>
          <Button
            hidden={hideTestimonials}
            asChild
            variant="link"
            className="text-muted-foreground w-fit p-0 text-lg"
          >
            <Link href="/testimonials">Testimonials</Link>
          </Button>
        </div>
        <div className="border-t-muted text-muted-foreground mt-auto mb-0 flex flex-col justify-center gap-4 border-t-1 p-4 text-sm">
          {hideCTA ? null : (
            <Button className="w-full" variant="tertiary" asChild>
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          )}
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=santienzmanila@gmail.com"
            target="_blank"
            rel="noopener"
          >
            <div className="inline-flex space-x-2">
              <BiLogoGmail className="text-tertiary size-6 shrink-0" />
              <span className="break-all">santienztechnical@gmail.com</span>
            </div>
          </Link>
          <div className="inline-flex space-x-2">
            <BiPhone className="text-tertiary size-6 shrink-0" />
            <span className="break-all">(02) 7001-0273</span>
          </div>
          <Link
            href="https://facebook.com/@santienz.hr"
            target="_blank"
            rel="noopener"
          >
            <div className="inline-flex space-x-2">
              <BiLogoFacebook className="text-tertiary size-6 shrink-0" />
              <span className="break-all">@santienz.hr</span>
            </div>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
