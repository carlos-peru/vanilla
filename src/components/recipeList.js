import "../styles/recipeList.css";
import renderRecipe from "./recipe";

export default recipesData => {
  document.getElementById("results").innerHTML = recipesData
    ? `<div class="recipeList">${recipesData.reduce(
        recipeListBuilder,
        "",
      )}</div>`
    : "";
};

const recipeListBuilder = (currentRecipeList, recipeData, index) =>
  currentRecipeList + renderRecipe(recipeData, index % 2);
