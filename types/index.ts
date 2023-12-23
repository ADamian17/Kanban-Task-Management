export * from "./resolvers-type";

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

// type Mutation {
//   completeSubtask(id: Int!): Subtask!
//   createBoard(name: String!): Board!
//   createColumn(boardId: Int!, name: String!): Column!
//   createSubtask(taskId: Int!, title: String!): Subtask!
//   deleteBoard(id: Int!): Board!
//   deleteColumn(id: Int!): Column!
//   updateBoard(id: Int!, name: String!): Board!
//   updateColumn(boardId: Int, id: Int!, name: String!): Column!
// }

// type Query {
//   board(name: String!): Board!
//   boards: [Board]!
//   subtask(id: Int!): Subtask!
//   subtasks: [Subtask]!
// }
