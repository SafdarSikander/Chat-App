import {combineReducers} from 'redux';
import user from './user';
import spinner from './spinner';
import movies from './movies';
import messages from './messages';

export default combineReducers({
    user,
    spinner,
    movies,
    messages
});
