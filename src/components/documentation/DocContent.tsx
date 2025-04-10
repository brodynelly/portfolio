import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { DocSection } from '@/data/projects/types';
import MarkdownRenderer from './MarkdownRenderer';

interface DocContentProps {
  sections: DocSection[];
  activeSection: string;
  searchQuery?: string;
  className?: string;
}

const DocContent: React.FC<DocContentProps> = ({
  sections,
  activeSection,
  searchQuery = '',
  className
}) => {
  const currentSection = sections.find(section => section.title === activeSection) || sections[0];

  // Process content to highlight search matches if needed
  const processedContent = useMemo(() => {
    if (!searchQuery || !currentSection) return currentSection?.content || '';

    // Escape special regex characters in the search query
    const escapedQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Add HTML for highlighting
    return currentSection.content.replace(
      new RegExp(`(${escapedQuery})`, 'gi'),
      '<mark class="bg-yellow-100 dark:bg-yellow-800 dark:text-white">$1</mark>'
    );
  }, [currentSection, searchQuery]);

  // Scroll to the first search match when content changes
  React.useEffect(() => {
    if (searchQuery && document.querySelector('mark')) {
      const firstMatch = document.querySelector('mark');
      firstMatch?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [processedContent, searchQuery]);

  if (!currentSection) return null;

  return (
    <div className={cn("p-6 overflow-auto", className)}>
      <MarkdownRenderer content={processedContent} />
    </div>
  );
};

export default DocContent;
