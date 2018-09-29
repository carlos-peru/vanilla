import React from "react";
import "../styles/ErrorMessage.css";

export default display =>
  display ? (
    <div className="error">You can only enter alphanumeric values.</div>
  ) : null;
