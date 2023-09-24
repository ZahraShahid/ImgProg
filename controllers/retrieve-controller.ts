import { Request, Response, NextFunction } from "express";
import * as fs from "fs";

const retrieveImage = (req: Request, res: Response, next: NextFunction) => {
  const {filename}  = req.params;
  const localFilePath = "/home/gosaas/Desktop/Challenge/ImgProg/uploads";
  const filePath = `${localFilePath}/${filename}`;

  if (!fs.existsSync(filePath)) {
    const error: Error = new Error("File not found");
    return next(error);
  }

  res.sendFile(filePath);
};

export default retrieveImage;
