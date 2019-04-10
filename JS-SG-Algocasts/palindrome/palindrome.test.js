const palindrome = require("./palindrome.js");

describe("Test suite for palindrome", () => {
  test("expect palidrome to be defined", () => {
    expect(palindrome).toBeDefined();
  });
  test("expect 'abba' to be true", () => {
    expect(palindrome("abba")).toBe(true);
  });
  test("expect 'shabba' to be false", () => {
    expect(palindrome("shabba")).toBe(false);
  });
  test("expect 'rogue' to be false", () => {
    expect(palindrome("rogue")).toBe(false);
  });
  test("expect '1221' to be true", () => {
    expect(palindrome("1221")).toBe(true);
  });
  test("expect 'poco' to be true", () => {
    expect(palindrome("ocop")).toBe(false);
  });
});
