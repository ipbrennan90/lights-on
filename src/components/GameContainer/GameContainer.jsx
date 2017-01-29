import React, {Component} from 'react';
import Grid from '../Grid/Grid';

export default class GameContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moves: 0
		};
		this.playerMoved = this.playerMoved.bind(this);
		this.newGame = this.newGame.bind(this);
	}

	newGame () {
		this.setState({moves: 0});
	}

	playerMoved() {
		const moves = this.state.moves;
		this.setState({moves: moves + 1});
	}


	render() {
		return(
			<div className="game_container">
				<h4>Moves: {this.state.moves}</h4>
				<Grid playerMoved={this.playerMoved} newGame={this.newGame}/>
			</div>
		)
	}


}
