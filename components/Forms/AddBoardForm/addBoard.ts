"use server";

type AddBoardProps = {
  boardName: string;
  columns: Array<{ name: string }>;
};

export const addBoard = (boardData: AddBoardProps) => {
  const data = {
    name: boardData.boardName,
    columns: boardData.columns,
  };

  console.log(data);
};
