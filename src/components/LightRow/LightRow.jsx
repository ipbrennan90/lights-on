import React, {PureComponent, PropTypes} from 'react'; // eslint-disable-line
import Light from '../Light/Light'; // eslint-disable-line
const styles = require('./LightRow.scss'); // eslint-disable-line

export default class LightRow extends PureComponent {
	static propTypes = {
		row: PropTypes.number,
		lights: PropTypes.object,
		switchLight: PropTypes.func,
		globalState: PropTypes.object
	}

	constructor(props){
		super(props);
	}


	render() {
		const { row, lights, switchLight, globalState } = this.props;

		return(
			<div className="light-row">
				{lights.map((light, idx) => <Light globalState={globalState} switchLight={switchLight} key={idx} column={idx} row={row} isOn={light}/> )}
			</div>
		);
	}
}
