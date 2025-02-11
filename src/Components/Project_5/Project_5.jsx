import styles from "./Project_5.module.css";

import { useTranslation } from "react-i18next";

export default function Project_5() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.descriptionContainer}>
        <h4 className={styles.description}>{t("description")}</h4>
        <h5 className={styles.descriptionText}>{t("project_description_5")}</h5>
      </div>
      <div className={styles.technologiesContainer}>
        <h4 className={styles.technologiesText}>{t("technologies")}</h4>
        <div className={styles.technologiesImageContainer}>
          <div className="technology-item">
            <img
              className={styles.technologiesImage}
              src="/Technologies/html-5.png"
              alt="HTML5_logo "
            />
            <h6 className="technology-text">HTML 5</h6>
          </div>
          <div className="technology-item">
            <img
              className={styles.technologiesImage}
              src="/Technologies/css-3.png"
              alt="CSS3_lgo"
            />
            <h6 className="technology-text">CSS 3</h6>
          </div>
          <div className="technology-item">
            <img
              className={styles.technologiesImage}
              src="/Technologies/js.png"
              alt="Javascript_logo"
            />
            <h6 className="technology-text">Javascript</h6>
          </div>
          <div className="technology-item">
            <img
              className={styles.technologiesImage}
              src="/Technologies/physics.png"
              alt="React_logo"
            />
            <h6 className="technology-text">React.js</h6>
          </div>
          <div className="technology-item">
            <img
              className="technologies-image"
              src="/Technologies/9040309_filetype_json_icon.png"
              alt="json_image"
            />
            <h6 className="technology-text">JSON</h6>
          </div>
          <div className="technology-item">
            <img
              className="technologies-image"
              src="/Technologies/icons8-node-js-240.png"
              alt="node.js_image"
            />
            <h6 className="technology-text">Node.js</h6>
          </div>
          <div className="technology-item">
            <img
              className="technologies-image"
              src="/Technologies/icons8-no-sql-64.png"
              alt="nosql_image"
            />
            <h6 className="technology-text"> NO SQL</h6>
          </div>{" "}
          <div className="technology-item">
            <img
              className="technologies-image"
              src="/Technologies/icons8-mongo-db-100.png"
              alt="mongodb_image"
            />
            <h6 className="technology-text">Mongo DB</h6>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.projectImage}
          src="/Project_5/Screenshot 2025-02-08 1701111.png"
          alt="ProjectImage"
        />
        <img
          className={styles.projectImage}
          src="/Project_5/Screenshot 2025-02-08 170124.png"
          alt="ProjectImage_1"
        />
        <img
          className={styles.projectImage}
          src="/Project_5/Screenshot 2025-02-08 170156.png"
          alt="ProjectImage_3"
        />
        <img
          className={styles.projectImage}
          src="/Project_5/Screenshot 2025-02-08 170221.png"
          alt="ProjectImage_3"
        />
        <img
          className={styles.projectImage}
          src="/Project_5/Screenshot 2025-02-08 170745.png"
          alt="ProjectImage_3"
        />
        <img
          className={styles.projectImage}
          src="/Project_5/Screenshot 2025-02-08 170841.png"
          alt="ProjectImage_3"
        />
      </div>
      <div className={styles.linksContainer}>
        <a className={styles.links} href="">
          <i className="fa-solid fa-globe"></i>
          {t("website")}
        </a>
        <a
          className={styles.links}
          href="https://github.com/Artistass/CodeAcademy_egzaminas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
          {t("github")}
        </a>
      </div>
    </div>
  );
}
