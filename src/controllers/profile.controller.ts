import { Request, Response, NextFunction } from 'express';
import baseClientUtil from '../utils/lens-protocol/base-client.util';
import getDefaultProfile from '../graphql/getDefaultProfile';
import dotenv from 'dotenv';
dotenv.config();

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
  const address = process.env.APP_ADDRESS as string;

  const response = await baseClientUtil
    .query(getDefaultProfile, { address })
    .toPromise();

  res.status(200).json({
    handle: response.data.defaultProfile
  });
};
