const strLen = require('./longestWordInAString.js');

describe("Check for the longest string length", () => {
  test("Check if function is defined", () => {
    expect(strLen).toBeDefined()
  });
  test("The string should return a number", () => {
    const check = "The quick brown fox jumped over the lazy dog should return a number"
    expect(typeof strLen(check)).toEqual('number');
  });
  test("The longest string should return 5", () => {
    const check = "May the force be with you"
    expect(strLen(check)).toEqual(5);
  });
  test("The longest string should return 6", () => {
    const check = "Google do a barrel roll"
    expect(strLen(check)).toEqual(6);
  });
  test("The longest string should return 8", () => {
    const check = "What is the average airspeed velocity of an unladen swallow"
    expect(strLen(check)).toEqual(8);
  });
  test("The longest string should return 19", () => {
    const check = "What if we try a super-long word such as otorhinolaryngology"
    expect(strLen(check)).toEqual(19);
  });

})