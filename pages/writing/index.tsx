import Link from 'next/link'
import { parseISO, format } from 'date-fns'
import { getSortedPost } from '../../utils/mdx'
import styles from '../../styles/Writing.module.css'
import generateRssFeed from '../../utils/generateRSS'
type Post = {
  slug: string
  title: string
  description: string
  date: string
  readingTime: {
    text: string
  }
}

const Blog = ({ postsData }: any) => {
  return (
    <main className={styles.writingMain}>
      <h1 className={styles.postListHeader}>Writing</h1>
      <p className={styles.postListDescription}>
        Usually about the latest tech I have been digging into, sometimes about my feelings when they boil over.
      </p>
      <ul className={styles.postList}>
        {postsData.map((post: Post) => {
          const { slug, title, date, description } = post
          return (
            <li className={styles.post_item} key={slug}>
              <Link href={`/writing/${slug}`} className={styles.postLink}>
                <article className={styles.postEntry}>
                  <h2 className={styles.postTitle}>{title}</h2>
                  <div className={styles.postMeta}>
                    <span className={styles.postMeta}>{format(parseISO(date), 'MMMM dd, yyyy')}</span>{' '}
                  </div>
                  <p className={styles.postDescription}>{description}</p>
                </article>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export async function getStaticProps() {
  await generateRssFeed()
  const postsData = await getSortedPost()
  return {
    props: {
      postsData,
    },
  }
}

export default Blog
