import styles from "Util.module.css";
import Image from "next/image";
import arrow from "../public/logos/art2.svg";

//button that takes url string, primary bool, and arrow boolean as props

export default function BrandButton({
  url,
  primary,
  arrow,
}: {
  url: string;
  primary: boolean;
  arrow: boolean;
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
            <Image src={"/images/up.svg"} alt="arrow" />
          </div>
        ) : null}
      </button>
    </a>
  );
}
