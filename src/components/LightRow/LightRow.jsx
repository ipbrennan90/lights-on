import React, {Component, PropTypes} from 'react';
import Light from '../Light/Light'
const styles = require('./LightRow.scss');

export default class LightRow extends Component {
	static propTypes = {
		width: PropTypes.number
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

	render() {
		const lights = this.getLights();

		return(
			<div className={styles.light_row}>
				{lights.map((light, idx) => <Light key={idx}/> )}
			</div>
		)
	}
}
