import Link from "next/link";
import { TableOfContents } from "@/components/toc";
import { getDocBySlug, extractToc } from "@/lib/mdx-utils";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default async function DocsPage() {
  // Demo content for static rendering - normally would be fetched from MDX files
  const content = `
  # Introduction
  
  Welcome to the Next.js documentation site. This site is built with Next.js and MDX, providing a beautiful and interactive documentation experience.
  
  ## What is Next.js?
  
  Next.js is a React framework that enables functionality like server-side rendering, static site generation, and more. It makes building production-ready React applications straightforward with built-in features.
  
  ### Key Features
  
  - **Server-side Rendering (SSR)**: Render pages on the server for improved SEO and performance
  - **Static Site Generation (SSG)**: Pre-render pages at build time for maximum performance
  - **API Routes**: Build API endpoints within your Next.js application
  - **File-system Routing**: Create routes based on the file structure of your pages directory
  
  ## Getting Started
  
  To start using Next.js, you need to install it in your project:
  
  \`\`\`bash
  # Create a new Next.js app
  npx create-next-app my-next-app
  # OR with TypeScript
  npx create-next-app@latest --typescript
  \`\`\`
  
  Then, run the development server:
  
  \`\`\`bash
  npm run dev
  # or
  yarn dev
  \`\`\`
  
  ## Next Steps
  
  Once you've set up your Next.js application, you can explore the following guides:
  
  - **Installation**: Complete setup instructions
  - **MDX**: Learn how to use MDX in your Next.js application
  - **Navigation**: Understanding navigation in Next.js
  `;

  const toc = extractToc(content);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-12">
      <div className="">
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Introduction
          </h1>
          <p className="text-lg text-muted-foreground">
            Welcome to the Next.js documentation site
          </p>
        </div>

        <Separator className="my-6" />

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="lead">
            Welcome to the Next.js documentation site. This site is built with
            Next.js and MDX, providing a beautiful and interactive documentation
            experience.
          </p>

          <h2
            id="what-is-nextjs"
            className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
          >
            What is Next.js?
          </h2>
          <p>
            Next.js is a React framework that enables functionality like
            server-side rendering, static site generation, and more. It makes
            building production-ready React applications straightforward with
            built-in features.
          </p>

          <h3
            id="key-features"
            className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
          >
            Key Features
          </h3>
          <ul>
            <li>
              <strong>Server-side Rendering (SSR)</strong>: Render pages on the
              server for improved SEO and performance
            </li>
            <li>
              <strong>Static Site Generation (SSG)</strong>: Pre-render pages at
              build time for maximum performance
            </li>
            <li>
              <strong>API Routes</strong>: Build API endpoints within your
              Next.js application
            </li>
            <li>
              <strong>File-system Routing</strong>: Create routes based on the
              file structure of your pages directory
            </li>
          </ul>

          <h2
            id="getting-started"
            className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
          >
            Getting Started
          </h2>
          <p>To start using Next.js, you need to install it in your project:</p>

          <pre className="overflow-x-auto rounded-lg border bg-muted p-4">
            <code className="text-sm">
              {`# Create a new Next.js app
npx create-next-app my-next-app
# OR with TypeScript
npx create-next-app@latest --typescript`}
            </code>
          </pre>

          <p>Then, run the development server:</p>

          <pre className="overflow-x-auto rounded-lg border bg-muted p-4">
            <code className="text-sm">
              {`npm run dev
# or
yarn dev`}
            </code>
          </pre>

          <h2
            id="next-steps"
            className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
          >
            Next Steps
          </h2>
          <p>
            Once you've set up your Next.js application, you can explore the
            following guides:
          </p>

          <ul>
            <li>
              <Link href="/docs/installation">Installation</Link>: Complete
              setup instructions
            </li>
            <li>
              <Link href="/docs/features/mdx">MDX</Link>: Learn how to use MDX
              in your Next.js application
            </li>
            <li>
              <Link href="/docs/guides/navigation">Navigation</Link>:
              Understanding navigation in Next.js
            </li>
          </ul>
        </div>

        <Separator className="my-12" />

        <div className="flex items-center justify-between">
          <div></div>
          <Button asChild>
            <Link href="/docs/installation">
              Next: Installation <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="sticky top-28">
          <TableOfContents
            toc={toc.filter(
              (item): item is { id: string; text: string; level: number } =>
                item !== null
            )}
          />
        </div>
      </div>
    </div>
  );
}
