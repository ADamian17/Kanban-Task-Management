import React from "react";
import dynamic from 'next/dynamic'

import { GetOneBoardByUriQuery } from "@/__generated__/graphql";
const BoardLayoutHeader = dynamic(() => import("./BoardLayoutHeader"))
const BoardLayoutContent = dynamic(() => import("./BoardLayoutContent"))


import styles from "./BoardLayout.module.scss";
import HandleTheme from "@/components/features/HandleTheme";


type BoardLayoutType = {
  boardData: GetOneBoardByUriQuery["getOneBoard"];
  children: React.ReactNode;
};

const BoardLayout: React.FC<BoardLayoutType> = ({ boardData, children }) => {
  const { columns, id: boardId, uri } = boardData;

  return (
    <>
      <HandleTheme />
      <main className={styles.boardLayoutMain}>
        <BoardLayoutHeader boardData={boardData} />

        <BoardLayoutContent columns={columns} boardId={boardId} boardUri={uri ?? ""}>
          <div>
            all boards (8)
          </div>
        </BoardLayoutContent>

        {children}
      </main>
    </>
  );
};

export default BoardLayout;
