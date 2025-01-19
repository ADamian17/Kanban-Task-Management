import React from "react";
import Link from "next/link";

import { GetOneBoardByUriQuery } from "@/__generated__/graphql";
import AddNewTaskBtn from "@/components/features/AddNewTaskBtn";
import KebabDropdown from "@/components/ui/Dropdowns/KebabDropdown";

import styles from "./BoardLayoutHeader.module.scss";
import { useSnapshot } from "valtio";
import { proxyGlobalSidebar } from "@/store/proxy-global-sidebar";

type BoardLayoutHeaderType = {
  boardData: GetOneBoardByUriQuery["getOneBoard"];
};

const BoardLayoutHeader: React.FC<BoardLayoutHeaderType> = ({ boardData }) => {
  const { isOpen } = useSnapshot(proxyGlobalSidebar);
  const { uri, name, columns } = boardData;
  const isColumnsEmpty = columns.count <= 0;

  const menuItems = [
    { label: "Edit board", uri: `${uri}/edit` },
    { label: "delete board", uri: `${uri}/delete`, isDelete: true },
  ];

  return (
    <header className={`${styles.header} ${isOpen && styles.sidebarIsOpen}`}>
      <div className={styles.logoWrapper}>
        <Link href="/" className={styles.logo}>
          <picture>
            <source media="(min-width: 768px)" srcSet="/assets/kanban-desktop-dark.svg" />
            {/* <source media="(min-width: 768px) and (prefers-color-scheme: light)" srcSet="/assets/kanban-desktop-light.svg" /> */}

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

export default BoardLayoutHeader;
