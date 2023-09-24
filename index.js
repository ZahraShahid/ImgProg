"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var upload_controller_1 = require("./controllers/upload-controller");
var retrieve_controller_1 = require("./controllers/retrieve-controller");
var error_handler_1 = require("./middlewares/error-handler");
var app = express();
app.use(express.json());
app.post("/upload", upload_controller_1.default);
app.get("/retrieve/:filename", retrieve_controller_1.default);
app.use(error_handler_1.default);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is running on port: ".concat(PORT, "..."));
});
