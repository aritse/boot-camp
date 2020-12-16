import { Component } from 'react';
import SearchForm from './SearchForm';
import ResultList from './ResultList';
import API from '../utils/API';

export default class SearchResultContainer extends Component {
  state = { search: '', result: [] }

  searchGiphy = (query) => {
    API.search(query)
      .then(({data: {data}}) => this.setState({result: data}))
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.searchGiphy('kitten');
  }

  onChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  onClick = (event) => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
    this.setState({search: ''});
  }

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          onClick={this.onClick}
          onChange={this.onChange}/>
        <ResultList result={this.state.result}/>
      </div>
    )
  }
}