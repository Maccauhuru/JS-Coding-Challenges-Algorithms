const findLargestNums = require('./largestNumbersinArray.js');


describe("Return largest number in arrays", () => {
  test("If function is defined", () => {
    expect(findLargestNums).toBeDefined();
  });

  test("If function returns array", () => {
    const arr = [[4, 5, 1, 3], [13, 27, 18, 26]]
    expect(Array.isArray(findLargestNums(arr))).toBeTruthy()
  });

  test("If function returns [27, 5, 39, 1001]", () => {
    const arr = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]
    expect(findLargestNums(arr)).toEqual([27, 5, 39, 1001]);
  });

  test("If function returns [9, 35, 97, 1000000]", () => {
    const arr = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]
    expect(findLargestNums(arr)).toEqual([9, 35, 97, 1000000]);
  });

  test("If function returns [25, 48, 21, -3]", () => {
    const arr = [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]
    expect(findLargestNums(arr)).toEqual([25, 48, 21, -3]);
  });

})