import styles from "../styles/Project.module.css";
import Image from "next/image";
import BrandButton from "./BrandButton";
import TagTech from "./TagTech";
import TagStatus from "./TagStatus";
import { StaticImageData } from "next/image";

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
  imagePathURL,
}: {
  name: string;
  description: string;
  reason: string;
  builtWith: string;
  status: string;
  github: string;
  website: string;
  lessons: string;
  imagePathURL: StaticImageData;
}) {
  return (
    <div className={styles.project__container}>
      <div className={styles.project__left}>
        <div className={styles.project__image}>
          <Image
            src={imagePathURL}
            width={1060}
            height={600}
            blurDataURL={"true"}
            alt={`homepage of ${name}`}
          />
        </div>
        <TagTech text={builtWith} url={"https://google.com"} />
        <TagStatus text={status} color={"red"} />
      </div>
      <div className={styles.project__right}>
        <div className={styles.project__name}>
          <p className={styles.project__name__text}>{name}</p>
        </div>
        <div className={styles.project__description}>
          <p className={styles.project__description__text}>{description}</p>
        </div>
        <div className={styles.project__reason}>
          <p className={styles.project__reason__text}>{reason}</p>
        </div>
        <div className={styles.project__links}>
          <BrandButton
            url={website}
            arrow={true}
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
          <p className={styles.project__lessons__text}>{lessons}</p>
        </div>
      </div>
    </div>
  );
}
