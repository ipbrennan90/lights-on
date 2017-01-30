import React, {Component, PropTypes} from 'react'; // eslint-disable-line
import Light from '../Light/Light'; // eslint-disable-line
const styles = require('./LightRow.scss'); // eslint-disable-line

export default class LightRow extends Component {
	static propTypes = {
		width: PropTypes.number,
		row: PropTypes.number,
		lightSwitched: PropTypes.func
	}

	constructor(props){
		super(props);
		this.isOff = false;
		this.checkRowOff.bind(this);
	}

	getLights() {
		let array = [];
		for(let light = 0; light < this.props.width; light++){
			array.push(light);
		}
		return array;
	}

	checkRowOff() {
		const { width } = this.props;
		const lightOff = (lightOn) => { return !lightOn; };
		let isRowOff;
		let lights = [];
		for(let light = 0; light < width; light ++) {
			lights.push(this.refs[light].state.on);
		}
		isRowOff = lights.every(lightOff);
		this.isOff = isRowOff;
		return this.isOff;
	}

	render() {
		const { lightSwitched, row } = this.props;
		const lights = this.getLights();

		return(
			<div className="light-row">
				{lights.map((light, idx) => <Light lightSwitched={lightSwitched} key={idx} ref={idx} column={idx} row={row}/> )}
			</div>
		);
	}
}
