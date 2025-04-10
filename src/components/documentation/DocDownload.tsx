import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DocSection } from '@/data/projects/types';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

interface DocDownloadProps {
  sections: DocSection[];
  projectTitle: string;
  className?: string;
}

const DocDownload: React.FC<DocDownloadProps> = ({ 
  sections, 
  projectTitle,
  className 
}) => {
  const handleDownload = async () => {
    try {
      // Create a temporary div to render the content
      const tempDiv = document.createElement('div');
      tempDiv.className = 'prose prose-slate max-w-none p-6 bg-white';
      tempDiv.style.width = '800px';
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      document.body.appendChild(tempDiv);

      // Add title
      const titleElement = document.createElement('h1');
      titleElement.textContent = `${projectTitle} Documentation`;
      tempDiv.appendChild(titleElement);

      // Add each section
      for (const section of sections) {
        // Add section title
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section.title;
        tempDiv.appendChild(sectionTitle);

        // Add section content - convert markdown to HTML
        const contentDiv = document.createElement('div');
        
        // Simple markdown parsing for headings, paragraphs, lists, and code blocks
        let html = section.content
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
        
        contentDiv.innerHTML = html;
        tempDiv.appendChild(contentDiv);
        
        // Add separator
        const separator = document.createElement('hr');
        tempDiv.appendChild(separator);
      }

      // Initialize PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Convert HTML to canvas
      const canvas = await html2canvas(tempDiv, {
        scale: 1.5, // Higher scale for better quality
        useCORS: true,
        logging: false
      });

      // Add canvas to PDF
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      
      let heightLeft = imgHeight;
      let position = 0;
      
      // First page
      pdf.addImage(imgData, 'PNG', imgX, position, imgWidth * ratio, imgHeight * ratio);
      heightLeft -= pdfHeight;
      
      // Add more pages if needed
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', imgX, position, imgWidth * ratio, imgHeight * ratio);
        heightLeft -= pdfHeight;
      }

      // Save PDF
      pdf.save(`${projectTitle.replace(/\s+/g, '_')}_Documentation.pdf`);

      // Clean up
      document.body.removeChild(tempDiv);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className={className}
      onClick={handleDownload}
    >
      <Download className="mr-2 h-4 w-4" />
      Download PDF
    </Button>
  );
};

export default DocDownload;
