import { UPDATE_FORM } from "../actions/types";

const INITIAL_STATE = {
	hotelName: "",
	fromDate: null,
	toDate: null,
	disabledToDate: true
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case UPDATE_FORM:
			return { ...state, ...action.payload };
		default: 
			return state;
	}
}