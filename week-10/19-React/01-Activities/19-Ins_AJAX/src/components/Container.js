import React from 'react';
import Search from './Search';
import Result from './Result';
import Giphy from '../api/Giphy';

export default class Container extends React.Component {
  state = {
    term: '',
    result: []
  };
  
  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onButtonClick = (event) => {
    event.preventDefault();
    this.search(this.state.term);
    this.setState({ term: '' });
  };

  search = (term) => {
    Giphy.search(term)
      .then(response => this.setState({ result: response.data.data }))
      .catch(error => console.log(error))
  };

  componentDidMount() {
    this.search('dog');
  }

  render() {
    return (
      <div>
        <Search
          term={this.state.term}
          onInputChange={this.onInputChange}
          onButtonClick={this.onButtonClick}
        />
        <Result result={this.state.result} />
      </div>
    )
  }
}