import {ERROR, LOGIN, REGISTER} from "../actions/Types";

const INITIAL_STATE = {
    userInfo: null,
    error: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                UserInfo: action.payload
            };
        case REGISTER:
            return {
                ...state,
                userInfo: action.payload
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