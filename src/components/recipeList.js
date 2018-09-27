import renderRecipe from "./recipe";

export default recipesData => {
  document.getElementById("results").innerHTML = recipesData
    ? `<div class="recipeList">${recipesData.reduce(
        recipeListBuilder,
        "",
      )}</div>`
    : "";
};

const recipeListBuilder = (currentRecipeList, recipeData) =>
  currentRecipeList + renderRecipe(recipeData);
