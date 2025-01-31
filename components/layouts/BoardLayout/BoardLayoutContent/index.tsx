"use client";
import React from "react";

import { GetOneBoardByUriQuery } from "@/__generated__/graphql";
import ColumnsList from "../ColumnsList";
import EmptyBoard from "../EmptyBoard";
import EyeSlash from "@/components/icons/EyeSlash";
import SidebarToggle from "@/components/icons/SidebarToggleButton";
import ThemeToggle from "@/components/features/ThemeToggle";

import styles from "./BoardLayoutContent.module.scss";
import useSidebarStore from "@/store/use-sidebar-store";

type BoardLayoutWrapperType = {
  boardId: string
  boardUri: string
  children?: React.ReactNode;
  columns: GetOneBoardByUriQuery["getOneBoard"]['columns'];
};

const BoardLayoutContent: React.FC<BoardLayoutWrapperType> = ({ boardUri, boardId, children, columns }) => {
  const { isOpen, openSidebar, closeSidebar } = useSidebarStore(state => state)

  const handleOpenSidebar = () => {
    openSidebar()
  }

  const handleCloseSidebar = () => {
    closeSidebar()
  }

  return (
    <section className={`${styles.boardLayoutContent} ${isOpen ? styles.isSidebarOpen : ""}`.trim()}>
      <aside className={styles.sidebar}>
        {children}

        <ThemeToggle />

        <button className={styles.hideSidebarBtn} onClick={handleCloseSidebar}>
          <EyeSlash />
          <span>Hide Sidebar</span>
        </button>
      </aside>

      {columns.count <= 0 ? (
        <EmptyBoard boardId={boardId} />
      ) : (
        <ColumnsList columns={columns} boardUri={boardUri} boardId={boardId} />
      )}

      <button className={styles.sidebarTriggerWrapper}>
        <SidebarToggle onClick={handleOpenSidebar} />
      </button>
    </section>
  )
};

export default BoardLayoutContent;
