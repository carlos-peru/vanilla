import "../styles/errorMessage.css";

export default () => {
  document.getElementById("error").innerHTML =
    "<div class='error'>You can only enter alphanumeric values.</div>";
};
