import "../styles/recipe.css";

export default recipeData =>
  `<a class="recipe" href="${recipeData.href}">
    <img src="${recipeData.thumbnail}">
    <p>${recipeData.title}</p>
  </a>`;
