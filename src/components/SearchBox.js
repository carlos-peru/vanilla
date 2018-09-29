import React from "react";
import config from "../config";
import recipeService from "../services/recipeService";
import stringUtils from "../utils/stringUtils";
import "../styles/SearchBox.css";
// import renderRecipeList from "./recipeList";
// import renderError from "./errorMessage";

// var recipeSearchResultsTimeoutId;

// const displayResults = () => {
//   const query = document.querySelector(".searchBox").value;
//   if (stringUtils.isBlank(query)) {
//     return;
//   } else if (!stringUtils.isAlphaNumericWithSpaces(query)) {
//     displayError();
//   } else {
//     searchRecipesWithDebounce(query);
//   }
// };

// const searchRecipesWithDebounce = query => {
//   clearTimeout(recipeSearchResultsTimeoutId);
//   recipeSearchResultsTimeoutId = setTimeout(
//     () => searchRecipes(query),
//     config.debounceThreshold,
//   );
// };

// const searchRecipes = query => {
//   recipeService
//     .searchRecipes(query)
//     .then(results => displayRecipeList(results));
// };

// const displayError = () => {
//   renderRecipeList(null);
//   renderError(true);
// };

// const displayRecipeList = results => {
//   renderError(false);
//   renderRecipeList(results);
// };

export default () => (
  <input type="search" className="searchBox" placeholder="Search term" />
);

// export default () => {
//   const searchBox = document.createElement("input");
//   searchBox.setAttribute("class", "searchBox");
//   searchBox.setAttribute("type", "search");
//   searchBox.setAttribute("placeholder", "Search term");
//   searchBox.addEventListener("input", displayResults);
//   document.getElementById("search").appendChild(searchBox);
// };
