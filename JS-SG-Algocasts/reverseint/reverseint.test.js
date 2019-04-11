const revInt = require("./reverseint.js");

describe("Test reversals of numbers", () => {
  test("Reverse Int Is Defined", () => {
    expect(revInt).toBeDefined();
  });
  test("expect revInt(15) to be 51", () => {
    expect(revInt(15)).toBe(51);
  });
  test("expect revInt(981) to be 189", () => {
    expect(revInt(981)).toBe(189);
  });
  test("expect revInt(500) to be 5", () => {
    expect(revInt(500)).toBe(5);
  });
  test("expect revInt(-15) to be -51", () => {
    expect(revInt(-15)).toBe(-51);
  });
  test("expect revInt(-90) to be -9", () => {
    expect(revInt(-90)).toBe(-9);
  });
});
