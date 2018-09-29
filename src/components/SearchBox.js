import React from "react";
import "../styles/SearchBox.css";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSearchChange(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="search"
          className="searchBox"
          placeholder="Search term"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
