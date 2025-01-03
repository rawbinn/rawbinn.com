import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from 'next/image'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <section className="about py-8 sm:py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
            <div className="col-span-1 items-center sm:flex lg:col-span-7">
              <div className="about-text text-center sm:text-left">
                <h1 className="animated animated-text mb-4 text-center text-4xl font-extrabold sm:text-left">
                  <span className="mr-0 sm:mr-2">Hey folks, I'm</span>
                  <div className="animated-info">
                    <span className="animated-item text-primary-500">{siteMetadata.author}</span>
                    <span className="animated-item text-primary-500">{siteMetadata.jobTitle}</span>
                  </div>
                </h1>
                <p>{siteMetadata.intro}</p>
                <div className="custom-btn-group mt-6">
                  <Link
                    href="mailto:rawbinnn@gmail.com"
                    className="mb-2 me-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-lg font-bold text-gray-900 hover:bg-gray-100 hover:text-primary-500 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    <i className="uil uil-file-alt"></i> Ping Me
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden lg:col-span-5 lg:block">
              <div className="about-image d-none d-sm-block">
                <Image
                  src="/static/images/programmer.png"
                  className="img-fluid"
                  alt="Software Engineer"
                  width={500}
                  height={446}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 sm:mt-12 sm:py-12">
        <div className="space-y-2 pb-8 pt-6 text-center  sm:text-left md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Recent Posts
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-lg sm:leading-7">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="lg:grid lg:grid-cols-4">
                    <div className="hidden lg:col-span-1 lg:block">
                      {post.thumbnail ? (
                        <Link aria-label={`View article: ${title}`} href="/blog/${slug}">
                          <Image
                            src={post.thumbnail}
                            width={250}
                            height={350}
                            alt="avatar"
                            className="rounded-md"
                          />
                        </Link>
                      ) : (
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                          </dd>
                        </dl>
                      )}
                    </div>
                    <div className="space-y-5 lg:col-span-3 lg:ml-3 xl:ml-0">
                      <div className="space-y-3 sm:space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          {post.thumbnail && (
                            <dl>
                              <dt className="sr-only">Published on</dt>
                              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                              </dd>
                            </dl>
                          )}
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blogs"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
