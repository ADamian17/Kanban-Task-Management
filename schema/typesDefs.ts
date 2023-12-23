import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Board {
    columns: [Column]!
    id: Int!
    name: String!
    uri: String!
  }

  type Column {
    id: Int
    name: String
    tasks: [Task]!
  }

  type Mutation {
    completeSubtask(id: Int!): Subtask!
    createBoard(name: String!): Board!
    createColumn(boardId: Int!, name: String!): Column!
    createSubtask(taskId: Int!, title: String!): Subtask!
    deleteBoard(id: Int!): Board!
    deleteColumn(id: Int!): Column!
    updateBoard(id: Int!, name: String!): Board!
    updateColumn(boardId: Int, id: Int!, name: String!): Column!
  }

  type Query {
    board(name: String, uri: String): Board!
    boards: [Board]!
    subtask(id: Int!): Subtask!
    subtasks: [Subtask]!
  }

  type Subtask {
    id: Int
    isCompleted: Boolean
    title: String
  }

  type Task {
    description: String
    id: Int
    status: String
    subtasks: [Subtask]!
    title: String
  }
`;
