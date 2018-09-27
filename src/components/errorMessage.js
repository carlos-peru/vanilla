import "../styles/errorMessage.css";

export default display => {
  document.getElementById("error").innerHTML = display
    ? "<div class='error'>You can only enter alphanumeric values.</div>"
    : "";
};
