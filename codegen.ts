import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  //TODO: Use API in place of hardcoded schema file, also resolve query issue when start using API
  schema: "schema.graphql",
  documents: ["src/graphql/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
