"use client";

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    img: StaticImageData;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 w-full overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "xmd:gap-4 flex w-max min-w-full shrink-0 flex-nowrap gap-1",
          start && "animate-scroll",
          pauseOnHover &&
            "active:[animation-play-state:paused] sm:hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <Link
            href={item.img.src}
            key={idx}
            target="_blank"
            className="my-auto"
          >
            <li
              className="xmd:w-[312px] bg-background/50 relative h-fit w-[244px] max-w-full shrink-0 rounded-md border  dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
              key={item.title}
            >
              <div className="xmd:p-4 p-1">
                <Image
                  width={250}
                  height={450}
                  quality={50}
                  loading="lazy"
                  src={item.img}
                  alt={item.title}
                  className="aspect-auto max-h-82 w-full rounded-md border object-fill object-top"
                />
              </div>
              <h3 className="xmd:px-4 xmd:pt-0 xmd:pb-4 text-primary px-1 pt-1 pb-1 text-center font-semibold">
                {item.title}
              </h3>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
