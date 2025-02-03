"use client"
import React from 'react'
import useThemeStore from '@/store/use-theme-store';
import styles from './Logo.module.scss'

const Logo = () => {
  const { themeColor } = useThemeStore(state => state)
  const imgSrc = themeColor === "light" ? "/assets/kanban-desktop-light.svg" : "/assets/kanban-desktop-dark.svg";

  return (
    <div className={styles.logo}>
      <picture>
        <source media="(min-width: 768px)" srcSet={imgSrc} />

        <img src="/assets/kanban-mobile.svg" alt="Back" />
      </picture>
    </div>
  )
}

export default Logo
