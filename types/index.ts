export type Board = {
  columns: ColumnType[];
  id: number;
  name: string;
  uri: string;
  _count: {
    columns: number;
  };
};

export type Boards = {
  boards: Board[] | null;
  count: number | null;
};

export type GetAllBoardsReturnType = Boards & {
  error?: unknown;
};

export type ColumnType = {
  id: string;
  name: string;
  tasks: Task[];
};

export type Subtask = {
  id: number;
  isCompleted: boolean;
  title: string;
};

export type Task = {
  description: string;
  id: number;
  status: string;
  subtasks: Subtask[];
  title: string;
};

export type InputProps = {
  id: string;
  value: string;
  error: boolean;
};

export type BoardFormStateProp = {
  boardName: { isInvalid: boolean; msg: string };
  columns: { id: string; isInvalid: boolean }[];
};
