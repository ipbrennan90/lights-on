import React, {Component} from 'react';
import Grid from '../Grid/Grid'

export default class GameContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: 5,
			width: 5,
		};
		this.startGame = this.startGame.bind(this);
	}

	startGame() {
		const height = Number(this.gameHeight.value);
		const width = Number(this.gameWidth.value);
		this.setState({
			height: height > 0 ? height : 5,
			width: width > 0 ? width : 5
		});
	}


	render() {
		return(
			<div className="game_container">
				<input type="number" ref={(height) => {this.gameHeight = height}} placeholder="height" className="game_height"></input>
				<input type="number" ref={(width) => {this.gameWidth = width}} placeholder="height" className="game_width"></input>
				<button onClick={this.startGame}>Start Game</button>
				<Grid width={this.state.width} height={this.state.height}/>
			</div>
		)
	}


}
