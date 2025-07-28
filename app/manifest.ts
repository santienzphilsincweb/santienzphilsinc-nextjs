import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Santienz Phils. Inc. | The Ultimate Polyurethane Mortar Floor",
    short_name: "Santienz Phils. Inc.",
    description: "The Ultimate Polyurethane Mortar Floor",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: "#182e85",
    background_color: "#ffffff",
    display: "standalone",
    start_url: "/",
    scope: "/",
  };
}
