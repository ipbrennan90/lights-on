import React, {PropTypes, Component} from 'react';

export default class Grid extends Component {
	static PropTypes = {

	}

	render() {
		const gridItems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
		return (<div className="game_grid">
		{gridItems.map((item, idx) => <button></button>)}
		</div>)
	}
}
