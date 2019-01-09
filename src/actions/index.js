import firebase from '../utils/firebase';
import {ERROR, LOADING, LOGIN, REGISTER, FETCH_MOVIES, FETCH_MOVIE, FETCH_MESSAGES, CLEAN_MESSAGES} from "./Types";
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

export const fetchMovies = (onError) => async dispatch => {
    dispatch(loading(true, 'Fetching Movies...'));
    try {
        const response = await server.get('mobile/movies.json');
        dispatch(loading(false));
        dispatch({type: FETCH_MOVIES, payload: response.data});
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

export const fetchMovie = (id, onSuccessCallback) => async (dispatch, getState) => {
    const movie = getState().movies.allMovies[id];
    dispatch({type: FETCH_MOVIE, payload: movie});
    onSuccessCallback();
};

export const fetchMessages = (movieTitle, onSuccessCallback, onErrorCallback) => async (dispatch) => {
    dispatch(loading(true, 'Fetching Messages...'));
    try {
        await firebase.database().ref(`${movieTitle}`).on("value", snapshot => {
            dispatch(loading(false));
            dispatch({type: FETCH_MESSAGES, payload: snapshot.val()});
            onSuccessCallback();
        });
    } catch (err) {
        onErrorCallback(err.toString());
    }
};

export const sendMessage = (data, onSuccessCallback, onErrorCallback) => async dispatch => {
    dispatch(loading(true, 'Sending message'));
    try {
        await firebase.database().ref(`${data.title}`).push({
            user: data.user.substr(0, data.user.indexOf('@')), // extracting name from email
            message: data.message,
            time: data.time
        });
        dispatch(loading(false));
        onSuccessCallback();
    } catch (e) {
        dispatch(loading(false));
        onErrorCallback(e.toString());
    }
};

export const cleanMessages = () => ({
    type: CLEAN_MESSAGES
});

const loading = (isLoading, text = "") => ({
    type: LOADING,
    payload: {isLoading, text}
});