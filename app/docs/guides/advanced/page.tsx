import Link from 'next/link';
import { TableOfContents } from '@/components/toc';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default async function AdvancedGuidePage() {
  const toc = [
    { id: 'advanced-concepts', text: 'Advanced Concepts', level: 2 },
    { id: 'custom-components', text: 'Custom Components', level: 2 },
    { id: 'performance', text: 'Performance Optimization', level: 2 },
    { id: 'deployment', text: 'Deployment Strategies', level: 2 },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-12">
      <div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Advanced Guide</h1>
          <p className="text-lg text-muted-foreground">
            Advanced concepts and best practices for your documentation site
          </p>
        </div>
        
        <Separator className="my-6" />
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="lead">
            This guide covers advanced topics and techniques for building sophisticated documentation sites with Next.js and MDX.
          </p>
          
          <h2 id="advanced-concepts" className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Advanced Concepts</h2>
          <p>
            Learn about advanced concepts like custom MDX components, dynamic content generation, and advanced routing strategies.
          </p>
          
          <h2 id="custom-components" className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Custom Components</h2>
          <p>
            Create reusable custom components to enhance your documentation with interactive elements, diagrams, and more.
          </p>
          
          <h2 id="performance" className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Performance Optimization</h2>
          <p>
            Optimize your documentation site for performance with techniques like code splitting, lazy loading, and static generation.
          </p>
          
          <h2 id="deployment" className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Deployment Strategies</h2>
          <p>
            Learn about different deployment strategies and how to optimize your site for production.
          </p>
        </div>
        
        <Separator className="my-12" />
        
        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/docs/guides/navigation">
              <ArrowLeftIcon className="mr-2 h-4 w-4" /> Previous: Navigation
            </Link>
          </Button>
          <Button asChild>
            <Link href="/docs/api/components">
              Next: Components <ArrowRightIcon className="ml-2 h-4 w-4" />
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