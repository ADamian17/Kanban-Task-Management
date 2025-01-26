"use client";
import React from "react";
import Link from "next/link";

import { GetOneBoardByUriQuery } from "@/__generated__/graphql";
import AddNewTaskBtn from "@/components/features/AddNewTaskBtn";
import KebabDropdown, { KebabDropdownItem } from "@/components/ui/Dropdowns/KebabDropdown";
import useSidebarStore from "@/store/use-sidebar-store";
import useThemeStore from "@/store/use-theme-store";

import styles from "./BoardLayoutHeader.module.scss";
import { logoutAction } from "@/lib/utils/logout-action";

type BoardLayoutHeaderType = {
  boardData: GetOneBoardByUriQuery["getOneBoard"];
};

const BoardLayoutHeader: React.FC<BoardLayoutHeaderType> = ({ boardData }) => {
  const { isOpen } = useSidebarStore(state => state)
  const { themeColor } = useThemeStore(state => state)
  const { uri, name, columns } = boardData;
  const isColumnsEmpty = columns.count <= 0;

  const imgSrc = themeColor === "light" ? "/assets/kanban-desktop-light.svg" : "/assets/kanban-desktop-dark.svg";
  const menuItems: KebabDropdownItem[] = [
    { label: "Edit board", uri: `${uri}edit`, type: "link" },
    { label: "delete board", uri: `${uri}delete`, isDelete: true, type: "link" },
    { label: "logout", type: "button", onClick: () => logoutAction() },
  ];

  return (
    <header className={`${styles.header} ${isOpen ? styles.sidebarIsOpen : ""}`.trim()}>
      <div className={styles.logoWrapper}>
        <Link href="/" className={styles.logo}>
          <picture>
            <source media="(min-width: 768px)" srcSet={imgSrc} />

            <img src="/assets/kanban-mobile.svg" alt="Back" />
          </picture>
        </Link>
      </div>

      <div className={styles.nameAndActionsWrapper}>
        <div>
          <p className={styles.boardName}>{name}</p>
        </div>

        <div className={styles.actionsWrapper}>
          <AddNewTaskBtn isColumnsEmpty={isColumnsEmpty} boardUri={uri ?? ""} columns={columns} />

          <KebabDropdown menuItems={menuItems} />
        </div>
      </div>
    </header>
  );
};

export default React.memo(BoardLayoutHeader);
