"use client"
import React, { useState } from 'react'

import Button from '@/components/ui/Button'
import CreateBoardForm from '@/components/forms/board-forms/CreateBoardForm'
import KebabDropdown from '@/components/ui/Dropdowns/KebabDropdown'
import Logo from '../Logo'
import Modal from '@/components/ui/Modal'

import styles from './AllBoardsHeader.module.scss'
import { logoutAction } from '@/lib/utils/logout-action'

const AllBoardsHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <header className={styles.header}>
      <Logo />

      <div className={styles.actionsWrapper}>
        <Button onClick={() => setShow(true)}>+ Add new board</Button>

        <KebabDropdown menuItems={[{ label: "logout", type: "button", onClick: () => logoutAction() }]} />
        <Modal show={show} onClose={handleClose} title="Add New Board">
          <CreateBoardForm />
        </Modal>
      </div>
    </header>
  )
}

export default AllBoardsHeader
