import React, { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { DocSection } from '@/data/projects/types';
import DocSidebar from './DocSidebar';
import DocContent from './DocContent';
import DocSearch from './DocSearch';
import DocDownload from './DocDownload';

interface DocumentationProps {
  sections: DocSection[];
  projectTitle: string;
  className?: string;
}

const Documentation: React.FC<DocumentationProps> = ({ sections, projectTitle, className }) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.title || '');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter sections based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;

    return sections.filter(section => {
      const titleMatch = section.title.toLowerCase().includes(searchQuery.toLowerCase());
      const contentMatch = section.content.toLowerCase().includes(searchQuery.toLowerCase());
      return titleMatch || contentMatch;
    });
  }, [sections, searchQuery]);

  // Update active section when filtered sections change
  React.useEffect(() => {
    if (filteredSections.length > 0 && !filteredSections.some(s => s.title === activeSection)) {
      setActiveSection(filteredSections[0].title);
    }
  }, [filteredSections, activeSection]);

  if (!sections || sections.length === 0) {
    return (
      <div className={cn("bg-secondary/50 rounded-xl p-6", className)}>
        <p className="text-muted-foreground">No documentation available for this project.</p>
      </div>
    );
  }

  return (
    <div className={cn("bg-card rounded-xl border overflow-hidden", className)}>
      <div className="p-4 border-b flex flex-col sm:flex-row justify-between gap-4 items-center">
        <DocSearch onSearch={setSearchQuery} className="w-full sm:w-64" />
        <DocDownload sections={sections} projectTitle={projectTitle} />
      </div>

      {filteredSections.length === 0 ? (
        <div className="p-8 text-center">
          <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
          <button
            className="text-primary text-sm mt-2 hover:underline"
            onClick={() => setSearchQuery('')}
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-1 border-r">
            <DocSidebar
              sections={filteredSections}
              activeSection={activeSection}
              onSectionChange={setActiveSection}
              searchQuery={searchQuery}
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <DocContent
              sections={filteredSections}
              activeSection={activeSection}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Documentation;
