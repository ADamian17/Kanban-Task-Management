import Link from "next/link";

import { Board, } from "@/types";
import { KebabMenuItem } from "@/utils/kebab-menu-item";
import KebabDropdown from "../UI/Dropdowns/KebabDropdown";

import styles from "./BoardsGrid.module.scss";

type BoardsGridType = {
  board: Board
};

const BoardsGridItem: React.FC<BoardsGridType> = ({ board }) => {
  const kebabMenuItems = [
    { ...new KebabMenuItem("edit board", `/dashboard/edit-board${board.uri}`) },
    { ...new KebabMenuItem("delete board", `/dashboard/delete-board${board.uri}`, true) },
  ];

  return (
    <div className={styles.board}>
      <div className={styles.headline}>
        <Link href={`/dashboard${board.uri}`} className={styles.link}>{board.name}</Link>

        <KebabDropdown menuItems={kebabMenuItems} />
      </div>

      <p className={styles.colCount}>
        <span>columns</span>
        <span>-</span>
        <span>{board._count.columns}</span>
      </p>
    </div>
  )
};

export default BoardsGridItem;
