import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "olcunvgxuwnxggximads.supabase.co",
      },
      {
        protocol: "https",
        hostname: "cmvuenlcht.ufs.sh",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "lirp.cdn-website.com",
      },
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
      },
      {
        protocol: "https",
        hostname: "royalecoldstorage.com.ph",
      },
      {
        protocol: "https",
        hostname: "isocholdings.com",
      },
      {
        protocol: "https",
        hostname: "delimondo.ph",
      },
      {
        protocol: "https",
        hostname: "static.wikia.nocookie.net",
      },
    ],
  },
};

export default nextConfig;
