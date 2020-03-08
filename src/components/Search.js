import React, { Component } from "react";

export class Search extends Component {
  state = {
    term: ""
  };
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label>Video Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default Search;
