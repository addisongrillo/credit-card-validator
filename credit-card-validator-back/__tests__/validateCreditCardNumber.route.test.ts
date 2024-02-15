import request from "supertest";

import app from "../src/app";

describe("validate credit card routes", () => {
  test("validate credit card", async () => {
    const res = await request(app).post("/validate-credit-card-number?creditCardNumber=3576271992978382");
    expect(res.body).toEqual({"isValid": true});
  });
  test("validate credit card invalid number", async () => {
    const res = await request(app).post("/validate-credit-card-number?creditCardNumber=3576271992978383");
    expect(res.body).toEqual({"isValid": false});
  });
});