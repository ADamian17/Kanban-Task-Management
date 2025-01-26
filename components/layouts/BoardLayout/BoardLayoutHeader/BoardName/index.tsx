"use client";
import React, { useState } from 'react'

import styles from './BoardName.module.scss'
import ChevronDown from '@/components/icons/ChevronDown'
import ChevronUp from '@/components/icons/ChevronUp';
import Modal from '@/components/ui/Modal';
import ThemeToggle from '@/components/features/ThemeToggle';

type BoardNameProps = {
  boardName: string
  children: React.ReactNode;
}

const BoardName: React.FC<BoardNameProps> = ({ boardName, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={styles.boardNameWrapper}>
      <p className={styles.boardName}>{boardName}</p>

      <button className={styles.boardIcon} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      <Modal show={isOpen} onClose={() => setIsOpen(false)} position='top' className={styles.mobileModalWrapper} modalClassName={styles.mobileModal}>
        {children}

        <div className={styles.themeToggleWrapper}>
          <ThemeToggle />
        </div>
      </Modal>
    </div>
  )
}

export default BoardName
