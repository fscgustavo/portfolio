import { ProjectLinks } from '@/components/project-links';
import { ProjectTechStack } from '@/components/project-tech-stack';
import { projects } from '@/constants/projects';

export default function CityWiki() {
  return (
    <div className="grid gap-8">
      <h1 className="text-5xl font-semibold">City Wiki</h1>
      <div className="grid gap-6 text-muted-foreground">
        <p>
          The project is about a challenge I received during a job application
          process and it is related to US cities.
        </p>
        <ProjectLinks hrefs={projects.cityWiki.links} />
        <div className="grid gap-3">
          <h2 className="text-lg font-semibold text-accent-foreground">
            The Challenge
          </h2>
          <ul>
            <li>- Design individual web pages for each city.</li>
            <li>
              - Fetch data like population, area, and attractions using an API.
            </li>
            <li>- Summarize the data using an AI tool.</li>
            <li>- Integrate the summaries into the web pages.</li>
          </ul>
        </div>
        <div className="grid gap-3">
          <h2 className="text-lg font-semibold text-accent-foreground">
            My Approach
          </h2>
          <ul>
            <li>
              - Design: I created a clean and responsive web page template to
              display city information.
            </li>
            <li>
              - Data Acquisition: I used a public API to retrieve relevant data
              for the US cities.
            </li>
            <li>
              - Data Processing: I integrated an AI tool to analyze the fetched
              data and generate summaries for each city.
            </li>
            <li>
              - Presentation: I incorporated the AI-generated summaries into the
              corresponding city web pages.
            </li>
          </ul>
        </div>
        <ProjectTechStack techStack={projects.cityWiki.techStack} />
        <div className="grid gap-3">
          <h2 className="text-lg font-semibold text-accent-foreground">
            Beyond the Basics
          </h2>
          <ul>
            <li>
              - I ensured the code was well-documented, followed best practices,
              and handled potential errors gracefully.
            </li>
            <li>
              - The web pages are accessible and responsive to different screen
              sizes.
            </li>
            <li>
              - All the results are cached by demand. Once a user sees a page
              never accessed before, he will see a loading fallback, but after
              the result will be cached and everyone will see instant results
              when the page is accessed.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
