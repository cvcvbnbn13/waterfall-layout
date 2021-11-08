import React from "react";

class SearchBar extends React.Component {
  state = { searchBarValue: "text here!" };
  handleInputChange = (e) => {
    this.setState({ searchBarValue: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.searchBarValue);
  };

  render() {
    return (
      <div className="ui segment">
        <form action="" onSubmit={this.handleFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              value={this.state.searchBarValue}
              onChange={this.handleInputChange}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
