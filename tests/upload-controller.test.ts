import { agent as request } from "supertest";
// import app from '../index';
import { jest, describe, expect, test } from "@jest/globals";
import uploadImage from "../controllers/upload-controller";

jest.mock("../config/upload-config", () => jest.fn());
jest.mock("fs", () => ({
  existsSync: jest.fn(() => true),
}));

describe("Upload Controller", () => {
  test("should upload an image successfully", async () => {
    const response = await request(uploadImage)
      .post("/upload")
      .attach("image", "./path/to/test-image.jpg");

    expect(response.status).toBe(200);
    expect(response.body.filename).toBeTruthy();
  });
});
