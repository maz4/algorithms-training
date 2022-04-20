import {
  longestCommonPrefix,
  longestCommonPrefixVertical,
  longestCommonPrefixDaC,
  longestCommonPrefixBinaryTree,
} from "../longestCommonPrefix";

it("longestCommonPrefix", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});

it("longestCommonPrefixVertical", () => {
  expect(longestCommonPrefixVertical(["flower", "flow", "flight"])).toBe("fl");
  expect(longestCommonPrefixVertical(["dog", "racecar", "car"])).toBe("");
});

xit("longestCommonPrefixDaC", () => {
  expect(longestCommonPrefixDaC(["flower", "flow", "flight"])).toBe("fl");
  expect(longestCommonPrefixDaC(["dog", "racecar", "car"])).toBe("");
});

it("longestCommonPrefixBinaryTree", () => {
  expect(longestCommonPrefixBinaryTree(["flower", "flow", "flight"])).toBe(
    "fl"
  );
  expect(
    longestCommonPrefixBinaryTree(["cart", "cartoon", "car", "carnival"])
  ).toBe("car");
  expect(longestCommonPrefixBinaryTree(["dog", "racecar", "car"])).toBe("");
  expect(longestCommonPrefixBinaryTree(["cir", "car"])).toBe("c");
});
