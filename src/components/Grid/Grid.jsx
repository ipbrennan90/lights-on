import React, {PropTypes, Component} from 'react';
import LightRow from '../LightRow/LightRow';

const styles = require('./Grid.scss');

export default class Grid extends Component {
	static PropTypes = {
		height: PropTypes.number,
		width: PropTypes.number
	}

	constructor(props){
		super(props);
	}

	getRows() {
		let rows = [];
		for(let row = 0; row < this.props.height; row++){
			rows.push(row);
		}
		return rows
	}

	lightSwitched(row, column) {
		console.log(row, column)
	}

	render() {
		console.log("rendering grid")
		const rows = this.getRows()
		const width = this.props.width
		return (
			<div className="game_grid">
				{rows.map((item, idx) => <LightRow lightSwitched={this.lightSwitched} key={idx} row={idx} width={width}/>)}
			</div>
		)
	}
}
