import { RefreshAccessTokenDocument } from "@/__generated__/graphql";
import { JWT } from "next-auth/jwt";
import { executeApiReqNoHeaders } from "../utils/executeApiReqNoHeaders";

export const refreshAccessToken = async (token: JWT) => {
  try {
    const data = await executeApiReqNoHeaders(RefreshAccessTokenDocument, {
      refreshToken: token.refreshToken as string
    });

    const newAccessToken = data.refreshToken?.accessToken;

    if (!newAccessToken) throw new Error("Failed to refresh token");

    return { ...token, accessToken: newAccessToken };
  } catch (error) {
    console.error("Token refresh failed:", error);
    return { ...token, error: "RefreshAccessTokenError" };
  }
};
