import Link from "next/link";

import { Boards } from "@/types";

import styles from "./BoardsGrid.module.scss";
import { KebabMenuItem } from "@/utils/kebab-menu-item";
import KebabDropdown from "../UI/Dropdowns/KebabDropdown";
import BoardsGridItem from "./BoardsGridItem";

type BoardsGridType = Boards;

const BoardsGrid: React.FC<BoardsGridType> = ({ boards, count }) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <svg>
          <use href={`/icons/icons-defs.svg#board`}></use>
        </svg>
        <span>All Boards</span>
        <span>({count})</span>
      </header>

      <div className={styles.boards}>
        {boards && boards.map((board) => <BoardsGridItem key={"board" + board.id} board={board} />)}
      </div>
    </div>
  )
};

export default BoardsGrid;
