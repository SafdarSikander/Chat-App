import firebase from '../utils/firebase';
import {ERROR, LOADING, LOGIN, REGISTER} from "./Types";

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

const loading = (isLoading, text = "") => ({
    type: LOADING,
    payload: {isLoading, text}
});