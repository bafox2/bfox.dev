//sell me, a picture, and a blurb
import Image from "next/image";
import photo from "../public/images/photo.jpg";
import styles from "../styles/Home.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.Image}>
        <Image
          src={photo}
          alt="Picture of the author"
          width={100}
          height={100}
          quality={100}
        />
      </div>
      <div className={styles.heroContent}>
        <h2 className={styles.heroContentTitle}>Hi, my name is Ryan</h2>
        <p className={styles.heroContentBlurb}>
          I am a compassionate teacher and developer. Educated at Virginia Tech in Business Information Technology, with a specialization in Decision Support Systems,
          then back at Tech for a Masters in Education. The past five years I have been teaching at Herndon High School. My classes were Special Education Personal Finance,
          English Language Learner Computer Skills, and Computer Science.
          Currently, I am open for work as a Front End Developer, or a Full Stack Developer. Take a look around, see some of my work, look at some of my influences,
          and get in touch with me if you have any questions.




        </p>
      </div>
    </div>
  );
}