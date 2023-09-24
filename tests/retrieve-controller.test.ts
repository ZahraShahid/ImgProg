import { agent as request } from "supertest";
// import index from '../index';
import { jest, describe, expect, test } from "@jest/globals";
import retrieveImage from "../controllers/retrieve-controller";

jest.mock("fs", () => ({
  existsSync: jest.fn(() => true),
}));

describe("Retrieve Controller", () => {
  test("should retrieve an image successfully", async () => {
    const response = await request(retrieveImage).get(
      "/retrieve/test-image.jpg"
    );

    expect(response.status).toBe(200);
  });

  test("should return 404 for non-existing image", async () => {
    jest.spyOn(require("fs"), "existsSync").mockReturnValue(false);

    const response = await request(retrieveImage).get(
      "/retrieve/non-existing-image.jpg"
    );

    expect(response.status).toBe(404);
  });
});
