import { FILTER_HOTELS } from "../actions/types";
import moment from "moment";

const INITIAL_STATE = {
	list: "",
	available: "",
	partiallyAvailable: "",
	notAvailable: "",
	fromDate: moment(),
	toDate: moment()
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FILTER_HOTELS:
			return { ...state, ...action.payload };
		default: 
			return state;
	}
}