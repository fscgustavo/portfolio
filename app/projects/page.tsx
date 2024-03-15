import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { projects } from './projects';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="space-y-14">
      <h1 className="text-5xl font-semibold">Projects</h1>
      <ul className="grid gap-3">
        {projects.map((project) => (
          <li key={project.preview}>
            <Link
              href={project.href}
              className="block rounded-lg bg-card  hover:bg-accent focus-visible:bg-accent"
            >
              <Card className="bg-transparent">
                <CardContent className="flex gap-5">
                  <Image
                    {...project.image}
                    className="self-start rounded-md object-contain"
                    alt={project.image.alt}
                    width="200"
                    height="150"
                  />
                  <div className="grid gap-2">
                    <CardTitle className="line-clamp-1 text-sm  md:text-base">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                    <ul className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
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
