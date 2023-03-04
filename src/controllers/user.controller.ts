import { Request, Response, NextFunction } from "express";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.send("tetete");
  } catch (error) {
    res.send("tetete");
  }
};
