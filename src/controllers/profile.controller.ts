import { Request, Response, NextFunction } from "express";
import baseClientUtil from "../utils/lens-protocol/base-client.util";
import { APP_ADDRESS } from "../config/env.config";
import getDefaultProfileByAddressDocument from "../graphql/get-default-profile.graphql";

/**
 * Get the handle.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @param _next - The next function.
 * @returns The handle object.
 */
export const getHandle = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const response = await baseClientUtil
    .query(getDefaultProfileByAddressDocument, { address: APP_ADDRESS })
    .toPromise();

  /** Since MediaSet is union, so we have to check the type */
  const url = (
    response.data?.defaultProfile?.picture as {
      __typename: "MediaSet";
      original: { url: string };
    }
  )?.original?.url;

  res.status(200).json({
    handle: url
  });
};
