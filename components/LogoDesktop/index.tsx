"use client"
import React from "react";

import Image from "next/image";
import useThemeStore from "@/state/useThemeStore";

import styles from "./LogoDesktop.module.scss";
import Link from "next/link";

type LogoDesktopType = {};

const LogoDesktop: React.FC<LogoDesktopType> = (props) => {
  const { theme } = useThemeStore(state => state)

  return (
    <div className={styles.container}>
      <Link href="/dashboard/">
        <Image
          src={`/icons/kanban-desktop-${theme}.svg`}
          width={153}
          height={26}
          alt='kanban icon'
          priority={true}
        />
      </Link>
    </div>
  )
};

export default LogoDesktop;