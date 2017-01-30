import { List } from 'immutable';
export const boardCreator = (rows, columns) => {
	let board = [];
	for(let row = 0; row < rows; rows ++) {
		let rowArray = [];
		for(let column = 0; column < columns; columns ++) {
			rowArray.push(Math.round(Math.random()));
		}
		board.push(rowArray);
	}
	return board;
};

const lightValue = (light) => {
	const newLight = light === 0 ? 1 : 0;
	return newLight;
};

const boardToList = (board) => {
	let listBoard = List();
	for(let boardRow of board) {
		listBoard = listBoard.push(List(boardRow));
	}
	return listBoard;
};

export const turnLightOnAt = (row, column, board) => {
	let newBoard = board;
	const boardHeight = board.length;
	const boardWidth = board[0].length;
	if(column + 1 < boardWidth) {
		newBoard[row][column + 1] = lightValue(newBoard[row][column + 1]);
	}
	if(column - 1 >= 0) {
		newBoard[row][column - 1] = lightValue(newBoard[row][column - 1]);
	}
	if(row + 1 < boardHeight) {
		newBoard[row + 1][column] = lightValue(newBoard[row + 1][column]);
	}
	if(row - 1 >= 0) {
		newBoard[row - 1][column] = lightValue(newBoard[row - 1][column]);
	}
	newBoard[row][column] = lightValue(newBoard[row][column]);
	return boardToList(newBoard);
};
