import {ERROR, LOGIN, REGISTER} from "../actions/Types";

const INITIAL_STATE = {
    email: null,
    error: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                email: action.payload.email,
                error: null
            };
        case REGISTER:
            return {
                email: null,
                error: null
            };
        case ERROR:
            console.log(action.payload);
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};