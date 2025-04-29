import Link from 'next/link';
import { TableOfContents } from '@/components/toc';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';

export default async function MDXPage() {
  const toc = [
    { id: 'what-is-mdx', text: 'What is MDX?', level: 2 },
    { id: 'syntax-example', text: 'Syntax Example', level: 2 },
    { id: 'using-components', text: 'Using Components', level: 2 },
    { id: 'built-in-components', text: 'Built-in Components', level: 3 },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-12">
      <div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">MDX</h1>
          <p className="text-lg text-muted-foreground">
            Learn how to use MDX in your documentation
          </p>
        </div>
        
        <Separator className="my-6" />
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="lead">
            MDX is a powerful way to write content with embedded React components.
          </p>
          
          <h2 id="what-is-mdx" className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">What is MDX?</h2>
          <p>
            MDX is a format that combines Markdown with JSX. It allows you to use React components within your markdown content, giving you the expressive power of React with the simplicity of markdown.
          </p>
          
          <Alert>
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
              MDX is a superset of markdown, so any valid markdown is also valid MDX.
            </AlertDescription>
          </Alert>
          
          <h2 id="syntax-example" className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Syntax Example</h2>
          <p>
            Here's a basic example of MDX syntax:
          </p>
          
          <pre className="overflow-x-auto rounded-lg border bg-muted p-4">
            <code className="text-sm">
              {`# Hello World

This is a paragraph with **bold text** and *italic text*.

<Button>Click me</Button>

## Subheading

- List item 1
- List item 2
- List item 3`}
            </code>
          </pre>
          
          <p>
            As you can see, you can mix Markdown syntax with React components seamlessly.
          </p>
          
          <h2 id="using-components" className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Using Components</h2>
          <p>
            One of the most powerful features of MDX is the ability to use custom React components within your markdown files. For example:
          </p>
          
          <pre className="overflow-x-auto rounded-lg border bg-muted p-4">
            <code className="text-sm">
              {`# Using Components

<Callout type="info">
  This is an informational callout that uses a custom component.
</Callout>

You can also use interactive components:

<Tabs>
  <Tab title="JavaScript">
    \`\`\`js
    function hello() {
      console.log("Hello world!");
    }
    \`\`\`
  </Tab>
  <Tab title="TypeScript">
    \`\`\`ts
    function hello(): void {
      console.log("Hello world!");
    }
    \`\`\`
  </Tab>
</Tabs>`}
            </code>
          </pre>
          
          <h3 id="built-in-components" className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">Built-in Components</h3>
          <p>
            This documentation site comes with several built-in components that you can use in your MDX files:
          </p>
          
          <ul>
            <li><strong>Callout</strong>: For important messages or notes</li>
            <li><strong>Tabs</strong>: For creating tabbed interfaces</li>
            <li><strong>Steps</strong>: For step-by-step guides</li>
            <li><strong>CodeBlock</strong>: Enhanced code blocks with syntax highlighting and copy button</li>
          </ul>
        </div>
        
        <Separator className="my-12" />
        
        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/docs/installation">
              <ArrowLeftIcon className="mr-2 h-4 w-4" /> Previous: Installation
            </Link>
          </Button>
          <Button asChild>
            <Link href="/docs/features/code-highlighting">
              Next: Code Highlighting <ArrowRightIcon className="ml-2 h-4 w-4" />
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