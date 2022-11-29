import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import MDXComponents from '../../Components/Mdx'
import { getPostDir, getFileBySlug } from '../../utils/mdx'
import { parseISO, format } from 'date-fns'
import styles from '../../styles/Writing.module.css'

const SinglePost = ({ mdxSource, frontMatter }) => {
  const { title, featured, date, readingTime } = frontMatter

  return (
    <main>
      <article className={styles.post}>
        <header>
          <h1>{title}</h1>
          <span className={styles.postMeta}>
            {format(parseISO(date), 'MMMM dd, yyyy')}
            <span> - </span> {readingTime.text}
          </span>
          {featured && <Image width={800} height={470} src={featured} alt={title} />}
        </header>
        <div>
          <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
        </div>
      </article>
    </main>
  )
}

export default SinglePost

export async function getStaticPaths() {
  const posts = await getPostDir()

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getFileBySlug(slug)
  return {
    props: {
      ...post,
    },
  }
}
