import styles from "../styles/Project.module.css";
import Image from "next/image";
import BrandButton from "./BrandButton";
import TagTech from "./TagTech";
import TagStatus from "./TagStatus";
import svg from "../public/logos/art2.svg";
import { StaticImageData } from "next/image";
import ParallaxItem from "./ItemParallax";

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

  console.log(imagePath);
  const picGroup = imagePath.map((pic) => {
    return (
      <div className={styles.image}>
        <Image
          src={pic.url}
          width={pic.width}
          height={pic.height}
          alt={pic.alt}
        />
      </div>
    );
  });

  // topOffset?: number;
  // bottomOffset?: number;
  // range?: number;
  // damping?: number;
  // stiffness?: number;
  // mass?: number;

  return (
    <div className={styles.container}>
      <ParallaxItem range={3.4} className={styles.left}>
        <div className={styles.image}>{picGroup}</div>
        <TagStatus text={status.text} color={status.color} />
        <div className={styles.tech}>{techTags}</div>
      </ParallaxItem>
      <ParallaxItem className={styles.right}>
        <p className={styles.name__text}>{name}</p>
        <div className={styles.impaetus__container}>
          <div className={styles.reason}>
            <p
              className={`${styles.impaetus__header} ${styles.reason__header}`}
            >
              Problem
            </p>
            <p className={styles.reason__text}>{reason}</p>
          </div>
          <div className={styles.solution}>
            <p
              className={`${styles.impaetus__header} ${styles.solution__header}`}
            >
              Solution
            </p>
            <p className={styles.solution__text}>{description}</p>
          </div>
        </div>
        <div className={styles.links}>
          <BrandButton
            url={website}
            arrow={false}
            primary={true}
            text={"repo"}
          />
          <BrandButton
            url={github}
            arrow={false}
            primary={false}
            text={"live"}
          />
        </div>
        <div className={styles.lessons}>
          <div className={styles.lessons__pic}>
            <div className={styles.lessons__picHolder}>
              <Image src={svg} alt="arrow" width={45} height={45} />
            </div>
          </div>
          <p className={styles.lessons__text}>{lessons}</p>
        </div>
      </ParallaxItem>
    </div>
  );
}
