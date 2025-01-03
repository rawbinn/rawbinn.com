import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import 'css/custom-icon.css'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github, intro } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            <p>{intro}</p>
            <section className="mt-sm-0 mt-5">
              <div>
                <h5 className="mb-2 text-2xl font-bold">Languages and Databases</h5>
                <ul className="dev-icons">
                  <li className="software-skill" key="php">
                    <i className="icon icon-php"></i>
                    <p>php</p>
                  </li>
                  <li className="software-skill" key="html-5">
                    <i className="icon icon-html5"></i>
                    <p>html-5</p>
                  </li>
                  <li className="software-skill" key="css3">
                    <i className="icon icon-css3-alt"></i>
                    <p>css3</p>
                  </li>
                  <li className="software-skill" key="sass">
                    <i className="icon icon-sass"></i>
                    <p>sass</p>
                  </li>
                  <li className="software-skill" key="JavaScript">
                    <i className="icon icon-js"></i>
                    <p>JavaScript</p>
                  </li>
                  <li className="software-skill" key="sql-database-solid">
                    <i className="icon icon-database-solid"></i>
                    <p>sql-database</p>
                  </li>
                  <li className="software-skill" key="aws">
                    <i className="icon icon-aws"></i>
                    <p>aws</p>
                  </li>
                  <li className="software-skill" key="firebase">
                    <i className="icon icon-fire-flame-curved-solid"></i>
                    <p>firebase</p>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-2xl font-bold">Frameworks</h5>
                <ul className="dev-icons">
                  <li className="software-skill" key="laravel">
                    <i className="icon icon-laravel"></i>
                    <p>laravel</p>
                  </li>
                  <li className="software-skill" key="wordpress">
                    <i className="icon icon-wordpress"></i>
                    <p>wordpress</p>
                  </li>
                  <li className="software-skill" key="vuejs">
                    <i className="icon icon-vuejs"></i>
                    <p>vuejs</p>
                  </li>
                  <li className="software-skill" key="reactjs">
                    <i className="icon icon-react"></i>
                    <p>reactjs</p>
                  </li>
                  <li className="software-skill" key="nodejs">
                    <i className="icon icon-node"></i>
                    <p>nodejs</p>
                  </li>
                  <li className="software-skill" key="bootstrap">
                    <i className="icon icon-bootstrap"></i>
                    <p>bootstrap</p>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-2xl font-bold">Tools</h5>
                <ul className="dev-icons">
                  <li className="software-skill" key="git">
                    <i className="icon icon-git"></i>
                    <p>git</p>
                  </li>
                  <li className="software-skill" key="docker">
                    <i className="icon icon-docker"></i>
                    <p>docker</p>
                  </li>
                  <li className="software-skill" key="cloudflare">
                    <i className="icon icon-cloudflare"></i>
                    <p>cloudflare</p>
                  </li>
                  <li className="software-skill" key="digitalocean">
                    <i className="icon icon-digital-ocean"></i>
                    <p>digitalocean</p>
                  </li>
                  <li className="software-skill" key="jira">
                    <i className="icon icon-jira"></i>
                    <p>jira</p>
                  </li>
                  <li className="software-skill" key="linux">
                    <i className="icon icon-linux"></i>
                    <p>linux</p>
                  </li>
                </ul>
              </div>
            </section>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
