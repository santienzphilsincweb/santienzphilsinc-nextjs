"use client";
import Script from "next/script";

export function HeaderColorAdjust() {
  return (
    <Script
      onLoad={() => {
        console.log("Loaded");
      }}
      onError={() => console.error("Script Error")}
      id="header-color-adjust"
    >
      {`window.addEventListener("scroll", () => {
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
  });`}
    </Script>
  );
}
