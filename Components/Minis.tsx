import styles from "../styles/Project.module.css";
import minis from "../minis";
import Project from "../public/assets/Project";

export default function Minis() {
  //return a list of all the minis like how Projects.tsx returns a list of all the projects

  return (
    <div className={styles.container}>
      <div className={styles.miniList}>
        {minis.map((mini) => (
          <Project
            key={mini.name}
            name={mini.name}
            description={mini.description}
            reason={mini.reason}
            builtWith={mini.builtWith}
            status={mini.status}
            github={mini.github}
            website={mini.website}
            lessons={mini.lessons}
            imagePath={mini.imagePath}
          />
        ))}
      </div>
    </div>
  );
}
