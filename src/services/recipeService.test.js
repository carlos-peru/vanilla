import recipeService from "./recipeService";
import recipeApi from "./recipeApi";

describe("#searchRecipes", () => {
  beforeEach(() => {
    recipeApi.searchRecipes = jest.fn((query, page) => {
      return Promise.resolve([
        `recipe${page * 3 + 1}`,
        `recipe${page * 3 + 2}`,
        `recipe${page * 3 + 3}`,
      ]);
    });
  });

  describe("when uses the default limit", () => {
    const defaultLimit = 20;

    it("returns the as many elements as the default limit", () => {
      return recipeService
        .searchRecipes("garlic")
        .then(recipeList => expect(recipeList.length).toEqual(defaultLimit));
    });

    it("should call api the minimum amount necessary to hit the limit", () => {
      const searchSpy = jest.spyOn(recipeApi, "searchRecipes");
      const itemtsPerCall = 3;
      const shouldBeCalled = Math.floor(defaultLimit / itemtsPerCall) + 1;
      return recipeService
        .searchRecipes("garlic")
        .then(recipeList =>
          expect(searchSpy).toHaveBeenCalledTimes(shouldBeCalled),
        );
    });
  });

  describe("when sets a limit", () => {
    const limit = 10;

    it("returns the as many elements as the set limit", () => {
      return recipeService
        .searchRecipes("garlic", limit)
        .then(recipeList => expect(recipeList.length).toEqual(limit));
    });

    it("should call api the minimum amount necessary to hit the limit", () => {
      const itemtsPerCall = 3;
      const shouldBeCalled = Math.floor(limit / itemtsPerCall) + 1;
      const searchSpy = jest.spyOn(recipeApi, "searchRecipes");
      return recipeService
        .searchRecipes("garlic", limit)
        .then(recipeList =>
          expect(searchSpy).toHaveBeenCalledTimes(shouldBeCalled),
        );
    });
  });
});
