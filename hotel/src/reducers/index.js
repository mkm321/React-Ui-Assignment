import { combineReducers } from 'redux';
import hotels from './hotels_reducer';
import searchform from './searchform_reducer';

const rootReducer = combineReducers({
	hotels,
	searchform
});

export default rootReducer;