import { Request, Response, NextFunction } from "express";
import baseClient from "../utils/lens-protocol/baseClient";
import getDefaultProfile from "../graphql/getDefaultProfile";
import dotenv from 'dotenv';
dotenv.config();

/**
 * Get the handle.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next function.
 * @returns The handle object.
 */
export const getHandle = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const address = process.env.APP_ADDRESS as string;

    const response = await baseClient.query(getDefaultProfile,
        { address }).toPromise();

    res.status(200).json({
        handle: response.data.defaultProfile,
    });
};
