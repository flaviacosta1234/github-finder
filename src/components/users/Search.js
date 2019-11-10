import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: ""
  };

  render() {
    return (
      <div>
        <form className="form"></form>
        <input
          type="text"
          name="text"
          placeholder="Seach users..."
          value={this.state.text}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </div>
    );
  }
}

export default Search;
