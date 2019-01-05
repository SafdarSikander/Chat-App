import {LOADING} from "../actions/Types";

const INITIAL_STATE = {
    isLoading: false,
    text: ''
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING:
            return action.payload;
        default:
            return state;
    }
}