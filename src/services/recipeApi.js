import config from "../config";

const searchRecipes = (query, page) =>
  fetch(config.recipeApi.searchEndpoint(query, page))
    .then(response => response.json())
    .then(jsonResponse => jsonResponse);

export default {
  searchRecipes,
};
