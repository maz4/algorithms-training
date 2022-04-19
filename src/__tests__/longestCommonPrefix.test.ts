import {
  longestCommonPrefix,
  longestCommonPrefixVertical,
  longestCommonPrefixDandC,
} from "../longestCommonPrefix";

it("longestCommonPrefix", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});

it("longestCommonPrefixVertical", () => {
  expect(longestCommonPrefixVertical(["flower", "flow", "flight"])).toBe("fl");
  expect(longestCommonPrefixVertical(["dog", "racecar", "car"])).toBe("");
});

it("longestCommonPrefixDandC", () => {
  expect(longestCommonPrefixDandC(["flower", "flow", "flight"])).toBe("fl");
  expect(longestCommonPrefixDandC(["dog", "racecar", "car"])).toBe("");
});
