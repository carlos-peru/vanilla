import "../styles/recipe.css";

export default recipeData =>
  `<a class="recipe" href="${recipeData.href}">${recipeData.title}</a>`;
