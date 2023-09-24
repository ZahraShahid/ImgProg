"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upload_config_1 = require("../config/upload-config");
var uploadImage = function (req, res, next) {
    var bulkSize = 10;
    upload_config_1.default.array("images", bulkSize)(req, res, function (err) {
        if (err) {
            return next(err);
        }
        var filenames = [];
        for (var _i = 0, _a = req.files; _i < _a.length; _i++) {
            var file = _a[_i];
            filenames.push(file.filename);
        }
        return res.status(200).json({ filenames: filenames });
    });
};
exports.default = uploadImage;
