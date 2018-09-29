import React from "react";
import "../styles/Recipe.css";

export default ({ recipeData }) => (
  <a className="recipe" href={recipeData.href}>
    <img src={recipeData.thumbnail} />
    <p>{recipeData.title}</p>
  </a>
);
