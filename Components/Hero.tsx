import Image from 'next/legacy/image'
import photo from '../public/images/photo.jpg'
import styles from '../styles/Home.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h2 className={styles.heroContentTitle}>Hi, my name is Ben</h2>
        <p className={styles.heroContentBlurb}>
          I am a compassionate teacher and developer. Educated at Virginia Tech in Business Information Technology, with
          a specialization in Decision Support Systems, then back at Tech for a Masters in Education. The past five
          years I have been teaching at Herndon High School. My classes were Special Education Personal Finance, English
          Language Learner Computer Skills, and Computer Science.
        </p>
        <p className={styles.heroContentBlurb}>
          My slight preferance is back end work, but I love anything customer facing. Most of my experience is in the
          React framework, but I am always looking to learn new things. For design, I prefer a minimalistic, clean
          approach, but pride myself on being able to recreate anything. Take a look around, see some of my work, look
          at some of my influences, and get in touch with me if you have any questions.
        </p>
      </div>
    </div>
  )
}
