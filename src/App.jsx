import "./App.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./Components/LanguageSelect/LanguageSelect";
import ThemeSelect from "./Components/ThemeSelect/ThemeSelect";
import { supportedLanguages } from "../i18n";
import { supportedThemes } from "../colorThemes";
import Project_1 from "./Components/Project_1/Project_1";
import Project_2 from "./Components/Project_2/Project_2";
import Project_3 from "./Components/Project_3/Project_3";
import Project_4 from "./Components/Project_4/Project_4";
import Project_5 from "./Components/Project_5/Project_5";

function App() {
  const { i18n, t } = useTranslation();
  const workTextRef = useRef(null);
  const aboutTextRef = useRef(null);
  const workButtonRef = useRef(null);
  const workButtonRef1 = useRef(null);
  const workButtonRef2 = useRef(null);
  const workButtonRef3 = useRef(null);
  const workButtonRef4 = useRef(null);

  const [isProject_1Open, setIsProject_1Open] = useState(false);
  const [isProject_2Open, setIsProject_2Open] = useState(false);
  const [isProject_3Open, setIsProject_3Open] = useState(false);
  const [isProject_4Open, setIsProject_4Open] = useState(false);
  const [isProject_5Open, setIsProject_5Open] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const cvLinks = {
    EN: "/CV/EN_Antanas_Varanauskas_Resume.pdf",
    DE: "/CV/DE_Antanas_Varanauskas_Bewerbung.pdf",
    LT: "/CV/LT_Antanas.Varanauskas_Gyvenimo_Aprasymas.pdf"
  };
  // CV Download
  const handleDownload = () => {
    const fileUrl = cvLinks[selectedLanguage];
  
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.substring(fileUrl.lastIndexOf("/") + 1); // Extracts original file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle language change with page reload
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    const language = savedLanguage || "en"; // Set 'en' as default language
    const isSupported = Object.keys(supportedLanguages).includes(language);
    const selectedLanguage = isSupported ? language : "en";

    i18n.changeLanguage(selectedLanguage);

    const handleLanguageChange = () => {
      window.location.reload();
    };
    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  // Handle theme change with page reload
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "default";
    const theme = supportedThemes[currentTheme];

    // Apply the theme
    document.documentElement.style.setProperty(
      "--background-color",
      theme.backgroundColor
    );
    document.documentElement.style.setProperty("--text-color", theme.textColor);
    document.documentElement.style.setProperty(
      "--lighter-text-color",
      theme.lighterTextColor
    );
    document.documentElement.style.setProperty(
      "--darker-text-color",
      theme.darkerTextColor
    );
  }, []);

  // Handle theme change when selecting a new theme
  const handleThemeChange = (theme) => {
    // Update theme in localStorage
    localStorage.setItem("theme", theme);

    // Reload page after setting the new theme
    window.location.reload();
  };
  useEffect(() => {
    const cursorDot = document.getElementById("cursor-dot");

    function handleMouseMove(e) {
      cursorDot.style.left = `${e.pageX}px`;
      cursorDot.style.top = `${e.pageY}px`;
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Intersection Observer logic
  useLayoutEffect(() => {
    const checkElements = () => {
      const workText = workTextRef.current;
      const aboutText = aboutTextRef.current;
      const workButton = workButtonRef.current;
      const workButton1 = workButtonRef1.current;
      const workButton2 = workButtonRef2.current;
      const workButton3 = workButtonRef3.current;
      const workButton4 = workButtonRef4.current;

      if (
        !workText ||
        !aboutText ||
        !workButton ||
        !workButton1 ||
        !workButton2 ||
        !workButton3 ||
        !workButton4
      ) {
        return false;
      }
      return true;
    };

    const setupObserver = () => {
      const workText = workTextRef.current;
      const aboutText = aboutTextRef.current;
      const workButton = workButtonRef.current;
      const workButton1 = workButtonRef1.current;
      const workButton2 = workButtonRef2.current;
      const workButton3 = workButtonRef3.current;
      const workButton4 = workButtonRef4.current;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target === workText && entry.isIntersecting) {
              workText.classList.add("show");
            }
            if (entry.target === aboutText && entry.isIntersecting) {
              aboutText.classList.add("show");
            }
            if (entry.target === workButton && entry.isIntersecting) {
              workButton.classList.add("show");
            }
            if (entry.target === workButton1 && entry.isIntersecting) {
              workButton1.classList.add("show");
            }
            if (entry.target === workButton2 && entry.isIntersecting) {
              workButton2.classList.add("show");
            }
            if (entry.target === workButton3 && entry.isIntersecting) {
              workButton3.classList.add("show");
            }
            if (entry.target === workButton4 && entry.isIntersecting) {
              workButton4.classList.add("show");
            }
          });
        },
        {
          threshold: 0.4, // Trigger when 40% of the element is visible
        }
      );

      observer.observe(workText);
      observer.observe(aboutText);
      observer.observe(workButton);
      observer.observe(workButton1);
      observer.observe(workButton2);
      observer.observe(workButton3);
      observer.observe(workButton4);

      return () => {
        observer.disconnect();
      };
    };

    if (checkElements()) {
      setupObserver();
    } else {
      // Retry after a short delay
      const timeoutId = setTimeout(() => {
        if (checkElements()) {
          setupObserver();
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, []);
  return (
    <>
      <div className="cursor-dot" id="cursor-dot"></div>
      {/* Header top */}
      <header id="top" className="header-container">
        <div className="header-top">
          <button className="theme--language-select-button">
            <ThemeSelect handleThemeChange={handleThemeChange} />
          </button>
          <button className="theme--language-select-button">
            <LanguageSelect />
          </button>
        </div>
        <hr className="hr-line" />
        {/* Header bottom */}
        <div className="header-bottom">
          <div className="fade-in-text">
            <h4 className="header-about-text">{t("header_about")}</h4>
            <div className="link-container">
              <a href="#work" className="link">
                {t("work")}
              </a>
              <a href="#about" className="link">
                {t("about")}
              </a>
              <a href="#contact" className="link">
                {t("contact")}
              </a>
            </div>
          </div>
          <div>
            <h1 className="reveal-name-text ">
              Antanas <span className="copyright-symbol">©</span>
              <br />
              Varanauskas
            </h1>
          </div>
        </div>
      </header>
      {/* Main */}
      <main>
        {/* Section 1 */}
        <section className="section-1-container">
          <div className="section-1-text-image-container">
            <img
              src="/Profile_Pictures/DSC_0006.JPG"
              alt="image"
              className="section-1-image"
            />
            <h3 className="section-1-text">{t("section_1_text")}</h3>
          </div>
          <i className="fa-solid fa-arrow-down-long"></i>
        </section>
        {/* Work */}
        {/* Section 2 */}
        <section className="section-2-container" id="work">
          <div className="section-2-work-header">
            <h5 className="section-2-recent-projects-text">
              {t("recent_projects")}
            </h5>
            <h2 className="section-2-work-text" ref={workTextRef}>
              {t("work")}
            </h2>
          </div>
          <hr className="hr-line" />

          {/* Project 1 */}
          <button
            className="section-2-project-button"
            ref={workButtonRef}
            onClick={() => setIsProject_1Open((prev) => !prev)}
          >
            {/* Button content */}
            <h5 className="section-2-number-of-project">01</h5>
            <div>
              <h4 className="section-2-project-name">Pokédex</h4>
              <h5 className="section-2-project-description">
                {t("category_1")}
              </h5>
            </div>
            <h5 className="section-2-project-year">2024</h5>
            <img
              className="section-2-project-image"
              src="/project_1/Project_1_showcase_Image.png"
              alt="Project image"
            />
            <div className="section-2-view-case--arrow-down-container">
              <h4 className="section-2-project-view-case">
                <span>
                  {isProject_1Open ? t("close_case") : t("view_case")}
                </span>
              </h4>
              <i
                className={`fa-solid fa-arrow-down ${
                  isProject_1Open ? "rotate" : ""
                }`}
              ></i>
            </div>
          </button>
          {/* Smoothly reveal Project_1 */}
          <div className={`projectContainer ${isProject_1Open ? "open" : ""}`}>
            <Project_1 />
          </div>

          <hr className="hr-line" />

          <button
            className="section-2-project-button"
            ref={workButtonRef1}
            onClick={() => setIsProject_2Open((prev) => !prev)}
          >
            {/* Button content */}
            <h5 className="section-2-number-of-project">02</h5>
            <div>
              <h4 className="section-2-project-name">DIA Games</h4>
              <h5 className="section-2-project-description">
                {t("category_2")}
              </h5>
            </div>
            <h5 className="section-2-project-year">2024</h5>
            <img
              className="section-2-project-image"
              src="/project_2/Project_2_showcase_Image_2.png"
              alt="Project image"
            />
            <div className="section-2-view-case--arrow-down-container">
              <h4 className="section-2-project-view-case">
                <span>
                  {isProject_2Open ? t("close_case") : t("view_case")}
                </span>
              </h4>
              <i
                className={`fa-solid fa-arrow-down ${
                  isProject_2Open ? "rotate" : ""
                }`}
              ></i>
            </div>
          </button>
          {/* Smoothly reveal Project_2 */}
          <div className={`projectContainer ${isProject_2Open ? "open" : ""}`}>
            <Project_2 />
          </div>
          <hr className="hr-line" />

          <button
            className="section-2-project-button"
            ref={workButtonRef2}
            onClick={() => setIsProject_3Open((prev) => !prev)}
          >
            {/* Button content */}
            <h5 className="section-2-number-of-project">03</h5>
            <div>
              <h4 className="section-2-project-name">Hiking Tours</h4>
              <h5 className="section-2-project-description">
                {t("category_3")}
              </h5>
            </div>
            <h5 className="section-2-project-year">2025</h5>
            <img
              className="section-2-project-image"
              src="/project_3/Screenshot 2025-02-06 202207.png"
              alt="Project image"
            />
            <div className="section-2-view-case--arrow-down-container">
              <h4 className="section-2-project-view-case">
                <span>
                  {isProject_3Open ? t("close_case") : t("view_case")}
                </span>
              </h4>
              <i
                className={`fa-solid fa-arrow-down ${
                  isProject_3Open ? "rotate" : ""
                }`}
              ></i>
            </div>
          </button>

          <div className={`projectContainer ${isProject_3Open ? "open" : ""}`}>
            <Project_3 />
          </div>

          <hr className="hr-line" />

          <button
            className="section-2-project-button"
            ref={workButtonRef3}
            onClick={() => setIsProject_4Open((prev) => !prev)}
          >
            {/* Button content */}
            <h5 className="section-2-number-of-project">04</h5>
            <div>
              <h4 className="section-2-project-name">NFL Landing</h4>
              <h5 className="section-2-project-description">
                {t("category_4")}
              </h5>
            </div>
            <h5 className="section-2-project-year">2025</h5>
            <img
              className="section-2-project-image"
              src="/project_4/Screenshot 2025-02-08 140429.png"
              alt="Project image"
            />
            <div className="section-2-view-case--arrow-down-container">
              <h4 className="section-2-project-view-case">
                <span>
                  {isProject_4Open ? t("close_case") : t("view_case")}
                </span>
              </h4>
              <i
                className={`fa-solid fa-arrow-down ${
                  isProject_4Open ? "rotate" : ""
                }`}
              ></i>
            </div>
          </button>
          <div className={`projectContainer ${isProject_4Open ? "open" : ""}`}>
            <Project_4 />
          </div>
          <hr className="hr-line" />

          <button
            className="section-2-project-button"
            ref={workButtonRef4}
            onClick={() => setIsProject_5Open((prev) => !prev)}
          >
            {/* Button content */}
            <h5 className="section-2-number-of-project">05</h5>
            <div>
              <h4 className="section-2-project-name">
                Supreme Drive (COMING SOON)
              </h4>
              <h5 className="section-2-project-description">
                {t("category_5")}
              </h5>
            </div>
            <h5 className="section-2-project-year">2025</h5>
            <img
              className="section-2-project-image"
              src="/Project_5/Screenshot 2025-02-08 170111.png"
              alt="Project image"
            />
            <div className="section-2-view-case--arrow-down-container">
              <h4 className="section-2-project-view-case">
                <span>
                  {isProject_5Open ? t("close_case") : t("view_case")}
                </span>
              </h4>
              <i
                className={`fa-solid fa-arrow-down ${
                  isProject_5Open ? "rotate" : ""
                }`}
              ></i>
            </div>
          </button>
          <div className={`projectContainer ${isProject_5Open ? "open" : ""}`}>
            <Project_5 />
          </div>
          <hr className="hr-line" />
        </section>
        {/* About */}
        {/* Section 3 */}
        <section className="section-3-container" id="about">
          <h2 className="section-3-about-text" ref={aboutTextRef}>
            {t("about")}
          </h2>
          <hr className="hr-line" />
          <div className="section-3-image--info-text-container">
            <h5 className="section-3-me-text">{t("me")}</h5>
            <div>
              <img
                className="section-3-about-image"
                src="/Profile_Pictures/DSC_0569_new.JPG"
                alt="image"
              />
              <h5 className="section-3-under-image-name-text">{t("name")}</h5>
              <h5 className="section-3-under-image-description-text">
                {t("who_am_i")}
              </h5>
            </div>
            <div className="what-i-do--work-description-container">
              <h5 className="section-3-what-i-do-text">{t("what_i_do")}</h5>
              <h4 className="section-3-about-work-description">
                {t("work_description")}
                <div className="section-3-skill-base-container">
                  <div className="section-3-skill-base-item">
                    <h4 className="section-3-skill-base-label">
                      {t("skill_base_label_1")}
                    </h4>
                    <h5 className="section-3-skill-base-content">
                      {t("skill_base_content_1")}
                    </h5>
                  </div>

                  <div className="section-3-skill-base-item">
                    <h4 className="section-3-skill-base-label">
                      {t("skill_base_label_2")}
                    </h4>
                    <h5 className="section-3-skill-base-content">
                      {t("skill_base_content_2")}
                    </h5>
                  </div>

                  <div className="section-3-skill-base-item">
                    <h4 className="section-3-skill-base-label">
                      {t("skill_base_label_3")}
                    </h4>
                    <h5 className="section-3-skill-base-content">
                      {t("skill_base_content_3")}
                    </h5>
                  </div>

                  <div className="section-3-skill-base-item">
                    <h4 className="section-3-skill-base-label">
                      {t("skill_base_label_4")}
                    </h4>
                    <h5 className="section-3-skill-base-content">
                      {t("skill_base_content_4")}
                    </h5>
                  </div>

                  <div className="section-3-skill-base-item">
                    <h4 className="section-3-skill-base-label">
                      {t("skill_base_label_5")}
                    </h4>
                    <h5 className="section-3-skill-base-content">
                      {t("skill_base_content_5")}
                    </h5>
                  </div>
                </div>
              </h4>
            </div>
          </div>
          <div className="technologies-container">
            <h3 className="technologies-text">{t("working_technologies")}</h3>
            <div className="technologies-image-container">
              <div className="technology-item">
                <img
                  className="technologies-image"
                  src="/Technologies/html-5.png"
                  alt="html5_image"
                />
                <h6 className="technology-text">HTML 5</h6>
              </div>
              <div className="technology-item">
                <img
                  className="technologies-image"
                  src="/Technologies/css-3.png"
                  alt="css3_image"
                />
                <h6 className="technology-text">CSS 3</h6>
              </div>
              <div className="technology-item">
                <img
                  className="technologies-image"
                  src="/Technologies/js.png"
                  alt="javascript_image"
                />
                <div className="technology-text">Javascript</div>
              </div>
              <div className="technology-item">
                <img
                  className="technologies-image"
                  src="/Technologies/physics.png"
                  alt="react.js_image"
                />
                <h6 className="technology-text">React.js</h6>
              </div>
              <div className="technology-item">
                <img
                  className="technologies-image"
                  src="/Technologies/sass.png"
                  alt="sass_image"
                />
                <h6 className="technology-text">SASS</h6>
              </div>
              <div className="technology-item">
                <img
                  className="technologies-image"
                  src="/Technologies/icons8-bootstrap-480.png"
                  alt="bootstrap_image"
                />
                <h6 className="technology-text">Bootstrap</h6>
              </div>
              <div className="technology-item">
                <img
                  className="technologies-image"
                  src="/Technologies/icons8-material-ui-480.png"
                  alt="bootstrap_image"
                />
                <h6 className="technology-text">Material-UI</h6>
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
                  src="/Technologies/icons8-git-480.png"
                  alt="git_image"
                />
                <h6 className="technology-text">Git</h6>
              </div>
              <div className="technology-item">
                <img
                  className="technologies-image"
                  src="/Technologies/4745725_code_development_github_open-source_programming_icon.png"
                  alt="github_image"
                />
                <h6 className="technology-text">Github</h6>
              </div>
              <div className="technology-item">
                <img
                  className="technologies-image"
                  src="/Technologies/315017_document_sql_file_icon.png"
                  alt="sql_image"
                />
                <h6 className="technology-text">SQL</h6>
              </div>
              <div className="technology-item">
                <img
                  className="technologies-image"
                  src="/Technologies/icons8-no-sql-64.png"
                  alt="nosql_image"
                />
                <h6 className="technology-text"> NO SQL</h6>
              </div>
              <div className="technology-item">
                <img
                  className="technologies-image"
                  src="/Technologies/icons8-mongo-db-100.png"
                  alt="mongodb_image"
                />
                <h6 className="technology-text">Mongo DB</h6>
              </div>
              <div className="technology-item">
                <img
                  className="technologies-image"
                  src="/Technologies/icons8-dbeaver-512.png"
                  alt="dbeaver_image"
                />
                <h6 className="technology-text">Dbeaver</h6>
              </div>
            </div>
          </div>
          <hr className="hr-line" />
        </section>
        {/* Contacts */}
        {/* Section 4 */}
        <section className="section-4-container" id="contact">
          <div className="section-4-year-and-cv--about-text-container">
           
          <div className="section-4-cv-container">
            <div>
      <h2 className="section-4-cv-title">{t("download_cv_tile")}</h2>
      <p className="section-4-cv-text">{t("download_cv_text")}</p>

      {/* Language selection dropdown */}
      <select
        className="section-4-cv-select"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        <option value="EN">{t("download_cv_EN")}</option>
        <option value="LT">{t("download_cv_LT")}</option>
        <option value="DE">{t("download_cv_DE")}</option>
      </select>

      {/* Download button */}
      <button 
      className="section-4-cv-button"
      onClick={handleDownload}
      >
        {t("download_cv")}
      </button>
            </div>
            
      <h5 className="section-4-year-text">@2024</h5>
    </div>

            <div className="section-4-about-text--email-link">
              <h3 className="section-4-about-text">{t("contact_text")}</h3>
              <div className="section-4-email-link--arrow-right-container">
                <a
                  className="section-4-email-link"
                  href="mailto:antanas.varanauskas@gmail.com?body=My custom mail body"
                >
                  {t("write_me_email")}
                </a>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>

       

          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="footer-container">
        <div className="footer-name-text--link-container">
          <h1 className="reveal-name-text">
            Antanas <span className="copyright-symbol">©</span>
            <br />
            Varanauskas
          </h1>
          <div className="footer-link--to-up-text-container">
            <a href="#top">
              <i className="fa-solid fa-arrow-up"></i>
            </a>
            <h5 className="footer-to-up-text">{t("to_up")}</h5>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
