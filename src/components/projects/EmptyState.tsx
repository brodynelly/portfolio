
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { SearchX } from 'lucide-react';

export default function EmptyState() {
  return (
    <Card className="bg-secondary/50 border-dashed">
      <CardContent className="flex flex-col items-center justify-center py-10">
        <SearchX className="h-12 w-12 text-muted-foreground/50 mb-4" />
        <p className="text-lg font-medium text-muted-foreground">No projects found for this class.</p>
        <p className="text-sm text-muted-foreground/70 mt-1">Try selecting a different class category.</p>
      </CardContent>
    </Card>
  );
}
