import { NextRequest } from "next/server";
import { ApolloServer, BaseContext } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

import { resolvers } from "@/schema/resolvers";
import { typeDefs } from "@/schema/typesDefs";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const server = new ApolloServer<{ db?: PrismaClient }>({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async () => ({
    db,
  }),
});

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
