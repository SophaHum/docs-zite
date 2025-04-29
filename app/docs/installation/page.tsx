import Link from 'next/link';
import { TableOfContents } from '@/components/toc';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default async function InstallationPage() {
  const toc = [
    { id: 'prerequisites', text: 'Prerequisites', level: 2 },
    { id: 'creating-a-new-project', text: 'Creating a New Project', level: 2 },
    { id: 'manual-setup', text: 'Manual Setup', level: 2 },
    { id: 'development-server', text: 'Development Server', level: 2 },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-12">
      <div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Installation</h1>
          <p className="text-lg text-muted-foreground">
            Getting started with Next.js documentation site
          </p>
        </div>
        
        <Separator className="my-6" />
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="lead">
            This guide will help you set up a new documentation website using Next.js and MDX.
          </p>
          
          <h2 id="prerequisites" className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Prerequisites</h2>
          <p>
            Before you begin, make sure you have the following installed:
          </p>
          
          <ul>
            <li>Node.js 16.8.0 or later</li>
            <li>npm, yarn, or pnpm for package management</li>
          </ul>
          
          <h2 id="creating-a-new-project" className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Creating a New Project</h2>
          <p>
            The easiest way to get started is with the Next.js CLI which sets up everything automatically for you:
          </p>
          
          <pre className="overflow-x-auto rounded-lg border bg-muted p-4">
            <code className="text-sm">
              {`# Create a new Next.js project with TypeScript
npx create-next-app@latest my-docs --typescript

# Change to the new directory
cd my-docs`}
            </code>
          </pre>
          
          <h2 id="manual-setup" className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Manual Setup</h2>
          <p>
            To manually set up a Next.js project with MDX support, follow these steps:
          </p>
          
          <pre className="overflow-x-auto rounded-lg border bg-muted p-4">
            <code className="text-sm">
              {`# Create an empty directory and initialize npm
mkdir my-docs
cd my-docs
npm init -y

# Install Next.js, React, and React DOM
npm install next react react-dom

# Install dependencies for MDX
npm install next-mdx-remote gray-matter rehype-slug rehype-autolink-headings`}
            </code>
          </pre>
          
          <p>
            Then, update your <code>package.json</code> file to include the Next.js scripts:
          </p>
          
          <pre className="overflow-x-auto rounded-lg border bg-muted p-4">
            <code className="text-sm">
              {`"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}`}
            </code>
          </pre>
          
          <h2 id="development-server" className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Development Server</h2>
          <p>
            After setting up your project, you can start the development server:
          </p>
          
          <pre className="overflow-x-auto rounded-lg border bg-muted p-4">
            <code className="text-sm">
              {`npm run dev`}
            </code>
          </pre>
          
          <p>
            This will start the development server on <code>http://localhost:3000</code>. You can now begin creating your documentation site.
          </p>
        </div>
        
        <Separator className="my-12" />
        
        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/docs">
              <ArrowLeftIcon className="mr-2 h-4 w-4" /> Previous: Introduction
            </Link>
          </Button>
          <Button asChild>
            <Link href="/docs/features/mdx">
              Next: MDX <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="sticky top-28">
          <TableOfContents toc={toc} />
        </div>
      </div>
    </div>
  );
}