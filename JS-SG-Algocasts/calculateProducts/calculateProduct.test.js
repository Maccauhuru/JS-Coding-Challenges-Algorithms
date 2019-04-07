const cp = require("./calculateProduct.js");
describe("Test Product of Array Except Self", () => {
  test("Given input [1,2,3,4] it must return [24,12,8,6]", () => {
    expect(cp([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });
  test("Given input [4,3,2,1] it must return [24,12,8,6]", () => {
    expect(cp([4, 3, 2, 1])).toEqual([6, 8, 12, 24]);
  });
  test("Given input [] it must return []", () => {
    expect(cp([])).toEqual([]);
  });
  test("Given input [0,1] it must return [NaN,0]", () => {
    expect(cp([0, 1])).toEqual([NaN, 0]);
  });
});
