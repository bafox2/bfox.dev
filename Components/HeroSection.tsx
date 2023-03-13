//this component will be a reusable component that has a 100vh and some background image

import { ReactNode } from "react";
import styles from "../styles/HeroSection.module.css";

export default function HeroSection({
  children,
  background,
  headerSpace,
}: {
  children: ReactNode;
  background: string;
  headerSpace?: boolean;
}) {
  return (
    <div
      className={`${styles.heroSection} ${
        headerSpace ? styles.headerSpace : ""
      }`}
      style={{ backgroundImage: `background` }}
    >
      {children}
    </div>
  );
}
