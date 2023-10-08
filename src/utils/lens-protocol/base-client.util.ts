import { cacheExchange, Client, createClient, fetchExchange } from "@urql/core";
import dotenv from "dotenv";
dotenv.config();

const baseClientUtil: Client = createClient({
  url: process.env.PUBLIC_LENS_API_URL as string,
  exchanges: [cacheExchange, fetchExchange],
  requestPolicy: "cache-and-network"
});

export default baseClientUtil;
