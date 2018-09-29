import React from "react";
import Header from "./Header";
import SearchBox from "./SearchBox";
import config from "../config";
import recipeService from "../services/recipeService";
import stringUtils from "../utils/stringUtils";
import RecipeList from "./RecipeList";
import ErrorMessage from "./ErrorMessage";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: null,
      error: false,
      recipeSearchResultsTimeoutId: null,
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(query) {
    if (stringUtils.isBlank(query)) {
      return;
    } else if (!stringUtils.isAlphaNumericWithSpaces(query)) {
      this.setState(() => ({ recipes: null, error: true }));
    } else {
      this.searchRecipesWithDebounce(query);
    }
  }

  searchRecipesWithDebounce(query) {
    clearTimeout(this.state.recipeSearchResultsTimeoutId);
    const recipeSearchResultsTimeoutId = setTimeout(
      () => this.searchRecipes(query),
      config.debounceThreshold,
    );
    this.setState(() => ({ recipeSearchResultsTimeoutId }));
  }

  searchRecipes(query) {
    recipeService
      .searchRecipes(query)
      .then(recipes => this.setState({ recipes, error: false }));
  }

  render() {
    const { recipes, error } = this.state;
    return (
      <div>
        <Header />
        <SearchBox onSearchChange={this.handleSearchChange} />
        {error && <ErrorMessage />}
        {recipes && <RecipeList recipesData={recipes} />}
      </div>
    );
  }
}
