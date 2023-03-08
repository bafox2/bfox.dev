//this component will be a reusable component that has a 100vh and some background image

import { ReactNode } from "react";
import styles from "../styles/HeroSection.module.css";

export default function HeroSection({
  children,
  background,
}: {
  children: ReactNode;
  background: string;
}) {
  return (
    <div className={styles.heroSection} style={{ backgroundImage: background }}>
      {children}
    </div>
  );
}
