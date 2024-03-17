import { ProjectLinks } from '@/components/project-links';
import { ProjectTechStack } from '@/components/project-tech-stack';
import { projects } from '@/constants/projects';

export default function FastFoodShop() {
  return (
    <div className="grid gap-8">
      <h1 className="text-5xl font-semibold">Fast-Food Shop</h1>
      <div className="grid gap-6 text-muted-foreground">
        <p>🚧 In progress...</p>
        <ProjectLinks hrefs={projects.fastFoodShop.links} />
        <ProjectTechStack techStack={projects.fastFoodShop.techStack} />
      </div>
    </div>
  );
}
