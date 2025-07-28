import Image from "next/image";
import logo from "@/public/santienz.png";
import { cn } from "@/lib/utils";
export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative size-12", className)}>
      <Image
        src={logo}
        alt="Santienz Logo"
        className="object-contain"
        loading="eager"
        quality={100}
        fill
      />
    </div>
  );
}
