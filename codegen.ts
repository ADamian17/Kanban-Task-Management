import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  config: {
    useIndexSignature: true,
    contextType: ".#InternalContext",
  },
  schema: "./schema/schema.graphql",
  generates: {
    "./schema/resolvers-types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
