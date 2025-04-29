import Link from 'next/link';
import { TableOfContents } from '@/components/toc';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default async function CodeHighlightingPage() {
  const toc = [
    { id: 'syntax-highlighting', text: 'Syntax Highlighting', level: 2 },
    { id: 'supported-languages', text: 'Supported Languages', level: 2 },
    { id: 'code-block-features', text: 'Code Block Features', level: 2 },
    { id: 'custom-themes', text: 'Custom Themes', level: 2 },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-12">
      <div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Code Highlighting</h1>
          <p className="text-lg text-muted-foreground">
            Learn about syntax highlighting in the documentation
          </p>
        </div>
        
        <Separator className="my-6" />
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="lead">
            Code blocks in MDX files are automatically syntax highlighted for better readability.
          </p>
          
          <h2 id="syntax-highlighting" className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Syntax Highlighting</h2>
          <p>
            This documentation site uses rehype-pretty-code for syntax highlighting. It provides beautiful, accessible code highlighting with theme support.
          </p>
          
          <p>
            You can create syntax-highlighted code blocks using triple backticks followed by the language:
          </p>
          
          <pre className="overflow-x-auto rounded-lg border bg-muted p-4">
            <code className="text-sm">
              {`\`\`\`javascript
function hello() {
  console.log("Hello, world!");
}
\`\`\``}
            </code>
          </pre>
          
          <p>
            Which will render as:
          </p>
          
          <pre className="overflow-x-auto rounded-lg border bg-muted p-4">
            <code className="text-sm">
              <span className="text-blue-500">function</span> <span className="text-yellow-500">hello</span>() {`{`}
              <br />
              {'  '}<span className="text-yellow-500">console</span>.<span className="text-blue-500">log</span>(<span className="text-green-500">"Hello, world!"</span>);
              <br />
              {`}`}
            </code>
          </pre>
          
          <h2 id="supported-languages" className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Supported Languages</h2>
          <p>
            The syntax highlighting supports a wide range of programming languages, including but not limited to:
          </p>
          
          <ul>
            <li>JavaScript (js)</li>
            <li>TypeScript (ts)</li>
            <li>JSX (jsx)</li>
            <li>TSX (tsx)</li>
            <li>CSS (css)</li>
            <li>HTML (html)</li>
            <li>JSON (json)</li>
            <li>Markdown (md)</li>
            <li>Bash (bash)</li>
            <li>Python (py)</li>
            <li>Ruby (rb)</li>
            <li>And many more...</li>
          </ul>
          
          <h2 id="code-block-features" className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Code Block Features</h2>
          <p>
            The code blocks in this documentation include several helpful features:
          </p>
          
          <ul>
            <li><strong>Syntax highlighting</strong>: Language-aware syntax highlighting</li>
            <li><strong>Line numbers</strong>: Optional line numbers for easier reference</li>
            <li><strong>Copy button</strong>: One-click copying of code blocks</li>
            <li><strong>Line highlighting</strong>: Highlight specific lines for emphasis</li>
            <li><strong>Word highlighting</strong>: Highlight specific words or phrases</li>
          </ul>
          
          <h2 id="custom-themes" className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Custom Themes</h2>
          <p>
            The code highlighting uses the theme system to provide consistent styling in both light and dark modes. The default themes are:
          </p>
          
          <ul>
            <li><strong>Light mode</strong>: GitHub Light</li>
            <li><strong>Dark mode</strong>: GitHub Dark</li>
          </ul>
          
          <p>
            You can customize these themes by modifying the configuration in your rehype-pretty-code setup.
          </p>
        </div>
        
        <Separator className="my-12" />
        
        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/docs/features/mdx">
              <ArrowLeftIcon className="mr-2 h-4 w-4" /> Previous: MDX
            </Link>
          </Button>
          <Button asChild>
            <Link href="/docs/features/table-of-contents">
              Next: Table of Contents <ArrowRightIcon className="ml-2 h-4 w-4" />
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