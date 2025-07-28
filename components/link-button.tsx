import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function LinkButton({
  title,
  href,
  className,
}: {
  title: string;
  href: string;
  className?: string;
}) {
  return (
    <Button asChild variant="link" className={cn("mx-auto", className)}>
      <Link href={href}>
        <span>{title}</span> <ChevronRight />
      </Link>
    </Button>
  );
}
