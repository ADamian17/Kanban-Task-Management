"use client"
import React, { useEffect } from "react";
import useThemeStore from "@/store/use-theme-store";

const HandleTheme: React.FC = () => {
  const { themeColor, toggleTheme } = useThemeStore(state => state)

  useEffect(() => {
    if (themeColor) document.documentElement.setAttribute("data-current-theme-color", themeColor);

    const nativeTheme = window.matchMedia("(prefers-color-scheme: dark)");

    nativeTheme.addEventListener("change", themeHandler);

    function themeHandler(e: MediaQueryListEvent) {
      const currentTheme = e.matches ? "dark" : "light";
      toggleTheme(currentTheme);
    }

    return () => {
      nativeTheme.removeEventListener("change", themeHandler);
    }
  }, [themeColor, toggleTheme]);

  return null
};

export default HandleTheme;