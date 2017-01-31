
export const setReduxState = (state) => {
	return {
		type: 'SET_STATE',
		state
	};
};

export const switchLight = (state, row, column) => {
	return {
		type: 'SWITCH_LIGHT',
		state,
		row: row,
		column: column
	};
};

export const checkForWin = (state) => {
	return {
		type: 'CHECK_WIN',
		state
	};
};
