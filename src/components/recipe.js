import "../styles/recipe.css";

export default (recipeData, dark) =>
  `<a class="recipe ${dark ? "" : "dark"}" href="${recipeData.href}">${
    recipeData.title
  }</a>`;
