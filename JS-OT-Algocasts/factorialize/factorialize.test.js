const factorialize = require('./factorialize.js');

describe("Check if we are getting the correct factorials for numbers", () => {
  test("check if factorialize function exists", () => {
    expect(typeof factorialize).toBeDefined();
  });
  test("typeof factorialize should return a function", () => {
    expect(typeof factorialize).toEqual('function');
  });
  test("typeof factorialize(5) should return a number", () => {
    expect(typeof factorialize(5)).toEqual('number');
  });
  test("factorialize(5) should return 120", () => {
    expect(factorialize(5)).toEqual(120);
  });
  test("factorialize(10) should return 3628800", () => {
    expect(factorialize(10)).toEqual(3628800);
  });
  test("factorialize(20) should return 2432902008176640000", () => {
    expect(factorialize(20)).toEqual(2432902008176640000);
  });
});