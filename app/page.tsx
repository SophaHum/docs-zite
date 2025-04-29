import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  GithubIcon,
  ArrowRightIcon,
  FileTextIcon,
  BookOpenIcon,
  PaintbrushIcon,
} from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { HeroPattern } from "@/components/hero-pattern";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <HeroPattern />
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="container max-w-5xl mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-semibold">
            <FileTextIcon className="h-5 w-5" />
            <span>Docs Zite</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/docs"
                className="text-sm font-medium hover:underline"
              >
                Documentation
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline">
                Blog
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline">
                GitHub
              </Link>
            </div>
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <ModeToggle />
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden md:flex"
            >
              <Link href="/docs">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16 container max-w-5xl mx-auto">
        <section className="py-20 text-center flex flex-col items-center gap-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight lg:text-7xl">
            Make beautiful documentation <br className="hidden md:inline" />{" "}
            with Next.js & MDX
          </h1>
          <p className="text-lg text-muted-foreground max-w-[700px]">
            A simple, powerful and flexible site generation framework with
            everything you love from Next.js.
          </p>
          <div className="flex gap-4 mt-4">
            <Button asChild size="lg">
              <Link href="/docs">
                Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          </div>
        </section>

        <section className="container py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-start gap-2">
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                <BookOpenIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Markdown and MDX</h3>
              <p className="text-muted-foreground">
                Write content using MDX, combining Markdown with React
                components.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                <PaintbrushIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Beautiful Design</h3>
              <p className="text-muted-foreground">
                Professionally designed components and layouts for
                documentation.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 7h10" />
                  <path d="M7 12h5" />
                  <path d="M7 17h8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Full Text Search</h3>
              <p className="text-muted-foreground">
                Fast and accurate search across all your documentation.
              </p>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="overflow-hidden rounded-lg border bg-card shadow">
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Code blocks with syntax highlighting
              </h2>
              <div className="rounded-md bg-muted p-6 overflow-auto">
                <pre className="text-sm">
                  <code>
                    <span className="text-blue-500">import</span>{" "}
                    <span className="text-green-500">&#123; Button &#125;</span>{" "}
                    <span className="text-blue-500">from</span>{" "}
                    <span className="text-yellow-500">
                      &apos;@/components/ui/button&apos;
                    </span>
                    ;
                    <br />
                    <br />
                    <span className="text-blue-500">
                      export default function
                    </span>{" "}
                    <span className="text-yellow-500">Example</span>() &#123;
                    <br />
                    {"  "}
                    <span className="text-blue-500">return</span> (
                    <br />
                    {"    "}&lt;<span className="text-orange-500">div</span>&gt;
                    <br />
                    {"      "}&lt;
                    <span className="text-orange-500">Button</span>&gt;Click
                    me&lt;/<span className="text-orange-500">Button</span>&gt;
                    <br />
                    {"    "}&lt;/<span className="text-orange-500">div</span>
                    &gt;
                    <br />
                    {"  "});
                    <br />
                    &#125;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t rounded-t-lg py-8 bg-muted backdrop-blur-sm px-2 sm:px-0">
        <div className="container max-w-6xl mx-auto text-center space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Documentation</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/guide"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/api"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/examples"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Examples
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">More</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Next.js Documentation. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
