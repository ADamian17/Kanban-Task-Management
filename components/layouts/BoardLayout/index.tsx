import React from "react";
import dynamic from 'next/dynamic'

import { GetOneBoardByUriQuery } from "@/__generated__/graphql";
import BoardsNavigation from "@/components/features/BoardsNavigation";
const BoardLayoutContent = dynamic(() => import("./BoardLayoutContent"))
const BoardLayoutHeader = dynamic(() => import("./BoardLayoutHeader"))


import styles from "./BoardLayout.module.scss";


type BoardLayoutType = {
  boardData: GetOneBoardByUriQuery["getOneBoard"];
  children: React.ReactNode;
};

const BoardLayout: React.FC<BoardLayoutType> = ({ boardData, children }) => {
  const { columns, id: boardId, uri } = boardData;

  return (
    <main className={styles.boardLayoutMain}>
      <BoardLayoutHeader boardData={boardData}>
        <BoardsNavigation boardId={boardId} />
      </BoardLayoutHeader>

      <BoardLayoutContent columns={columns} boardId={boardId} boardUri={uri ?? ""}>
        <BoardsNavigation boardId={boardId} />
      </BoardLayoutContent>

      {children}
    </main>
  );
};

export default BoardLayout;
