'use client';

import { Project } from '@/constants/projects';
import { Badge } from './ui/badge';

type ProjectTechStackProps = {
  techStack: Project['techStack'];
};

export function ProjectTechStack({ techStack }: ProjectTechStackProps) {
  return (
    <div className="grid gap-3">
      <h2 className="text-lg font-semibold text-accent-foreground">
        Tech Stack
      </h2>
      <ul className="flex flex-wrap gap-4">
        {techStack.map((tech) => (
          <li className="inline" key={tech}>
            <Badge variant="secondary">{tech}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
