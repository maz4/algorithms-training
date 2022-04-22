import {
  mergeTwoListsEasySolution,
  mergeTwoLists,
} from "../mergeTwoSortedLists";

it("mergeTwoListsEasySolution", () => {
  expect(mergeTwoListsEasySolution([1, 2, 4], [1, 3, 4])).toStrictEqual([
    1, 1, 2, 3, 4, 4,
  ]);
  expect(mergeTwoListsEasySolution([], [])).toStrictEqual([]);
  expect(mergeTwoListsEasySolution([], [0])).toStrictEqual([0]);
});

it("mergeTwoLists", () => {
  expect(mergeTwoLists([1, 2, 4], [1, 3, 4])).toStrictEqual([1, 1, 2, 3, 4, 4]);
  expect(mergeTwoLists([], [])).toStrictEqual([]);
  expect(mergeTwoLists([], [0])).toStrictEqual([0]);
});
