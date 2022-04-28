const { isPalindrome, isPalindromeStr } = require("../palindromeNumber");

it("isPalindrome", () => {
  expect(isPalindrome(121)).toBe(true);
  expect(isPalindrome(1221)).toBe(true);
  expect(isPalindrome(-121)).toBe(false);
  expect(isPalindrome(10)).toBe(false);
  expect(isPalindrome(12321)).toBe(true);
});

it("isPalindromeStr", () => {
  expect(isPalindromeStr(121)).toBe(true);
  expect(isPalindromeStr(-121)).toBe(false);
  expect(isPalindromeStr(10)).toBe(false);
  expect(isPalindromeStr(12321)).toBe(true);
  expect(isPalindrome(12321)).toBe(true);
});
