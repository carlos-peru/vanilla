import React from "react";
import Recipe from "./Recipe";
import "../styles/RecipeList.css";

export default ({ recipesData }) => (
  <div className="recipeList">
    {recipesData.map((recipeData, index) => (
      <Recipe key={index} recipeData={recipeData} />
    ))}
  </div>
);
