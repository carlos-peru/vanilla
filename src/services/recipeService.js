import recipeApi from "./recipeApi";
import arrayUtils from "../utils/arrayUtils";

const searchRecipes = (query, limit = 20) => {
  const recipeSearchResults = [];
  let page = 1;
  return new Promise(resolve =>
    resolveRecipeSearch(query, page, limit, recipeSearchResults, resolve),
  );
};

const resolveRecipeSearch = (
  query,
  page,
  limit,
  recipeSearchResults,
  resolve,
) => {
  recipeApi.searchRecipes(query, page).then(recipeList => {
    if (!recipeList.length) {
      resolve(recipeSearchResults);
      return;
    }
    arrayUtils.appendArrayElementsWithLimitAndCondition(
      recipeSearchResults,
      recipeList,
      limit,
      "thumbnail",
    );
    if (recipeSearchResults.length === limit) {
      resolve(recipeSearchResults);
    } else {
      page++;
      resolveRecipeSearch(query, page, limit, recipeSearchResults, resolve);
    }
  });
};

export default {
  searchRecipes,
};
