import "../styles/searchBox.css";
import recipeService from "../services/recipeService";
import renderRecipeList from "./recipeList";

var recipeSearchResultsTimeoutId;

const displayResults = () => {
  const query = document.querySelector(".searchBox").value;
  clearTimeout(recipeSearchResultsTimeoutId);
  recipeSearchResultsTimeoutId = setTimeout(() => searchRecipes(query), 500);
};

const searchRecipes = query => {
  recipeService.searchRecipes(query).then(results => renderRecipeList(results));
};

export default () => {
  const searchBox = document.createElement("input");
  searchBox.setAttribute("class", "searchBox");
  searchBox.setAttribute("type", "search");
  searchBox.setAttribute("placeholder", "Search term");
  searchBox.addEventListener("input", displayResults);
  document.getElementById("search").appendChild(searchBox);
};
