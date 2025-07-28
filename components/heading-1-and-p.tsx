import { cn } from "@/lib/utils";

interface Props {
  h1: string;
  p?: string;
  parentClass?: string;
  ctaDivClass?: string;
  h1andpParentClass?: string;
  h1Class?: string;
  pClass?: string;
  withCta?: boolean;
  alignment?: "center-only" | "reverse" | "default" | "left-only";
  children?: React.ReactNode;
}

export default function Heading1AndP({
  h1,
  p,
  parentClass,
  ctaDivClass,
  h1andpParentClass,
  h1Class,
  pClass,
  withCta,
  alignment = "default",
  children,
}: Props) {
  return withCta ? (
    <div className={cn("", parentClass)}>
      <div className={cn("space-y-2", h1andpParentClass)}>
        <h1
          className={cn(
            "text-primary relative z-20 text-4xl leading-tight font-bold md:text-6xl lg:text-6xl",
            alignment === "default" && "text-center lg:text-left",
            alignment === "center-only" && "text-center",
            alignment === "reverse" && "text-left lg:text-center",
            alignment === "left-only" && "text-left",
            h1Class
          )}
        >
          {h1}
        </h1>
        {p ? (
          <p className={cn("text-muted-foreground relative z-20", pClass)}>
            {p}
          </p>
        ) : null}
      </div>
      <div
        className={cn(
          "my-6 w-fit",
          alignment === "default" && "not-lg:mx-auto",
          alignment === "center-only" && "mx-auto",
          alignment === "reverse" && "lg:mx-auto",
          alignment === "left-only" && "mr-auto ml-0",

          ctaDivClass
        )}
      >
        {children}
      </div>
    </div>
  ) : (
    <div className={cn("space-y-2", h1andpParentClass)}>
      <h1
        className={cn(
          "text-primary relative z-20 text-4xl leading-tight font-bold md:text-6xl lg:text-6xl",
          alignment === "default" && "text-center lg:text-left",
          alignment === "center-only" && "text-center",
          alignment === "reverse" && "text-left lg:text-center",
          alignment === "left-only" && "text-left",
          h1Class
        )}
      >
        {h1}
      </h1>
      {p ? (
        <p className={cn("text-muted-foreground relative z-20", pClass)}>{p}</p>
      ) : null}
    </div>
  );
}
