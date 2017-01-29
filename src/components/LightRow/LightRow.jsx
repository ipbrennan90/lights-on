import React, {Component, PropTypes} from 'react';
import Light from '../Light/Light'
const styles = require('./LightRow.scss');

export default class LightRow extends Component {
	static propTypes = {
		width: PropTypes.number,
		row: PropTypes.number,
		lightSwitched: PropTypes.func
	}

	constructor(props){
		super(props);
	}

	getLights() {
		let array = []
		for(let light = 0; light < this.props.width; light++){
			array.push(light);
		}
		return array
	}

	checkRowOff() {
		const { width } = this.props
		const isOff = (light) => { return !light.state.on; }
		let lights = [];
		for(let light = 0; light < width; light ++) {
			lights.push(this.refs[light])
		}
		return lights.every(isOff)
	}

	render() {
		const { lightSwitched, row } = this.props
		const lights = this.getLights();

		return(
			<div className={styles.light_row}>
				{lights.map((light, idx) => <Light lightSwitched={lightSwitched} key={idx} ref={idx} column={idx} row={row}/> )}
			</div>
		)
	}
}
