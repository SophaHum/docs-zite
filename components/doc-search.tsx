"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, FileIcon, Command } from "lucide-react";
import { cn } from "@/lib/utils";

interface DocItem {
  title: string;
  href: string;
  section: string;
}

const searchItems: DocItem[] = [
  { title: "Introduction", href: "/docs", section: "Getting Started" },
  { title: "Installation", href: "/docs/installation", section: "Getting Started" },
  { title: "MDX", href: "/docs/features/mdx", section: "Features" },
  { title: "Code Highlighting", href: "/docs/features/code-highlighting", section: "Features" },
  { title: "Table of Contents", href: "/docs/features/table-of-contents", section: "Features" },
  { title: "Creating Pages", href: "/docs/guides/creating-pages", section: "Guides" },
  { title: "Navigation", href: "/docs/guides/navigation", section: "Guides" },
  { title: "Advanced", href: "/docs/guides/advanced", section: "Guides" },
  { title: "Components", href: "/docs/api/components", section: "API" },
  { title: "Functions", href: "/docs/api/functions", section: "API" },
];

export function DocSearch() {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState<DocItem[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  React.useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  React.useEffect(() => {
    if (search) {
      const filtered = searchItems.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.section.toLowerCase().includes(search.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [search]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start text-sm text-muted-foreground">
          <Search className="mr-2 h-4 w-4" />
          <span>Search documentation...</span>
          <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] p-0">
        <DialogTitle className="sr-only">Search Documentation</DialogTitle>
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              ref={inputRef}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search documentation..."
              className="h-9 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <div className="rounded border px-1.5 text-xs font-semibold">ESC</div>
          </div>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-0">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center px-4 py-2 hover:bg-accent cursor-pointer"
                >
                  <FileIcon className="mr-2 h-4 w-4" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.section}</div>
                  </div>
                </a>
              ))}
            </div>
          ) : search ? (
            <p className="p-4 text-center text-sm text-muted-foreground">No results found.</p>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <Command className="h-8 w-8 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">Search for documentation...</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}