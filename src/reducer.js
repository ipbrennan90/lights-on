import { Map } from 'immutable';
import { turnLightOnAt, checkBoardForWin, boardCreator } from './helpers/board_helper';

const setState = (state, newState) => {
	return state.merge(newState);
};

const move = (state) => {
	return state.updateIn(['game', 'moves'],
		0,
		moves => moves + 1
	);
};

const switchLight = (state, row, column) => {
	let board = state.getIn(['game', 'rows']).toJS();
	const newBoard = turnLightOnAt(row, column, board);
	return state.updateIn(['game', 'rows'],
		rows => newBoard
	);
};

const checkForWin = (state) => {
	const board = state.getIn(['game', 'rows']).toJS();
	const didWin = checkBoardForWin(board);
	if(didWin) {
		return state.updateIn(['game', 'hasWon'],
			hasWon => didWin
		);
	} else {
		return state;
	}
};

const resetGame= (state) => {
	const rowElements = state.getIn(['game', 'rows']).toJS();
	const rows = rowElements.length;
	const columns = rowElements[0].length;
	const newState = {
		game: {
			rows: boardCreator(rows, columns),
			hasWon: false,
			moves: 0,
		}
	};

	return state.merge(newState);
};

export default function(state = Map(), action) {
	switch (action.type) {
	case 'SET_STATE':
		return setState(state, action.state);
	case 'MOVE':
		return move(state);
	case 'SWITCH_LIGHT':
		return switchLight(move(state), action.row, action.column);
	case 'CHECK_WIN':
		return checkForWin(state);
	case 'RESET_GAME':
		return resetGame(state);
	}

	return state;
}
