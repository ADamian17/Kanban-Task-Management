"use client"
import React, { useEffect } from "react";

import useThemeStore from "@/state/useThemeStore";

const HandleTheme: React.FC = (props) => {
  const { setTheme, theme } = useThemeStore(state => state)

  useEffect(() => {
    setTheme()
  }, [theme, setTheme]);

  return null
};

export default HandleTheme;