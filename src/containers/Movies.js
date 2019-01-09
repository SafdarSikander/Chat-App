import React from 'react';
import {Body, Container, Content, Header, Left, List, Title} from "native-base";
import HeaderBackButton from "../components/HeaderBackButton";
import Constants from "../utils/Constants";
import Movie from "../components/Movie";
import {connect} from 'react-redux';
import {fetchMovies, fetchMovie} from '../actions';


class Movies extends React.Component {


    componentDidMount() {
        this.props.fetchMovies(
            // onError
            () => alert('Error while fetching movies')
        );
    }

    _onMovieSelect = (id) => {
        this.props.fetchMovie(id,
            //onSuccess
            () => this.props.navigation.navigate(Constants.Screens.CHAT)
        )
    };

    render() {
        const {navigation, movies} = this.props;
        return (
            <Container>
                <Header>
                    <Left>
                        <HeaderBackButton onPress={() => navigation.goBack()}/>
                    </Left>
                    <Body>
                    <Title>{Constants.Labels.MOVIES}</Title>
                    </Body>
                </Header>
                <Content>
                    <List dataArray={movies}
                          renderRow={({rank, title}) =>
                              <Movie
                                  key={rank}
                                  onPress={() => this._onMovieSelect(rank)}
                                  title={title}
                              />
                          }>
                    </List>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: Object.values(state.movies.allMovies), // converting movies object to array
        selectedMovie: state.movies.selectedMovie,
    }
};

export default connect(mapStateToProps, {fetchMovies, fetchMovie})(Movies);