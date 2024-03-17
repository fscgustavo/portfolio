export const projects = {
    cityWiki: {
        href: '/projects/city-wiki',
        links: {
            preview: 'https://city-wiki.vercel.app/',
            sourceCode: 'https://github.com/fscgustavo/city-wiki',
        },
        image: {
            src: '/preview-city-wiki.png',
            alt: 'Preview of the project City Wiki',
        },
        title: 'City Wiki',
        description: `This coding challenge is about a US city information website. I built responsive web pages, used an API for city data, and integrated AI to create engaging summaries followed by a Google Map's iframe. `,
        techStack: [
            'NextJS',
            'React',
            'TypeScript',
            'TailwindCSS',
            'ShadcnUI',
            'Zod',
            'ESLint',
        ],
    },
    fastFoodShop: {
        href: '/projects/fast-food-shop',
        image: {
            src: '/preview-fast-food-shop.png',
            alt: 'Preview of the project Fast Food Shop',
        },
        title: 'Fast Food Shop',
        description: '🚧 In progress...',
        links: {
            preview: 'https://fast-food-shop.vercel.app/dashboard',
            sourceCode: 'https://github.com/fscgustavo/fast-food-shop',
        },
        techStack: [
            'NextJS',
            'React',
            'TypeScript',
            'TailwindCSS',
            'SWR',
            'ShadcnUI',
            'Zod',
            'ESLint',
        ],
    },
};

export const projectList = Object.values(projects)

export type Project = typeof projectList[0]