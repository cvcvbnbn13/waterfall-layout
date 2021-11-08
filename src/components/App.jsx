import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { imageList: [] };
  onSearchSubmit = async (term) => {
    const res = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ imageList: res.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList imageList={this.state.imageList} />
      </div>
    );
  }
}

export default App;
