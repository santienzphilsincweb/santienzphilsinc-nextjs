"use client";
import { useEffect, useState } from "react";

export default function MainHeroOverlay({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (mounted)
      window.addEventListener("scroll", () => {
        const heroHeight =
          (document.getElementById("main-hero")?.clientHeight as number) + 124;
        if (window.scrollY > heroHeight * 0.75) {
          document
            .getElementById("landing-page-header")
            ?.classList.add("active-header");
          document
            .getElementById("header-burger-icon")
            ?.classList.add("active-header-burger-icon");
          Array.from(document.getElementsByClassName("header-links")).forEach(
            (el) => {
              el.classList.add("active-header-links");
            }
          );
        } else {
          document
            .getElementById("landing-page-header")
            ?.classList.remove("active-header");
          document
            .getElementById("header-burger-icon")
            ?.classList.remove("active-header-burger-icon");
          Array.from(document.getElementsByClassName("header-links")).forEach(
            (el) => {
              el.classList.remove("active-header-links");
            }
          );
        }
      });
  }, [mounted]);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-19 h-full w-full bg-blue-950 [mask-image:radial-gradient(transparent,white)]"></div>
      <div className="absolute top-0 left-0 z-18 h-full w-full">{children}</div>
    </>
  );
}
