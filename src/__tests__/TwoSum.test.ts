import { twoSum, twoSumHashMap } from "../TwoSum";

it("twoSum", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
  expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
  expect(twoSum([3], 6)).toStrictEqual([]);
  expect(twoSum([2, 7, 11, 15], 17)).toStrictEqual([0, 3]);
});

it("twoSumHashMap", () => {
  expect(twoSumHashMap([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  expect(twoSumHashMap([3, 2, 4], 6)).toStrictEqual([1, 2]);
  expect(twoSumHashMap([3, 3], 6)).toStrictEqual([0, 1]);
  expect(twoSumHashMap([3], 6)).toStrictEqual([]);
  expect(twoSumHashMap([2, 7, 11, 15], 17)).toStrictEqual([0, 3]);
});
