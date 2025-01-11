import type { NextAuthConfig } from "next-auth";
import { refreshAccessToken } from "./lib/auth/refreshToken";

declare module "next-auth" {
  interface User {
    accessToken?: string;
    refreshToken?: string;
  }
}

export const authConfig = {
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    authorized: ({ auth }) => {
      return !!auth?.user;
    },
    session: async ({ session, token }) => {
      session.user = {
        ...session.user,
        accessToken: token.accessToken,
      } as typeof session.user;

      return session;
    },
    jwt: async ({ token, user }) => {
      // Check if access token has expired
      const currentTime = Math.floor(Date.now() / 1000);
      const accessTokenExpires =
        typeof token.accessTokenExpires === "number"
          ? token.accessTokenExpires
          : 0;

      if (accessTokenExpires && currentTime >= accessTokenExpires) {
        token = await refreshAccessToken(token);
      }

      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = currentTime + 24 * 60 * 60; // 24 hours
        token.user = user;
      }

      return token;
    },
  },
  providers: [], // Add an empty array or provide the necessary provider configurations
} satisfies NextAuthConfig;
