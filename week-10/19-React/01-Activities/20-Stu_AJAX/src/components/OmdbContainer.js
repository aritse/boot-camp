import {Component} from 'react';
import SearchForm from './SearchForm';
import API from '../utils/API';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Card from './Card';
import MovieDetail from './MovieDetail';

export default class OmdbContainer extends Component {
  state = {
    search: '',
    result: {}
  };

  componentDidMount() {
    this.searchMovie('the matrix');
  }

  searchMovie = (query) => {
    API.search(query)
      .then(response => this.setState({result: response.data}))
      .catch(error => console.log(error));
  }

  onChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  onClick = (event) => {
    event.preventDefault();
    this.searchMovie(this.state.search);
    this.setState({search: ''});
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size='md-8'>
            <Card heading={this.state.result.Title || 'Search for a movie to begin'}>
              {
                this.state.result.Title ? (
                  <MovieDetail
                    src={this.state.result.Poster}
                    title={this.state.result.Title}
                    genre={this.state.result.Genre}
                    released={this.state.result.Released}
                    director={this.state.result.Director}
                  />
                ) : (
                  <p>No Result</p>
                )
              }
            </Card>
          </Col>
          <Col size='md-4'>
            <Card heading='Search'>
              <SearchForm
                search={this.state.search}
                onChange={this.onChange}
                onClick={this.onClick}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}