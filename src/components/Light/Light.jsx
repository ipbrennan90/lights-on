import React, { PureComponent, PropTypes } from 'react'; // eslint-disable-line

const styles = require('./Light.scss') // eslint-disable-line

export default class Light extends PureComponent {
	static propTypes = {
		row: PropTypes.number,
		column: PropTypes.number,
		switchLight: PropTypes.func,
		globalState: PropTypes.object
	}

	constructor(props) {
		super(props);
		this.switchLight = this.switchLight.bind(this);
	}

	switchLight() {
		const { switchLight, globalState, row, column } = this.props;
		switchLight(globalState, row, column);
	}

	getLightStyle() {
		const { isOn } = this.props;
		return isOn === 1 ? 'light on' : 'light';
	}

	getLightBorderStyle() {
		const { isOn } = this.props;
		return isOn === 1 ? 'light-border-one border-on' : 'light-border-one';
	}

	render() {
		return(
			<button className="light-button" onClick={this.switchLight}>
				<div className="light-border-two">
					<div className={this.getLightBorderStyle()}>
						<div className={this.getLightStyle()}></div>
					</div>
				</div>
			</button>
		);
	}
}
