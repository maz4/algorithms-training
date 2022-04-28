const { isValid } = require("../validParentheses");

it("isValid", () => {
  expect(isValid("()")).toBe(true);
  expect(isValid("()[]{}")).toBe(true);
  expect(isValid("{[]}")).toBe(true);
  expect(isValid("(]")).toBe(false);
});
