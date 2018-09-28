import "../styles/header.css";

export default () => {
  const header = `<div>My Recipes</div>`;
  document.getElementsByTagName("header")[0].innerHTML = header;
};
