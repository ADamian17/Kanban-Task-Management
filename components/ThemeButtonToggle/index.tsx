"use client"
import React from "react";

import styles from "./ThemeButtonToggle.module.scss";
import useThemeStore from "@/state/useThemeStore";

type ThemeButtonToggleType = {};

const ThemeButtonToggle: React.FC<ThemeButtonToggleType> = (props) => {
  const { theme, toggleTheme } = useThemeStore(state => state)

  return (
    <div className={styles.container}>
      <svg className={styles.sun}>
        <use href="/icons/icons-defs.svg#sun"></use>
      </svg>

      <label className={styles.toggleContainer}>
        <input type="checkbox" className={styles.toggleCheckbox} id="toggle-theme-switch" />

        <div className={styles.toggleSwitch}>
          <div className={styles.toggleHandle} onClick={() => toggleTheme(theme)} />
        </div>
      </label>

      <svg className={styles.moon}>
        <use href="/icons/icons-defs.svg#moon"></use>
      </svg>
    </div>
  )
};

export default ThemeButtonToggle;