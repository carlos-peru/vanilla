const searchRecipes = (query, page) =>
  fetch(`http://localhost:3000/recipes/search?query=${query}&page=${page}`)
    .then(response => response.json())
    .then(jsonResponse => jsonResponse);

export default {
  searchRecipes,
};
