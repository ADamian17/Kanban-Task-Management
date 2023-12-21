import { Resolvers } from "./resolvers-types";

export const resolvers: Resolvers = {
  Query: {
    boards: (_, __, { db }) => db.board.findMany(),
    board: (_, args, { db }) =>
      db.board.findUniqueOrThrow({
        where: {
          name: args.name,
        },
        include: {
          columns: {
            include: {
              tasks: {
                include: {
                  subtasks: true,
                },
              },
            },
          },
        },
      }),
  },
};
