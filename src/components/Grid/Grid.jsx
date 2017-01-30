import React, {PropTypes, Component} from 'react'; //eslint-disable-line
import LightRow from '../LightRow/LightRow'; //eslint-disable-line
const styles = require('./Grid.scss'); // eslint-disable-line


export default class Grid extends Component {

	static propTypes = {
		playerMoved: PropTypes.func,
		newGame: PropTypes.func
	}

	constructor(props){
		super(props);
		this.state = {
			height: 5,
			width: 5,
			newGame: true,
			gameWon: false
		};
		this.lightSwitched = this.lightSwitched.bind(this);
		this.startGame = this.startGame.bind(this);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if(nextState.height !== this.state.height
			|| nextState.width !== this.state.width
			|| nextState.newGame === true
			|| nextState.gameWon){
			return true;
		} else {
			return false;
		}
	}

	startGame() {
		const { newGame } = this.props;
		const height = Number(this.gameHeight.value);
		const width = Number(this.gameWidth.value);
		this.setState({
			height: height > 0 ? height : 5,
			width: width > 0 ? width : 5,
			newGame: true,
			gameWon: false
		});
		newGame();
		this.getRowsState();
	}

	getRows() {
		let rows = [];
		const { height } = this.state;
		for(let row = 0; row < height; row++){
			rows.push(row);
		}
		return rows;
	}

	lightSwitched(row, column) {
		this.updateBoard(row, column).then(() => {
			let state = this.state;
			const isWinner = this.checkForWin();
			state.gameWon = isWinner;
			if(isWinner) this.setState(state);
		});
	}

	updateBoard(row, column){
		return new Promise((resolve) => {
			const {playerMoved} = this.props;
			const left = this.refs[row].refs[column - 1];
			const right = this.refs[row].refs[column + 1];
			const state = this.state;
			let top;
			let bottom;
			if(state.newGame) {
				state.newGame = false;
				this.setState(state);
			}
			if(this.refs[row - 1]) top = this.refs[row - 1].refs[column];
			if(this.refs[row + 1]) bottom = this.refs[row + 1].refs[column];
			const lights = [left, right, top, bottom];
			for(let light of lights) {
				if(light) {
					light.remoteSwitch();
				}
			}
			playerMoved();
			resolve();
		});
	}

	getRowsState() {
		let componentRowsState = [];
		for(let row = 0; row < this.state.height; row ++){
			componentRowsState.push(this.refs[row].checkRowOff());
		}
		return componentRowsState;
	}

	checkForWin() {
		let componentRowsState = this.getRowsState();
		const rowOff = (isOff) => isOff;
		return componentRowsState.every(rowOff);
	}

	render() {
		const rows = this.getRows();
		const { width } = this.state;
		return (
			<div className="game-grid">
				{this.state.gameWon &&
					<h1>Winner!</h1>
				}
				<input type="number" ref={(height) => {this.gameHeight = height;}} placeholder="height" className="game_height"></input>
				<input type="number" ref={(width) => {this.gameWidth = width;}} placeholder="height" className="game_width"></input>
				<button onClick={this.startGame}>start game</button>
				<div>
					{rows.map((item, idx) => <LightRow lightSwitched={this.lightSwitched} key={idx} ref={idx} row={idx} width={width}/>)}
				</div>
			</div>
		);
	}
}
