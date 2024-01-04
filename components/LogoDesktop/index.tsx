"use client"
import React from "react";

import Image from "next/image";
import useThemeStore from "@/state/useThemeStore";

import styles from "./LogoDesktop.module.scss";

type LogoDesktopType = {};

const LogoDesktop: React.FC<LogoDesktopType> = (props) => {
  const { theme } = useThemeStore(state => state)

  return (
    <div className={styles.container}>
      <Image
        src={`/icons/kanban-desktop-${theme}.svg`}
        width={153}
        height={26}
        alt='kanban icon'
        priority={true}
      />
    </div>
  )
};

export default LogoDesktop;