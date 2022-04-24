import { removeDuplicates } from "../removeDuplicatesFromSortedArray";

it("removeDuplicates", () => {
  expect(removeDuplicates([1, 1, 2])).toEqual([1, 2]);
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual([
    0, 1, 2, 3, 4,
  ]);
});
