import * as multer from "multer";
import { Request } from "express";

const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, "./uploads/");
  },

  filename: (req: Request, file: Express.Multer.File, cb) => {
    const uniqueIdentifier = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueIdentifier + "-" + file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
