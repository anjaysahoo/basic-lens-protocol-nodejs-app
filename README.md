# Basic Lens Protocol Nodejs App

This repo help you set up basic Lens Protocol Nodejs App which uses Lens Protocol GraphQL API
for fetching/mutating data on Lens Protocol, also setup your own REST API using Express.

## Prerequisites

First setup basic typescript nodejs application using [basic-ts-express-app](https://github.com/anjaysahoo/basic-ts-express-app) repo

### Things that will be covered in this guide are

1. Creating a [simple GET REST API](#simple-get-rest-api) for fetching data from Lens Protocol
2. [Setting up Prettier with ESLint](#setup-prettier-with-eslint)
3. Creating a simple POST REST API for fetching data from Lens Protocol

## Simple GET REST API

Creating a`Base Client` using [URQL](https://formidable.com/open-source/urql/docs/basics/core/) for all sorts of fetching related stuff from Lens Protocol.

<b>Note: </b> Rationale behind using `URQL` client can be understood from this article [5 GraphQL clients for JavaScript and Node.js](https://blog.logrocket.com/5-graphql-clients-for-javascript-and-node-js/#:~:text=GraphQL-based%20servers%20can%20only,a%20GraphQL%20client%20is%20needed.)

## Setup Prettier with ESLint

### Step-1:

Refer this article to setup prettier 👉
[How to use Prettier with ESLint and TypeScript in VSCode](https://khalilstemmler.com/blogs/tooling/prettier/)

### Step-2:

Refer this article to setup ESLint 👉
[How to use ESLint with TypeScript](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/)

#### Note:

You start getting `unused error` once you run script `npm run lint` in files like `app.ts`

```typescript
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: err.message });
});
```

As next is not used so ESLint throw `unused error`, but if you remove next then you will not get others error.

To resolve this you add new rules in `.eslintrc`

```json
{
  "root": true,
  "rules": {
    "_comment": "Below rule help us ignore any unused variables error thrown by eslint",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }
    ]
  }
}
```

<b>After this you always define any unused variable in your code, by starting variable name with underscore</b>

Example:

```typescript
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  res.status(404).json({ message: err.message });
});
```

## Things to trigger before coding anytime

1. `npm run build` to build your code
2. `npm run start` to start your server
3. `npm run prettier-watch` to format your code automatically

## Improvements(TODO)

1. Add more customizable rules in `.eslintrc` & `.prettierrc`
