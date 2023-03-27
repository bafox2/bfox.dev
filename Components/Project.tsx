import styles from "../styles/Project.module.css";
import Image from "next/image";
import BrandButton from "./BrandButton";
import TagTech from "./TagTech";
import TagStatus from "./TagStatus";
import leaf from "../public/assets/leaf.svg";
import exclaimation from "../public/assets/exclaimation.svg";
import light from "../public/assets/light.svg";
import { StaticImageData } from "next/image";
import ParallaxItem from "./ItemParallax";
import { Carousel } from "react-responsive-carousel";

//a function that returns a project component with a name, description, Built With, a status, links to github/live, lessions, and an image

//structure
//image, tech, status on left
//name description reason on right
//link buttons below description and reason
//lessons learned below links

export default function Project({
  name,
  description,
  reason,
  builtWith,
  status,
  github,
  website,
  lessons,
  imagePath,
}: {
  name: string;
  description: string;
  reason: string;
  builtWith: {
    name: string;
    link: string;
  }[];
  status: {
    text: string;
    color: string;
  };
  github: string;
  website: string;
  lessons: string;
  imagePath: {
    url: StaticImageData;
    width: number;
    height: number;
    alt: string;
  }[];
}) {
  const techTags = builtWith.map((tech) => {
    return <TagTech name={tech.name} link={tech.link} />;
  });

  const num = (min: number, max: number) => {
    return Math.random() * (max - min + 1) + min;
  };

  const picCounter = () => {
    //write a function that will return the right css module styles for the number of pictures in the array
    //if there is only one picture, return styles.one
    const num = imagePath.length;
    if (num === 1) {
      return `${styles.pics__container} ${styles.onePic}`;
    } else if (num === 2) {
      return `${styles.pics__container} ${styles.twoPic}`;
    } else if (num === 3) {
      return `${styles.pics__container} ${styles.threePic}`;
    } else if (num === 4) {
      return `${styles.pics__container} ${styles.fourPic}`;
    } else if (num === 5) {
      return `${styles.pics__container} ${styles.fivePic}`;
    }
    return;
  };

  const picClassName = (i: number) => {
    if (i === 0) {
      return `${styles.pic} ${styles.pic1}`;
    }
    if (i === 1) {
      return `${styles.pic} ${styles.pic2}`;
    }
    if (i === 2) {
      return `${styles.pic} ${styles.pic3}`;
    }
    if (i === 3) {
      return `${styles.pic} ${styles.pic4}`;
    }
    if (i === 4) {
      return `${styles.pic} ${styles.pic5}`;
    }
    return;
  };

  const picGroup = imagePath.map((pic, i) => {
    //return an image component with a src, width, height, alt, and className that includes the index of the image in the array
    return (
      <Image
        src={pic.url}
        sizes="(max-width: 1440px) 500px,
              (max-width: 786px) 200px,
              100px"
        quality={100}
        alt={pic.alt}
        className={`${picClassName(i)}`}
      />
    );
  });

  const imageCarousel = (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      dynamicHeight={true}
      emulateTouch={true}
      autoPlay={true}
      className={styles.carousel}
    >
      {imagePath.map((pic, i) => {
        return (
          <Image
            src={pic.url}
            sizes={`(max-width: 1440px) ${pic.width}px,
              (max-width: 786px) ${pic.width / 2}px,
              ${pic.width / 3}px}`}
            quality={100}
            alt={pic.alt}
            // className={`${picClassName(i)}`}
          />
        );
      })}
    </Carousel>
  );

  return (
    <div className={styles.container}>
      <ParallaxItem range={num(0, 3)} className={styles.left}>
        {imagePath.length !== 1 && imageCarousel}
        {imagePath.length === 1 && (
          <div className={picCounter()}>{picGroup}</div>
        )}
        <TagStatus text={status.text} color={status.color} />
        <div className={styles.tech}>{techTags}</div>
      </ParallaxItem>
      <ParallaxItem range={num(1, 3)} className={styles.right}>
        <p className={styles.name__text}>{name}</p>
        <div className={styles.probSol}>
          <div className={`${styles.lessons} ${styles.red}`}>
            <div className={styles.lessons__pic}>
              <div className={styles.lessons__picHolder}>
                <Image src={exclaimation} alt="arrow" width={45} height={45} />
              </div>
              <p className={styles.probSol__header}>Problem</p>
            </div>
            <p className={styles.lessons__text}>{reason}</p>
          </div>
          <div className={`${styles.lessons} ${styles.green}`}>
            <div className={styles.lessons__pic}>
              <div className={styles.lessons__picHolder}>
                <Image src={light} alt="arrow" width={45} height={45} />
              </div>
              <p className={styles.probSol__header}>Solution</p>
            </div>
            <p className={styles.lessons__text}>{description}</p>
          </div>
        </div>

        <div className={styles.links}>
          <BrandButton
            url={website}
            arrow={false}
            primary={true}
            text={"Live"}
          />
          <BrandButton
            url={github}
            arrow={false}
            primary={false}
            text={"Repo"}
          />
        </div>
        <div className={styles.lessons}>
          <div className={styles.lessons__pic}>
            <div className={styles.lessons__picHolder}>
              <Image src={leaf} alt="arrow" width={37} height={37} />
            </div>
            <p className={styles.probSol__header}>Lessons</p>
          </div>
          <p className={styles.lessons__text}>{lessons}</p>
        </div>
      </ParallaxItem>
    </div>
  );
}
