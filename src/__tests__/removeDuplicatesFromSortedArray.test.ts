import { removeDuplicates, remDup } from "../removeDuplicatesFromSortedArray";

it("removeDuplicates", () => {
  expect(removeDuplicates([1, 1, 2])).toEqual([1, 2]);
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual([
    0, 1, 2, 3, 4,
  ]);
});

fit("remDup", () => {
  expect(remDup([1, 1, 2])).toEqual([1, 2]);
  expect(remDup([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual([0, 1, 2, 3, 4]);
});
