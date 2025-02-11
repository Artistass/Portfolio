import styles from "./Project_2.module.css";

import { useTranslation } from "react-i18next";

export default function Project_2() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.descriptionContainer}>
        <h4 className={styles.description}>{t("description")}</h4>
        <h5 className={styles.descriptionText}>{t("project_description_2")}</h5>
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
              className={styles.technologiesImage}
              src="/Technologies/icons8-bootstrap-480.png"
              alt="Bootstrap_logo"
            />
            <h6 className="technology-text">Bootstrap</h6>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.projectImage}
          src="/project_2/Project_2_showcase_Image_2.png"
          alt="ProjectImage"
        />
        <img
          className={styles.projectImage}
          src="/project_2/Project_2_showcase_Image_1.png"
          alt="ProjectImage_1"
        />
        <img
          className={styles.projectImage}
          src="/project_2/Project_2_showcase_Image_4.png"
          alt="ProjectImage_3"
        />
        <img
          className={styles.projectImage}
          src="/project_2/Project_2_showcase_Image_3.png"
          alt="ProjectImage_2"
        />
      </div>
      <div className={styles.linksContainer}>
        <a
          className={styles.links}
          href="https://lively-taiyaki-c25401.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-globe"></i>
          {t("website")}
        </a>
        <a
          className={styles.links}
          href="https://github.com/Artistass/DIA-Games.git"
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
