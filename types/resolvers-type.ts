import { PrismaClient } from "@prisma/client";

export type InternalContext = { db?: PrismaClient };

export type BoardQueryArgs = {
  name: string;
  uri: string;
};
