"use client"
import React from "react";

import useThemeStore from "@/state/useThemeStore";

import styles from "./ThemeButtonToggle.module.scss";

type ThemeButtonToggleType = {};

const ThemeButtonToggle: React.FC<ThemeButtonToggleType> = (props) => {
  const { theme, toggleTheme } = useThemeStore(state => state)

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    toggleTheme(theme)
  }

  return (
    <div className={styles.container}>
      <svg className={styles.sun}>
        <use href="/icons/icons-defs.svg#sun"></use>
      </svg>

      <div className={`${styles.toggleSwitch} ${theme && styles[theme]}`}>
        <div className={styles.toggleHandle} onClick={handleClick} />
      </div>

      <svg className={styles.moon}>
        <use href="/icons/icons-defs.svg#moon"></use>
      </svg>
    </div>
  )
};

export default ThemeButtonToggle;