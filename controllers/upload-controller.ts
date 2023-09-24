import { Request, Response, NextFunction } from "express";
import upload from "../config/upload-config";

const uploadImage = (req: Request, res: Response, next: NextFunction) => {
  const bulkSize = 10;
  upload.array("images", bulkSize)(req, res, (err: any) => {
    if (err) {
      return next(err);
    }

    const filenames: string[] = [];

    for (const file of req.files as Express.Multer.File[]) {
      filenames.push(file.filename);
    }

    return res.status(200).json({ filenames });
  });
};

export default uploadImage;
