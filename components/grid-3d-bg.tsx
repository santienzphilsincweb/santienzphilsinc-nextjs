"use client";

import grid3dBackground from "@/public/grid_3d.webp";
import Image from "next/image";
export default function Grid3DBg() {
  return (
    <Image
      src={grid3dBackground}
      alt="Grid 3D Background"
      className="absolute inset-0 h-full w-full object-cover"
      loading="eager"
    />
  );
}
