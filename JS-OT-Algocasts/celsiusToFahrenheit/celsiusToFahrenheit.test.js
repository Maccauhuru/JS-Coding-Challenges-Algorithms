const convertToF = require('./celsiusToFahrenheit');

describe("Check if tets are converting celsius to fahrenheit correctly", () => {
    test("check if convertToF function exists", () => {
        expect(convertToF).toBeDefined();
    });
    test("convertToF(-30) should return -22", () => {
        expect(convertToF(-30)).toBe(-22);
    });
    test("convertToF(-10) should return 14", () => {
        expect(convertToF(-10)).toBe(14);
    });
    test("convertToF(0) should return 32", () => {
        expect(convertToF(0)).toBe(32);
    });
    test("convertToF(0) should return a number type", () => {
        expect(convertToF(0)).toEqual(expect.any(Number));
    });
    test("convertToF(20) should return 68", () => {
        expect(convertToF(20)).toBe(68);
    });
    test("convertToF(30) should return 86", () => {
        expect(convertToF(30)).toBe(86);
    });
});