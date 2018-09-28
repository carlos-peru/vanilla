import arrayUtils from "./arrayUtils";

describe("#appendArrayElementsWithLimitAndCondition", () => {
  describe("when the added length of the two arrays", () => {
    const array1 = [
      { thumbnail: 1 },
      { thumbnail: 2 },
      { thumbnail: 3 },
      { thumbnail: 4 },
      { thumbnail: 5 },
    ];
    const array2 = [
      { thumbnail: 6 },
      { thumbnail: 7 },
      { thumbnail: 8 },
      { thumbnail: 9 },
      { thumbnail: 10 },
    ];

    describe("is more than the limit", () => {
      it("returns the as many elements as the limit sets", () => {
        const limit = 6;
        arrayUtils.appendArrayElementsWithLimitAndCondition(
          array1,
          array2,
          limit,
          "thumbnail",
        );
        expect(array1.length).toEqual(limit);
      });
    });

    describe("is less than the limit", () => {
      it("returns less than limit when", () => {
        const limit = 10;
        arrayUtils.appendArrayElementsWithLimitAndCondition(
          array1,
          array2,
          limit,
        );
        expect(array1.length).toBeLessThan(limit);
      });
    });
  });

  describe("when some elements don't have the condition property with a truthy value", () => {
    it("does not append them", () => {
      const array1 = [];
      const array2 = [
        { url: null },
        { url: 7 },
        { name: 8 },
        { name: 9 },
        { url: 10 },
      ];
      const limit = 10;
      arrayUtils.appendArrayElementsWithLimitAndCondition(
        array1,
        array2,
        limit,
        "url",
      );
      expect(array1.length).toEqual(2);
    });
  });
});
