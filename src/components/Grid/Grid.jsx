import React, {PropTypes, PureComponent} from 'react'; //eslint-disable-line
const styles = require('./Grid.scss'); // eslint-disable-line
import { boardCreator } from '../../helpers/board_helper';
import LightRow from '../LightRow/LightRow'; //eslint-disable-line


export default class Grid extends PureComponent {

	static propTypes = {
		setReduxState: PropTypes.func,
		switchLight: PropTypes.func,
		globalState: PropTypes.object,
		rows: PropTypes.object,
		moves: PropTypes.number,
	}

	constructor(props){
		super(props);
		this.startGame = this.startGame.bind(this);
		this.getGameButtonText = this.getGameButtonText.bind(this);
	}

	startGame() {
		const { setReduxState } = this.props;
		const height = this.gameHeight.value;
		const width = this.gameWidth.value;
		const newGame = {
			game: {
				rows: boardCreator(height > 0 ? height : 5, width > 0 ? width : 5),
				hasWon: false,
				moves: 0
			}
		};
		setReduxState(newGame);
	}

	getRows() {
		let rows = [];
		const { height } = this.state;
		for(let row = 0; row < height; row++){
			rows.push(row);
		}
		return rows;
	}

	getGameButtonText() {
		const {moves} = this.props;
		const buttonText = moves > 0 ? 'reset game' : 'start game';
		return buttonText;
	}

	render() {
		const moves = this.props.moves ? this.props.moves : 0;
		const rows = this.props.rows ? this.props.rows : [];
		const winner = typeof this.props.hasWon !== undefined ? this.props.hasWon : false;

		return (
			<div className="games-container">
				<div className="game-grid">
					{winner &&
						<h1>WINNER!</h1>
					}
					{!winner &&
						<h1>MOVES: {moves}</h1>
					}
					<input type="number" ref={(height) => {this.gameHeight = height;}} placeholder="height" className="game_height"></input>
					<input type="number" ref={(width) => {this.gameWidth = width;}} placeholder="width" className="game_width"></input>
					<button className="start-game" onClick={this.startGame}>{this.getGameButtonText()}</button>
					<div className="lights">
						{rows.map((lights, idx) => <LightRow switchLight={this.props.switchLight} globalState={this.props.globalState} key={idx} row={idx} lights={lights}/>)}
					</div>
				</div>
			</div>
		);
	}
}
