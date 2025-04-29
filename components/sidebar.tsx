"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "HTML",
    items: [
      { title: "Basics", href: "/docs/html/basics" },
      { title: "Elements", href: "/docs/html/elements" },
      { title: "Forms", href: "/docs/html/forms" },
      { title: "Semantic HTML", href: "/docs/html/semantic" },
    ],
  },
  {
    title: "CSS",
    items: [
      { title: "Fundamentals", href: "/docs/css/fundamentals" },
      { title: "Layout", href: "/docs/css/layout" },
      { title: "Flexbox", href: "/docs/css/flexbox" },
      { title: "Grid", href: "/docs/css/grid" },
    ],
  },
  {
    title: "JavaScript",
    items: [
      { title: "Basics", href: "/docs/javascript/basics" },
      { title: "Functions", href: "/docs/javascript/functions" },
      { title: "DOM", href: "/docs/javascript/dom" },
      { title: "ES6+", href: "/docs/javascript/es6" },
    ],
  },
  {
    title: "TypeScript",
    items: [
      { title: "Getting Started", href: "/docs/typescript/getting-started" },
      { title: "Types", href: "/docs/typescript/types" },
      { title: "Interfaces", href: "/docs/typescript/interfaces" },
      { title: "Generics", href: "/docs/typescript/generics" },
    ],
  },
  {
    title: "React",
    items: [
      { title: "Components", href: "/docs/react/components" },
      { title: "Hooks", href: "/docs/react/hooks" },
      { title: "State Management", href: "/docs/react/state" },
      { title: "Performance", href: "/docs/react/performance" },
    ],
  },
  {
    title: "Tailwind CSS",
    items: [
      { title: "Installation", href: "/docs/tailwind/installation" },
      { title: "Utility Classes", href: "/docs/tailwind/utilities" },
      { title: "Components", href: "/docs/tailwind/components" },
      { title: "Configuration", href: "/docs/tailwind/configuration" },
    ],
  },
];

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className, ...props }: SidebarProps) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  return (
    <aside className={cn("pb-12 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto", className)} {...props}>
      <div className="space-y-4 py-4">
        {sidebarItems.map((section) => (
          <div key={section.title} className="px-3 py-2">
            <Collapsible
              open={openSections.includes(section.title) || section.items.some(item => item.href === pathname)}
              onOpenChange={() => toggleSection(section.title)}
            >
              <CollapsibleTrigger className="flex w-full items-center justify-between text-sm font-semibold">
                <span>{section.title}</span>
                <ChevronRight 
                  className={cn(
                    "h-4 w-4 transition-transform", 
                    openSections.includes(section.title) || section.items.some(item => item.href === pathname) ? "rotate-90" : ""
                  )}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                      pathname === item.href ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </CollapsibleContent>
            </Collapsible>
          </div>
        ))}
      </div>
    </aside>
  );
}