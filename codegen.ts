import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://api-mumbai.lens.dev/",
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
