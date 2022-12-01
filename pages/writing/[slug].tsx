import { MDXRemote } from 'next-mdx-remote'
import Image from "next/legacy/image";
import MDXComponents from '../../Components/Mdx'
import { getPostDir, getFileBySlug } from '../../utils/mdx'
import { parseISO, format } from 'date-fns'
import styles from '../../styles/Writing.module.css'

const SinglePost = ({ mdxSource, frontMatter }) => {
  const { title, featured, date, readingTime } = frontMatter

  return (
    <main className={styles.postMain}>
      <article className={styles.post}>
        <header className={styles.postHeader}>
          <h1>{title}</h1>
          <span className={styles.postMeta}>
            {format(parseISO(date), 'MMMM dd, yyyy')}
            <span> - </span> {readingTime.text}
          </span>
          <div className={styles.postImage}>
            {featured && <Image layout={'fill'} className={styles.image} src={featured} alt={title} />}
          </div>
        </header>
        <div className={styles.postContent}>
          <h2>Table of Contents</h2>
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
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getFileBySlug(slug)
  return {
    props: {
      ...post,
    },
  }
}
