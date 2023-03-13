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
  };
}) {
  const techTags = builtWith.map((tech) => {
    return <TagTech name={tech.name} link={tech.link} />;
  });

  // topOffset?: number;
  // bottomOffset?: number;
  // range?: number;
  // damping?: number;
  // stiffness?: number;
  // mass?: number;

  return (
    <div className={styles.project__container}>
      <ParallaxItem className={styles.project__left}>
        <div className={styles.project__image}>
          <Image
            src={imagePath.url}
            width={imagePath.width}
            height={imagePath.height}
            alt={imagePath.alt}
          />
        </div>
        <TagStatus text={status.text} color={status.color} />
        <div className={styles.project__tech}>{techTags}</div>
      </ParallaxItem>
      <ParallaxItem className={styles.project__right}>
        <div className={styles.project__basics}>
          <p className={styles.project__name__text}>{name}</p>
          <p className={styles.project__description__text}>{description}</p>
        </div>
        <div className={styles.project__reason}>
          <p className={styles.project__reason__text}>{reason}</p>
        </div>
        <div className={styles.project__links}>
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
        <div className={styles.project__lessons}>
          <div className={styles.project__lessons__pic}>
            <div className={styles.project__lessons__picHolder}>
              <Image src={svg} alt="arrow" width={45} height={45} />
            </div>
          </div>
          <p className={styles.project__lessons__text}>{lessons}</p>
        </div>
      </ParallaxItem>
    </div>
  );
}
