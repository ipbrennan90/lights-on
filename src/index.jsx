import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { boardCreator } from './helpers/board_helper';
import GameContainer from './Containers/GameContainer/GameContainer';
const store = createStore(reducer);
store.dispatch({
	type: 'SET_STATE',
	state: {
		game: {
			rows: boardCreator(5,5),
			hasWon: false,
			moves: 0,
			height: 5,
			width: 5
		}
	}
});

ReactDOM.render(
	<Provider store={store}>
		<GameContainer/>
	</Provider>,
	document.getElementById('app')
);
