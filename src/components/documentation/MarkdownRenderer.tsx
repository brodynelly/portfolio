import React from 'react';
import { cn } from '@/lib/utils';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className }) => {
  // Simple markdown parsing for headings, paragraphs, lists, and code blocks
  const parseMarkdown = (markdown: string) => {
    // Convert markdown to HTML
    let html = markdown
      // Code blocks
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      // Headings
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Lists
      .replace(/^\s*-\s*(.*$)/gm, '<li>$1</li>')
      // Paragraphs (must be after lists)
      .replace(/^(?!<[hl]|<li|<pre)(.*$)/gm, '<p>$1</p>')
      // Wrap lists in ul
      .replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>')
      // Fix nested lists
      .replace(/<\/ul>\s*<ul>/g, '');

    return html;
  };

  return (
    <div 
      className={cn("prose prose-slate dark:prose-invert max-w-none", className)}
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  );
};

export default MarkdownRenderer;
