export default function Home() {
  return (
    <main>
      <h1 className="mb-12 text-5xl font-semibold">About me</h1>
      <div className="grid gap-6 text-muted-foreground">
        <p>
          Hello, I&apos;m Gustavo Fonseca, a developer based in São Paulo,
          Brazil, with 4+ years of experience in web development. I helped
          retailers boost online sales and improve customer experience through
          design systems, performance optimizations, and strategic SEO.
        </p>
        <p>Here are a few examples of my work:</p>
        <ul className="list-disc">
          <li>
            Rebuilt the B2C e-commerce at Tok&Stok, enhancing performance and
            reducing errors, leading to a more seamless customer journey.
          </li>
          <li>
            Contributed to the development of a shared design system at Grupo
            SBF for both Nike and Centauro e-commerce, streamlining workflow and
            boosting efficiency.
          </li>
          <li>
            Built key features for Centauro website, including order
            cancellation and return functionality, directly resulting in reduced
            customer service calls and increased satisfaction.
          </li>
          <li>
            Led the migration of some Centauro&apos;s pages from .NET to React,
            improving usability and performance.
          </li>
        </ul>
        <a
          href="https://www.linkedin.com/in/fonseca-gustavo"
          className="underline underline-offset-4 hover:text-accent-foreground"
          target="_blank"
          rel="noopener"
        >
          See more on LinkedIn
        </a>
        <p>
          I thrive in collaborative settings and always look for opportunities
          to learn and contribute. My goal is to be in an environment where both
          the company and its employees mutually invest in growth and
          excellence.
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/fonseca-gustavo"
            className="underline underline-offset-4 hover:text-accent-foreground"
            target="_blank"
            rel="noopener"
          >
            Reach out
          </a>{' '}
          if you are interested in collaborating or just to connect!
        </p>
      </div>
    </main>
  );
}
