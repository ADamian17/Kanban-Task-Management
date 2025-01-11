import { TypedDocumentString } from "@/__generated__/graphql";
import { GraphQLError } from "graphql";

type GQLResponse<GraphQLData> =
  | { data: GraphQLData }
  | { errors: GraphQLError[] };

export const executeApiReqNoHeaders = async <Result, Variables>(
  document: TypedDocumentString<Result, Variables>,
  variables?: Variables, // Add a new parameter for variables
): Promise<Result> => {
  const body = JSON.stringify({
    query: document.toString(),
    variables,
  });

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API_URL!, {
    method: "POST",
    headers,
    body,
  });

  const result: GQLResponse<Result> = await response.json();

  if ("errors" in result) {
    throw new Error(result.errors.map((e) => e.message).join("\n"));
  }

  return result.data;
};
