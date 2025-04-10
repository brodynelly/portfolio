import React from 'react';
import { cn } from '@/lib/utils';
import { DocSection } from '@/data/projects/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface DocSidebarProps {
  sections: DocSection[];
  activeSection: string;
  onSectionChange: (section: string) => void;
  searchQuery?: string;
  className?: string;
}

// Helper function to highlight search matches
const highlightMatches = (text: string, query: string) => {
  if (!query || !query.trim()) return text;

  const regex = new RegExp(`(${query.trim()})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => (
        regex.test(part) ?
          <span key={i} className="bg-yellow-100 dark:bg-yellow-800 dark:text-white">{part}</span> :
          <span key={i}>{part}</span>
      ))}
    </>
  );
};

const DocSidebar: React.FC<DocSidebarProps> = ({
  sections,
  activeSection,
  onSectionChange,
  searchQuery = '',
  className
}) => {
  return (
    <div className={cn("w-full border-r", className)}>
      <div className="p-4 border-b">
        <h3 className="font-medium">Documentation</h3>
        {searchQuery && (
          <p className="text-xs text-muted-foreground mt-1">
            Showing results for "{searchQuery}"
          </p>
        )}
      </div>
      <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
        {sections.map((section, index) => {
          // Extract first paragraph or heading for preview
          const preview = section.content.split('\n\n')[0].replace(/^#+ /, '');

          return (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger
                className={cn(
                  "px-4 py-2 hover:bg-secondary/50 transition-colors",
                  activeSection === section.title && "bg-secondary font-medium"
                )}
                onClick={() => onSectionChange(section.title)}
              >
                {searchQuery ? highlightMatches(section.title, searchQuery) : section.title}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2 text-sm text-muted-foreground">
                {searchQuery ? highlightMatches(preview, searchQuery) : preview}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default DocSidebar;
