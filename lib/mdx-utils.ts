import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import components from '@/components/mdx-components';

const rootDirectory = path.join(process.cwd(), 'content');

export async function getDocBySlug(slug: string[]) {
  const filePath = slug.length > 0 
    ? path.join(rootDirectory, ...slug) + '.mdx'
    : path.join(rootDirectory, 'index.mdx');
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          // [rehypePrettyCode, { theme: 'github-dark' }],
        ],
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return {
    content,
    frontmatter: {
      title: frontmatter.title || 'Untitled',
      description: frontmatter.description || '',
      ...frontmatter,
    },
    slug: '/' + slug.join('/'),
  };
}

export async function getAllDocPaths() {
  return getAllFiles(rootDirectory)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(rootDirectory, '').replace(/\.mdx$/, '').split(path.sep).filter(Boolean));
}

function getAllFiles(dir: string): string[] {
  const files: string[] = [];

  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      files.push(...getAllFiles(filePath));
    } else {
      files.push(filePath);
    }
  });

  return files;
}

export function extractToc(content: string) {
  const headingLines = content.split('\n').filter(line => line.match(/^#+\s/));
  
  return headingLines.map(line => {
    const match = line.match(/^(#+)\s+(.*)$/);
    if (!match) return null;
    
    const level = match[1].length;
    const text = match[2];
    
    if (level >= 2 && level <= 4) {
      const id = text.toLowerCase().replace(/[^\w]+/g, '-');
      return { text, id, level };
    }
    
    return null;
  }).filter(Boolean);
}