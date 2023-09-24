"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var retrieveImage = function (req, res, next) {
    var filename = req.params.filename;
    var localFilePath = "/home/gosaas/Desktop/Challenge/ImgProg/uploads";
    var filePath = "".concat(localFilePath, "/").concat(filename);
    if (!fs.existsSync(filePath)) {
        var error = new Error("File not found");
        return next(error);
    }
    res.sendFile(filePath);
};
exports.default = retrieveImage;
