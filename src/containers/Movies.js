import React from 'react';
import {Body, Container, Content, Header, Left, List, Title} from "native-base";
import HeaderBackButton from "../components/HeaderBackButton";
import Constants from "../utils/Constants";
import Movie from "../components/Movie";
import {connect} from 'react-redux';
import {fetchMovies} from '../actions'
import Spinner from "react-native-loading-spinner-overlay";

class Movies extends React.Component {


    componentDidMount() {
        this.props.fetchMovies(
            //onSuccess
            () => console.log("movies downloaded"),
            // onError
            () => alert('Error while fetching movies')
        );
    }

    _onMovieSelect = (id) => {
        alert(id);
    };

    render() {
        const {navigation, spinner, movies} = this.props;
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
                <Spinner
                    textContent={spinner.text}
                    visible={spinner.isLoading}/>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.movies.allMovies);
    return {
        movies: Object.values(state.movies.allMovies), // converting movies object to array
        selectedMovie: state.movies.selectedMovie,
        spinner: state.spinner
    }
};

export default connect(mapStateToProps, {fetchMovies})(Movies);