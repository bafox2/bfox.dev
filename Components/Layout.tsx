import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
