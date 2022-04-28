const {
  removeDuplicatesA,
  removeDuplicatesB,
} = require("../removeDuplicatesFromSortedArray");

it("removeDuplicates", () => {
  expect(removeDuplicatesA([1, 1, 2])).toEqual(2);
  expect(removeDuplicatesA([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
});

it("remDup", () => {
  expect(removeDuplicatesB([1, 1, 2])).toEqual(2);
  expect(removeDuplicatesB([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
});
