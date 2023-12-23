import { BoardQueryArgs, InternalContext } from "@/types";

export const resolvers = {
  Query: {
    boards: (_: any, __: any, { db }: InternalContext) => {
      return db?.board.findMany();
    },
    board: (_: any, args: BoardQueryArgs, { db }: InternalContext) => {
      return db?.board?.findUniqueOrThrow({
        where: {
          name: args.name,
          uri: args.uri,
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
      });
    },
  },
};
