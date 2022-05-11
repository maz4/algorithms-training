const { strStr } = require("../strStr");

it("strStr", () => {
  expect(strStr("hello", "ll")).toBe(2);
  expect(strStr("aaaaaa", "bba")).toBe(-1);
  expect(strStr("aaaaaa", "")).toBe(0);
});
