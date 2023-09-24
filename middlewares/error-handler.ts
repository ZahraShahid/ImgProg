import { Request, Response, NextFunction } from "express";

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500;
  const message = error.message || "Internal Server Error";
  res.status(statusCode).json({ error: { message } });
};

export default errorHandler;
