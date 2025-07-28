"use client";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { CircleXIcon, Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}

export default function SearchBar({ className }: { className?: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const debouncedQuery = useDebounce(query, 200);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearInput = () => {
    setQuery("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  useEffect(() => {
    if (debouncedQuery !== (searchParams.get("query") || "")) {
      router.push(`${pathname}?query=${debouncedQuery}`);
    }
  }, [debouncedQuery]);

  return (
    <>
      <div className="relative">
        <div>
          <Input
            ref={inputRef}
            className={cn(
              "peer text-foreground placeholder:text-muted-foreground ps-9",
              className
            )}
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={searchParams.get("query") || "Search projects..."}
          />
          {query && (
            <button
              className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Clear input"
              onClick={handleClearInput}
            >
              <CircleXIcon size={16} aria-hidden="true" />
            </button>
          )}
        </div>
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <Search className="text-tertiary" size={16} aria-hidden="true" />
        </div>
      </div>
      <p hidden={!query.length} className="text-muted-foreground text-sm mt-2">
        Search results for, <i>{query}</i>
      </p>
    </>
  );
}
