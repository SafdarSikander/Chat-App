import _ from 'lodash';
import {FETCH_MOVIE, FETCH_MOVIES} from '../actions/Types';

const INITIAL_STATE = {
    allMovies: {},
    selectedMovie: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                allMovies: {..._.mapKeys(action.payload, 'rank')} // converting movies array to object
            };
        case FETCH_MOVIE:
        default:
            return state;
    }
};