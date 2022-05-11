const { removeElement } = require("../removeElement");

it("removeElement", () => {
  expect(removeElement([3, 2, 2, 3], 3)).toEqual([2, 2, null, null]);
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual([
    0,
    1,
    3,
    0,
    4,
    null,
    null,
    null,
  ]);
});
