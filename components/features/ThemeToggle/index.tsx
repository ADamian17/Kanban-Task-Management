"use client";
import React from "react";

import Moon from "@/components/icons/Moon";
import Sun from "@/components/icons/Sun";
import useThemeStore from "@/store/use-theme-store";

import styles from "./ThemeToggle.module.scss";

const ThemeToggle: React.FC = () => {
  const { themeColor, toggleTheme } = useThemeStore(state => state)

  const handleClick = () => {
    toggleTheme(themeColor === "light" ? "dark" : "light");
  }

  return (
    <div className={styles.themeToggleWrapper}>
      <div className={styles.themeToggle}>
        <Sun />

        <div className={`${styles.toggleSwitch} ${styles[themeColor]}`.trim()} onClick={handleClick}>
          <div className={styles.toggleHandle} />
        </div>

        <Moon />
      </div>
    </div>
  )
};

export default ThemeToggle;
