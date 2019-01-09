import {CLEAN_MESSAGES, FETCH_MESSAGES, SEND_MESSAGE} from '../actions/Types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_MESSAGES:
            return action.payload ? action.payload : {};
        case CLEAN_MESSAGES:
            return {};
        case SEND_MESSAGE:
            return {
                ...state,
            };
        default:
            return state;
    }
};