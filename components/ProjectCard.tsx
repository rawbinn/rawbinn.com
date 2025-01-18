import { Project } from '@/data/projectsData'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = (project: ProjectCardProps) => {
  const { title, description, href, imgSrc, techStacks, github } = project.project

  return (
    <div className="md max-w-[544px] p-4 md:w-1/2">
      <div
        className={`${
          imgSrc && 'h-full'
        } shadow-nextjs dark:shadow-nextjs-dark flex h-full flex-col overflow-hidden rounded-lg border border-transparent`}
      >
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center md:h-36 lg:h-60"
          width={1088}
          height={612}
        />

        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          {techStacks && (
            <div className="mb-3 flex flex-wrap space-x-1.5">
              <span className="shrink-0">Tech Stack: </span>
              {techStacks?.map((tool, index) => {
                return (
                  <span key={index} className="font-semibold text-gray-600 dark:text-gray-300">
                    {tool}
                    {index !== techStacks.length - 1 && ','}
                  </span>
                )
              })}
              .
            </div>
          )}
          <div className="flex justify-between">
            <Link
              className="text-primary text-base font-medium leading-6 hover:text-sky-600 dark:hover:text-sky-400"
              target="_blank"
              rel="noopener noreferrer"
              href={href || '#'}
            >
              Learn more →
            </Link>
            {github && (
              <div className="">
                <Link
                  className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 px-3 py-1 text-xs font-medium transition-colors hover:border-gray-600 dark:border-gray-700 dark:hover:border-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={github}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="h-3.5 w-3.5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 160a64 64 0 1 0-96.27 55.24c-2.29 29.08-20.08 37-75 48.42-17.76 3.68-35.93 7.45-52.71 13.93v-126.2a64 64 0 1 0-64 0v209.22a64 64 0 1 0 64.42.24c2.39-18 16-24.33 65.26-34.52 27.43-5.67 55.78-11.54 79.78-26.95 29-18.58 44.53-46.78 46.36-83.89A64 64 0 0 0 416 160zM160 64a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm0 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm192-256a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"></path>
                  </svg>
                  <span>Source</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
