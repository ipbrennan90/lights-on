import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from './components/GameContainer/GameContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { boardCreator } from './helpers/board_helper';
const store = createStore(reducer);
store.dispatch({
	type: 'SET_STATE',
	state: {
		game: boardCreator(),
		hasWon: false
	}
});
ReactDOM.render(
	<Provider store={store}>
		<GameContainer/>
	</Provider>,
	document.getElementById('app')
);
