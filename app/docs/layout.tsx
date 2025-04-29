import Link from 'next/link';
import { Sidebar } from '@/components/sidebar';
import { DocSearch } from '@/components/doc-search';
import { ModeToggle } from '@/components/mode-toggle';
import { FileTextIcon } from 'lucide-react';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Link href="/" className="flex items-center gap-2">
              <FileTextIcon className="h-5 w-5" />
              <span>Next.js Docs</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex w-full max-w-sm">
              <DocSearch />
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:underline">
                Home
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline">
                GitHub
              </Link>
            </nav>
            <ModeToggle />
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:gap-10">
        <Sidebar className="relative hidden md:block" />
        <main className="relative py-8 md:py-10 w-full max-w-[900px]">
          <div className="md:hidden mb-8">
            <DocSearch />
          </div>
          {children}
        </main>
      </div>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:h-16 items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Next.js Documentation. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}