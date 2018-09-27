import "../styles/searchBox.css";

export default () => {
  const searchBox = document.createElement("input");
  searchBox.setAttribute("class", "searchBox");
  searchBox.setAttribute("type", "search");
  searchBox.setAttribute("placeholder", "Search term");
  document.getElementById("search").appendChild(searchBox);
};
