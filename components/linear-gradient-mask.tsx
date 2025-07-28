"use client";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function LinearGradientMask({ className }: Props) {
  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full bg-tertiary/20 -z-20 [mask-image:linear-gradient(white,transparent)] pointer-events-none",
        className
      )}
    ></div>
  );
}
