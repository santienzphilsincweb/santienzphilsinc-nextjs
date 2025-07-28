import bbc from "@/public/certs/bbc-2025.jpg";
import bp from "@/public/certs/bp-2025.jpg";
import coc from "@/public/certs/coc-2025.jpg";
import epo from "@/public/certs/epo-2025.jpg";
import fsic from "@/public/certs/fsic-2025.jpg";
import mp from "@/public/certs/mp-2025.jpg";
import { StaticImageData } from "next/image";
// import or from "@/images/certs/or-2025.jpg";

export const CREDS_INFO: {
  title: string;
  img: StaticImageData;
  type: "certificate" | "permit" | "receipt";
}[] = [
  { title: "Barangay Business Clearance", img: bbc, type: "certificate" },
  { title: "Certificate of Conformance", img: coc, type: "certificate" },
  {
    title: "Fire Safety Inspection Certificate",
    img: fsic,
    type: "certificate",
  },
  { title: "Business Permit", img: bp, type: "permit" },
  { title: "Environmental Permit to Operate", img: epo, type: "permit" },
  { title: "Mayor's Permit", img: mp, type: "permit" },
  // { title: "Official Receipt", img: or, type: "receipt" },
];
