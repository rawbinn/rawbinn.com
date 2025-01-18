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
  }
]

export default projectsData
