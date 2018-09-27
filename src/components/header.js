import "../styles/header.css";

export default () => {
  const header = `
  <div>Recipe finer</div>
  <nav>
      <a href="#home">Home</a>
  </nav>`;
  document.getElementsByTagName("header")[0].innerHTML = header;
};
