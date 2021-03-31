import React from "react";
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Card from './Card';
import MovieDetail from './MovieDetail';
import SearchForm from './SearchForm';
import api from '../utils/API';

export default class OmdbContainer extends React.Component {
    state = {
        term: '',
        movie: {}
    };

    search = (term) => {
        api.search(term)
            .then(response => this.setState({ movie: response.data }))
            .catch(error => console.log(error));
    };

    componentDidMount() {
        this.search('The Matrix');
    }

    onInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.search(this.state.term);
        this.setState({ term: '' });
    };

    render() {
        const { Title, Actors, Director, Genre, Released, Poster } = this.state.movie;

        return (
            <Container fluid={true}>
                <Row>
                    <Col size='col-8'>
                        <Card heading={this.state.movie.Title || 'Search a movie'}>
                            {
                                Title ? (
                                    <MovieDetail
                                    title={Title}
                                    actors={Actors}
                                    director={Director}
                                    genre={Genre}
                                    year={Released}
                                    src={Poster}
                                />    
                                ) : (
                                    <p>No Result</p>
                                )
                            }
                        </Card>
                    </Col>
                    <Col size='col-4'>
                        <Card heading='Search'>
                            <SearchForm
                                term={this.state.term}
                                onInputChange={this.onInputChange}
                                onFormSubmit={this.onFormSubmit}
                            />
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}