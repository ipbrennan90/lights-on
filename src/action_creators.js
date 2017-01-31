
export const setReduxState = (state) => {
	console.log('Setting State');
	return {
		type: 'SET_STATE',
		state
	};
};

export const switchLight = (state, row, column) => {
	console.log('Switching Light');
	return {
		type: 'SWITCH_LIGHT',
		state,
		row: row,
		column: column
	};
};

export const checkForWin = (state) => {
	console.log('Checking for win');
	return {
		type: 'CHECK_WIN',
		state
	};
};
