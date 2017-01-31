import React, {Component, PropTypes} from 'react'; //eslint-disable-line
import { connect } from 'react-redux';
import Favicon from 'react-favicon';
import * as actionCreators from '../../action_creators';
import Grid from '../../components/Grid/Grid';

class GameContainer extends Component {
	static propTypes = {
		switchLight: PropTypes.func,
		rows: PropTypes.object,
		hasWon: PropTypes.bool,
		moves: PropTypes.number,
		setReduxState: PropTypes.func,
		globalState: PropTypes.object,
		checkForWin: PropTypes.func,
		resetGame: PropTypes.func
	}

	componentWillReceiveProps(){
		const { checkForWin, globalState, hasWon, resetGame } = this.props;
		if(hasWon) {
			resetGame();
		}
		checkForWin(globalState);
	}

	render() {
		return(
			<div>
				<Favicon url={['/favicon.ico']}/>
				<Grid
					setReduxState={this.props.setReduxState}
					switchLight={this.props.switchLight}
					rows={this.props.rows}
					hasWon={this.props.hasWon}
					moves={this.props.moves}
					globalState={this.props.globalState}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		globalState: state,
		game: state.get('game'),
		rows: state.getIn(['game', 'rows']),
		hasWon: state.getIn(['game', 'hasWon']),
		moves: state.getIn(['game','moves'])
	};
};

export { GameContainer };
export default connect(mapStateToProps, actionCreators)(GameContainer);
