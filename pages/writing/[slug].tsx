import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/legacy/image'
import MDXComponents from '../../Components/Mdx'
import { getPostDir, getFileBySlug } from '../../utils/mdx'
import { parseISO, format } from 'date-fns'
import styles from '../../styles/Writing.module.css'

const SinglePost = ({ mdxSource, frontMatter }) => {
  const { title, featured, date, readingTime, description } = frontMatter

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
          <div className={styles.postDescription}>{description}</div>
        </header>
        <div className={styles.postContent}>
          <h2 className="testtestets">Table of Contents</h2>
          {/* quick about the author div */}
          <div className={styles.postAbout}>
            <div className={styles.postAboutImageContainer}>
              <Image
                height={250}
                width={250}
                src={'/images/photo.jpg'}
                alt={'Profile Picture'}
                className={styles.postAboutImage}
              />
            </div>
            <h3>About Me</h3>
            <p className={styles.postAboutMe}>I'm a teacher/techie merging those worlds</p>
          </div>
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
