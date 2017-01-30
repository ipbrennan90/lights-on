import React, {Component} from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import Grid from '../Grid/Grid'; // eslint-disable-line
const styles = require("./GameContainer.scss"); // eslint-disable-line

class GameContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			moves: 0
		};
		this.playerMoved = this.playerMoved.bind(this);
		this.newGame = this.newGame.bind(this);
		console.log(props);
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
			<div className="games-container">
				<div className="moves">
					<div className="moves-display">
						<h4>Moves: {this.state.moves}</h4>
					</div>
				</div>
				<Grid ref={(grid) => {this.grid = grid;}} className="games-container" playerMoved={this.playerMoved} newGame={this.newGame}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		game: state.get('game'),
		hasWon: state.get('hasWon')
	};
};

export { GameContainer };
export default connect(mapStateToProps)(GameContainer);
