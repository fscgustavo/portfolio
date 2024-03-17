import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Project } from '@/constants/projects';

type ProjectLinksProps = {
  hrefs: Project['links'];
};

export function ProjectLinks({
  hrefs: { sourceCode, preview },
}: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="outline"
        className="flex items-center gap-2 text-accent-foreground max-sm:w-full"
        asChild
      >
        <a href={sourceCode} target="_blank" rel="noopener">
          <Github />
          Source Code
        </a>
      </Button>
      <Button
        variant="secondary"
        className="flex items-center gap-2 max-sm:w-full"
        asChild
      >
        <a href={preview} target="_blank" rel="noopener">
          <ExternalLink />
          Preview
        </a>
      </Button>
    </div>
  );
}
