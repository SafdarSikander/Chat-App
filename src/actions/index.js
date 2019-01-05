import firebase from '../utils/firebase';
import {ERROR, LOADING, LOGIN, REGISTER, FETCH_MOVIES, FETCH_MOVIE} from "./Types";
import server from '../utils/server';

export const createUser = (email, password, onSuccess, onError) => async (dispatch) => {
    dispatch(loading(true, 'Registering...'));
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        dispatch(loading(false));
        dispatch({type: REGISTER, payload: response.user});
        onSuccess();
    } catch (err) {
        dispatch(loading(false));
        dispatch({
            type: ERROR,
            payload: {
                // TODO: Implements Error codes
                error: err.toString()
            }
        });
        onError(err.toString());
    }
};

export const login = (email, password, onSuccess, onError) => async (dispatch) => {
    dispatch(loading(true, 'Signing in'));
    try {
        const response = await firebase.auth().signInWithEmailAndPassword(email, password);
        dispatch(loading(false));
        dispatch({type: LOGIN, payload: response.user});
        onSuccess();
    } catch (err) {
        dispatch(loading(false));
        dispatch({
            type: ERROR, payload: {
                // TODO: Implements Error codes
                error: err.toString()
            }
        });
        onError(err);
    }
};

export const fetchMovies = (onSuccess, onError) => async dispatch => {
    dispatch(loading(true, 'Fetching Movies...'));
    try {
        const response = await server.get('mobile/movies.json');
        dispatch(loading(false));
        dispatch({type: FETCH_MOVIES, payload: response.data});
        onSuccess();
    } catch (err) {
        dispatch(loading(false));
        dispatch({
            type: ERROR, payload: {
                // TODO: Implements Error codes
                error: err.toString()
            }
        });
        onError(err);
    }
};

const loading = (isLoading, text = "") => ({
    type: LOADING,
    payload: {isLoading, text}
});