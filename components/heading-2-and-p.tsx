import { cn } from "@/lib/utils";

interface Props {
  hAndPParentClass?: string;
  pClass?: string;
  hClass?: string;
  p?: string;
  h: string;
  alignment?: "center-only" | "reverse" | "default" | "left-only";
  children?: React.ReactNode;
}

export default function Heading2AndP({
  hAndPParentClass,
  hClass,
  pClass,
  p,
  h,
  alignment = "default",
  children,
}: Props) {
  return (
    <div className={cn("mx-auto max-w-6xl space-y-2 px-4", hAndPParentClass)}>
      <h1
        className={cn(
          "font-bold text-2xl xmd:text-4xl text-tertiary",
          alignment === "default" && "text-left xmd:text-center",
          alignment === "center-only" && "text-center",
          alignment === "reverse" && "xmd:text-left text-center",
          alignment === "left-only" && "text-left",
          hClass
        )}
      >
        {h}
      </h1>
      {p ? <p className={cn("text-muted-foreground", pClass)}>{p}</p> : null}
      {children}
    </div>
  );
}
