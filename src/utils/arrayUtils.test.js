import arrayUtils from "./arrayUtils";

describe("#appendArrayElementsWithLimit", () => {
  describe("when the added length of the two arrays is more than the limit", () => {
    it("returns the as many elements as the limit sets", () => {
      const array1 = [1, 2, 3, 4, 5];
      const array2 = [6, 7, 8, 9, 10];
      const limit = 6;
      arrayUtils.appendArrayElementsWithLimit(array1, array2, limit);
      expect(array1.length).toEqual(limit);
    });
  });
  describe("when the added length of the two arrays is less than the limit", () => {
    it("returns less than limit when", () => {
      const array1 = [1, 2, 3];
      const array2 = [4, 5, 6];
      const limit = 10;
      arrayUtils.appendArrayElementsWithLimit(array1, array2, limit);
      expect(array1.length).toBeLessThan(limit);
    });
  });
});
