export const resolvers = {
  Query: {
    boards: (_: any, __: any, { db }: { db: any }) => db.board.findMany(),
    board: (_: any, args: any, { db }: { db: any }) =>
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
