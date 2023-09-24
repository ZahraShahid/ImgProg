"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
        var uniqueIdentifier = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueIdentifier + "-" + file.originalname);
    },
});
var upload = multer({ storage: storage });
exports.default = upload;
