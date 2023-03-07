import { Request, Response, NextFunction } from "express";
import axios from "axios";

export const userListing = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await axios.get(`https://reqres.in/api/users?page=1/`);
    res.send(user.data);
  } catch (error) {
    res.send(error);
  }
};
