import { useEffect, useRef, useState } from "react";
import { supportedThemes } from "../../../colorThemes";
import styles from "./ThemeSelect.module.css";

export default function ThemeSelect() {
  // Set the initial state based on localStorage, defaulting to "default"
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem("theme") || "default";
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isIconAnimated, setIsIconAnimated] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Trigger the icon animation
    setTimeout(() => setIsIconAnimated(true), 100);
  }, []);

  useEffect(() => {
    const theme = supportedThemes[currentTheme];
    // Apply the theme whenever currentTheme changes
    if (theme) {
      document.documentElement.style.setProperty(
        "--background-color",
        theme.backgroundColor
      );
      document.documentElement.style.setProperty(
        "--text-color",
        theme.textColor
      );
      document.documentElement.style.setProperty(
        "--lighter-text-color",
        theme.lighterTextColor
      );
      document.documentElement.style.setProperty(
        "--darker-text-color",
        theme.darkerTextColor
      );
    }
  }, [currentTheme]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  function handleThemeChange(theme) {
    localStorage.setItem("theme", theme); // Save the selected theme
    setCurrentTheme(theme); // Update state
    setIsDropdownOpen(false);

    // Reload the page to apply the new theme
    window.location.reload();
  }

  return (
    <div className={styles.themeSelector} ref={dropdownRef}>
      <div
        className={styles.themeButton}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <i
          className={`fa-solid fa-paint-roller ${
            isIconAnimated ? styles.slideIcon : ""
          }`}
        ></i>
      </div>

      <div
        className={`${styles.dropdownWrapper} ${
          isDropdownOpen ? styles.show : ""
        }`}
      >
        <ul className={styles.dropdownMenu}>
          {Object.keys(supportedThemes).map((theme) => (
            <li
              key={theme}
              className={styles.dropdownItem}
              onClick={() => handleThemeChange(theme)}
            >
              <div
                className={styles.colorPreview}
                style={{
                  backgroundColor: supportedThemes[theme].backgroundColor,
                }}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
