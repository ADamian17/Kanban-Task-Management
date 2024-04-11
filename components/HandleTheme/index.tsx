"use client"
import React, { useEffect } from "react";

import useThemeStore from "@/state/useThemeStore";

const HandleTheme: React.FC = (props) => {
  const { setTheme, theme, toggleTheme } = useThemeStore(state => state)

  useEffect(() => {
    setTheme()
  }, [theme, setTheme]);

  useEffect(() => {
    const nativeTheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    )

    nativeTheme.addEventListener("change", themeHandler);

    function themeHandler(e: MediaQueryListEvent) {
      const currentTheme = !e.matches ? "dark" : "light";
      toggleTheme(currentTheme)
    }

    return () => {
      nativeTheme.removeEventListener("change", themeHandler);
    }
  }, [toggleTheme]);

  return null
};

export default HandleTheme;