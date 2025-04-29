"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  toc: { id: string; text: string; level: number }[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeHeading, setActiveHeading] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = toc.map(({ id }) => 
        document.getElementById(id)
      ).filter(Boolean) as HTMLElement[];

      const visibleHeadings = headingElements.filter((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top < 200 && rect.bottom > 0;
      });

      if (visibleHeadings.length > 0) {
        setActiveHeading(visibleHeadings[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  if (toc.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <ul className="space-y-2 text-sm">
        {toc.map((item) => (
          <li key={item.id} className={cn("transition-colors duration-200", 
            item.level === 2 ? "pl-0" : "pl-4")}>
            <a
              href={`#${item.id}`}
              className={cn(
                "inline-block transition-colors hover:text-foreground", 
                activeHeading === item.id
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}