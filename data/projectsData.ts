export interface Project {
  title: string
  description: string
  href?: string
  imgSrc: string
  techStacks?: string[]
  github?: string
}

const projectsData: Project[] = [
  {
    title: 'RAWBINN.COM Personal Blog',
    description: `RAWBINN.COM is a personal blog that focuses on sharing my knowledge and experiences. It was created using Next.js and Tailwind.`,
    imgSrc: '/static/images/projects/rawbinn_dot_com.png',
    href: 'https://rawbinn.com',
    github: 'https://github.com/rawbinn/rawbinn.com',
    techStacks: ['Next.js', 'Tailwind', 'Typescript', 'MDX'],
  },
  {
    title: 'CoinSense: Money Tracking App',
    description: `CoinSense is built using Next.js and Laravel. It is a simple and efficient
    money tracking app that allows you to monitor your day-to-day income, expenses,
    loans, and group expenditures. Additionally, it features a reminder system to help you
    stay on top of your finances.`,
    imgSrc: '/static/images/projects/coinsense.png',
    href: 'https://coinsense.rawbinn.com',
    techStacks: ['NextJs', 'Laravel', 'Bootstrap'],
  },
  {
    title: 'LaraPress: CMS using Laravel',
    description: `LaraPress is a content management system (CMS) built using Laravel. It has similar features as other CMS, developed to speed up the website development process having a user-friendly theme options, custom post types, page templates, custom plugins, advance media management, and more.`,
    imgSrc: '/static/images/projects/larapress.png',
    href: 'https://larapress.rawbinn.com',
    techStacks: ['Laravel', 'Blade', 'Bootstrap'],
  },
  {
    title: 'Express.js-TypeScript-MongoDB-Starter',
    description: `Starter boilerplate for Express.js, TypeScript, and MongoDB projects with essential tools like Joi, Mongoose, Prettier, Jest, and more.`,
    imgSrc: '/static/images/projects/expressjs-mongodb-typescript.jpg',
    href: 'https://github.com/rawbinn/Express.js-TypeScript-MongoDB-Starter',
    github: 'https://github.com/rawbinn/Express.js-TypeScript-MongoDB-Starter',
    techStacks: ['Express.js', 'TypeScript', 'MongoDB'],
  },
]

export default projectsData
