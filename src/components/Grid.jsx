import React, {PropTypes, Component} from 'react';
import LightRow from './LightRow';

export default class Grid extends Component {
	static PropTypes = {
		height: PropTypes.number,
		width: PropTypes.number
	}

	getRows() {
		let rows = [];
		for(let row = 0; row < this.props.height; row++){
			rows.push(row);
		}
		return rows
	}

	render() {
		const rows = this.getRows()
		const width = this.props.width
		return (
			<div className="game_grid">
				{rows.map((item, idx) => <LightRow key={idx} width={width}/>)}
			</div>
		)
	}
}
