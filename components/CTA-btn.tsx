import Link from "next/link";
import { Button } from "./ui/button";
import { Url } from "next/dist/shared/lib/router/router";
import { cn } from "@/lib/utils";

interface Props {
  href: Url;
  children: React.ReactNode;
  className?: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "tertiary"
    | "borderedTertiary"
    | null
    | undefined;
  noGlow?: boolean;
  wShadow?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

export default function CTABtn({
  href,
  className,
  variant,
  children,
  noGlow = false,
  wShadow = false,
  target = "_self",
  rel = "noopener noreferrer",
}: Props) {
  return (
    <Button
      variant={variant}
      className={cn(
        "relative z-20",
        className,
        !noGlow && "drop-shadow-[0_4px_8px_var(--tertiary)]",
        wShadow && "shadow-lg"
      )}
      asChild
    >
      <Link href={href} target={target} rel={rel}>
        {children}
      </Link>
    </Button>
  );
}
