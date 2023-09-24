import * as express from "express";
import uploadImage from "./controllers/upload-controller";
import retrieveImage from "./controllers/retrieve-controller";
import errorHandler from "./middlewares/error-handler";

const app = express();

app.use(express.json());

app.post("/upload", uploadImage);
app.get("/retrieve/:filename", retrieveImage);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}...`);
});
