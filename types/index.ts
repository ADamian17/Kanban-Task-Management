export type Board = {
  columns: Column[];
  id: number;
  name: string;
  uri: string;
};

export type Column = {
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
