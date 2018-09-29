import React from "react";
import Recipe from "./Recipe";
import "../styles/RecipeList.css";

export default ({ recipesData }) =>
  recipesData && recipesData.length ? (
    <div className="recipeList">
      {recipesData.map((recipeData, index) => (
        <Recipe key={index} recipeData={recipeData} />
      ))}
    </div>
  ) : (
    ""
  );

const recipeListBuilder = (currentRecipeList, recipeData) =>
  currentRecipeList + renderRecipe(recipeData);
