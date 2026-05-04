import { ACTION_TYPE } from "../actions";

const initialAppState = {
	wasLoggedOut: false,
};

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPE.LOGOUT:
			return {
				...state,
				wasLoggedOut: !state.wasLoggedOut,
			}
		default:
			return state;
	}
};
