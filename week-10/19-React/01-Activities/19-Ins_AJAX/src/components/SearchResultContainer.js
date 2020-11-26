import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchGiphy("kittens");
  }

  searchGiphy = query => {
    API.search(query)
      .then(({ data: { data } }) => this.setState({ results: data }))
      .catch(err => console.log(err));
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    return (
      <div>
        <SearchForm search={this.state.search} handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
