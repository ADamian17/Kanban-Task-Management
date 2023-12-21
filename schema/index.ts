import { PrismaClient } from "@prisma/client";

export type InternalContext = {
  db: PrismaClient;
};
