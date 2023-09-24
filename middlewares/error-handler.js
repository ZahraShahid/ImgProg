"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorHandler = function (error, req, res, next) {
    var statusCode = 500;
    var message = error.message || "Internal Server Error";
    res.status(statusCode).json({ error: { message: message } });
};
exports.default = errorHandler;
