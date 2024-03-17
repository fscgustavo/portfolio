import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { projectList } from '@/constants/projects';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="space-y-14">
      <h1 className="text-5xl font-semibold">Projects</h1>
      <ul className="grid gap-3">
        {projectList.map((project) => (
          <li key={project.href}>
            <Link
              href={project.href}
              className="block rounded-lg bg-card  hover:bg-accent focus-visible:bg-accent"
            >
              <Card className="bg-transparent">
                <CardContent className="flex flex-col gap-5 sm:flex-row">
                  <Image
                    {...project.image}
                    className="self-start rounded-md object-contain sm:h-[auto] sm:w-[150px]"
                    alt={project.image.alt}
                    width="600"
                    height="450"
                  />
                  <div className="grid gap-2">
                    <CardTitle className="line-clamp-1 text-sm  md:text-base">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                    <ul className="flex flex-wrap gap-1">
                      {project.techStack.map((tag) => (
                        <li className="inline" key={tag}>
                          <Badge className="rounded bg-transparent">
                            {tag}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
