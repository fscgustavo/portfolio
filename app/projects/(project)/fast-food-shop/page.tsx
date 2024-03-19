import { ProjectLinks } from '@/components/project-links';
import { ProjectTechStack } from '@/components/project-tech-stack';
import { projects } from '@/constants/projects';

export default function FastFoodShop() {
  return (
    <div className="grid gap-8">
      <h1 className="text-5xl font-semibold">Fast-Food Shop</h1>
      <div className="grid gap-6 text-muted-foreground">
        <div className="grid gap-2">
          <p>
            This project focuses on building a comprehensive suite of tools to
            empower store owners with real-time insights and efficient order
            management functionality.
          </p>
          <p>
            It is currently <strong>in progress.</strong>
          </p>
        </div>
        <ProjectLinks hrefs={projects.fastFoodShop.links} />
        <div className="grid gap-3">
          <h2 className="text-lg font-semibold text-accent-foreground">
            Centralized Dashboard
          </h2>
          <ul>
            <li>
              - Provides a clear overview of key metrics like monthly revenue,
              order volume, and cancellations.
            </li>
            <li>
              - Compares current month&apos;s performance with the previous
              month for trend analysis.
            </li>
            <li>
              - Visualizes product popularity and daily revenue fluctuations
              through interactive charts.
            </li>
          </ul>
        </div>
        <div className="grid gap-3">
          <h2 className="text-lg font-semibold text-accent-foreground">
            User-Friendly Interface
          </h2>
          <ul>
            <li>
              - Offers a light/dark mode toggle for customizable viewing
              preferences.
            </li>
            <li>
              - Employs secure email OTP (One-Time Password) for user login.
            </li>
            <li>- Includes a convenient sign-out option.</li>
          </ul>
        </div>
        <div className="grid gap-3">
          <h2 className="text-lg font-semibold text-accent-foreground">
            Streamlined Order Management
          </h2>
          <ul>
            <li>
              - Presents a central table showcasing all orders with pagination
              for easy navigation.
            </li>
            <li>
              - Implements filtering capabilities to quickly locate specific
              orders.
            </li>
            <li>
              - Enables direct order management actions from within the table
              itself.
            </li>
          </ul>
        </div>
        <div className="grid gap-3">
          <h2 className="text-lg font-semibold text-accent-foreground">
            Store Customization
          </h2>
          <p>
            Empowers store owners to edit their store name and description for
            accurate branding representation.
          </p>
        </div>
        <ProjectTechStack techStack={projects.fastFoodShop.techStack} />
      </div>
    </div>
  );
}
