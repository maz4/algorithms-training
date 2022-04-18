import { romanToIntHashMap, romanToInt } from "../romanToInteger";

it("romanToInt", () => {
  expect(romanToInt("III")).toBe(3);
  expect(romanToInt("LVIII")).toBe(58);
  expect(romanToInt("MCMXCIV")).toBe(1994);
});

it("romanToIntHashMap", () => {
  expect(romanToIntHashMap("III")).toBe(3);
  expect(romanToIntHashMap("LVIII")).toBe(58);
  expect(romanToIntHashMap("MCMXCIV")).toBe(1994);
});
