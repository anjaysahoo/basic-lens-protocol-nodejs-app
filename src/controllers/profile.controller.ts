import { Request, Response, NextFunction } from "express";
/**
 * Get the handle.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next function.
 * @returns The handle object.
 */
export const getHandle = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.status(200).json({
        handle: "naruto.lens",
    });
};
