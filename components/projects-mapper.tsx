export const prerender = false;

import type { Database } from "@/utils/supabase/types";
import { blurDataURL, imgUrlFromSb, rgbDataURL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  projects: Pick<
    Database["public"]["Tables"]["projects"]["Row"],
    "id" | "imgs" | "slug" | "title"
  >[];
}

export default function ProjectsMapper({ projects }: Props) {
  return projects.length
    ? projects
        .filter((project) => project.imgs)
        .map((project) => {
          return (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className={`mt-auto mb-0 h-full w-full drop-shadow-lg`}
            >
              <section
                className={`bg-primary/5 relative flex h-full max-h-52 w-full flex-col overflow-hidden rounded-md`}
                id={project.title}
              >
                <Image
                  src={imgUrlFromSb("projects", (project.imgs as string[])[0])}
                  alt={project.title}
                  className="h-full w-full shrink-0 object-cover brightness-75"
                  quality={50}
                  width={390}
                  height={210}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
                <div className="from-tertiary/25 xmd:p-4 absolute right-0 bottom-0 left-0 bg-gradient-to-t to-transparent p-3">
                  <h2 className="text-primary-foreground text-base leading-tight font-medium drop-shadow sm:text-2xl">
                    {project.title}
                  </h2>
                </div>
              </section>
            </Link>
          );
        })
    : null;
}
