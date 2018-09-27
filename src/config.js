export default {
  debounceThreshold: 500,
  recipeApi: {
    // TODO: Move this to ENV variable.
    searchEndpoint: (query, page) =>
      `http://localhost:3000/recipes/search?query=${query}&page=${page}`,
  },
};
