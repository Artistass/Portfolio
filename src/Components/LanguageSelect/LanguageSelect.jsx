import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { supportedLanguages } from "../../../i18n"; // Adjust the path as needed
import styles from "./LanguageSelect.module.css"; // Import the CSS module

export default function LanguageSelect() {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isIconAnimated, setIsIconAnimated] = useState(false); // New state for the sliding effect
  const dropdownRef = useRef(null);

  function handleLanguageChange(language) {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language); // Save the selected language
    setIsDropdownOpen(false);
  }

  // Effect to trigger the icon sliding animation on mount
  useEffect(() => {
    setTimeout(() => setIsIconAnimated(true), 100); // Start the animation after component mounts
  }, []);

  // Effect to close the dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown if click is outside of the dropdownRef
      }
    }

    document.addEventListener("mousedown", handleClickOutside); // Attach event listener on mount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up the event listener on unmount
    };
  }, [dropdownRef]);

  return (
    <div className={styles.languageSelector} ref={dropdownRef}>
      <div
        className={styles.languageButton}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {/* Apply the animation class conditionally */}
        <i
          className={`fa-solid fa-language ${
            isIconAnimated ? styles.slideIcon : ""
          }`}
        ></i>
      </div>

      {/* Conditionally render the dropdown */}
      <div
        className={`${styles.dropdownWrapper} ${
          isDropdownOpen ? styles.show : ""
        }`}
      >
        <ul className={styles.dropdownMenu}>
          {Object.entries(supportedLanguages).map(([langCode, langName]) => (
            <li
              key={langCode}
              className={styles.dropdownItem}
              onClick={() => handleLanguageChange(langCode)}
            >
              <img
                src={`/flags/${langCode}.png`} // Flag images like en.png, de.png
                alt={`${langName} flag`}
                className={styles.flagIcon}
              />
              {langName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
