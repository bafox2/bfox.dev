import styles from "../styles/Util.module.css";
import Image from "next/image";
import arrow from "../public/logos/art2.svg";

//button that takes url string, primary bool, and arrow boolean as props

export default function BrandButton({
  url,
  primary,
  arrow,
  text,
}: {
  url: string;
  primary: boolean;
  arrow: boolean;
  text: string;
}) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button
        className={
          primary ? styles.brandButton__primary : styles.brandButton__secondary
        }
      >
        {arrow ? (
          <div className={styles.brandButton__arrow}>
            <Image src={"/images/up.svg"} alt="arrow" width={100} height={50} />
          </div>
        ) : null}
        <p className={styles.brandButton__text}>{text}</p>
      </button>
    </a>
  );
}
