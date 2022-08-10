import { combineReducers } from 'redux';
import list from './list';
import search from './search';
import credits from './credits';

const rootReducer = combineReducers({
    list,
    search,
    credits,
});

export default rootReducer;