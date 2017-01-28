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
		this.lightSwitched = this.lightSwitched.bind(this)
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
		const left = this.refs[row].refs[column - 1];
		const right = this.refs[row].refs[column + 1];
		let top;
		let bottom;
		if(this.refs[row - 1]) top = this.refs[row - 1].refs[column];
		if(this.refs[row + 1]) bottom = this.refs[row + 1].refs[column];
		const lights = [left, right, top, bottom]
		for(let light of lights) {
			if(light) {
				light.remoteSwitch();
			}
		}
	}

	render() {
		console.log("rendering grid")
		const rows = this.getRows()
		const { width } = this.props
		return (
			<div className="game_grid">
				{rows.map((item, idx) => <LightRow lightSwitched={this.lightSwitched} key={idx} ref={idx} row={idx} width={width}/>)}
			</div>
		)
	}
}
