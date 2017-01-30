import React, { Component, PropTypes } from 'react'; // eslint-disable-line

const styles = require('./Light.scss') // eslint-disable-line
export default class Light extends Component {
	static propTypes = {
		row: PropTypes.number,
		column: PropTypes.number,
		lightSwitched: PropTypes.func
	}

	constructor(props) {
		super(props);
		this.resetLight();
		this.switchLight = this.switchLight.bind(this);
		this.remoteSwitch = this.remoteSwitch.bind(this);
	}

	componentWillReceiveProps() {
		this.resetLight();
	}

	resetLight() {
		const random_boolean = Math.random() >= 0.5;
		this.state = {
			on: random_boolean
		};
	}

	remoteSwitch() {
		this.setState({on: !this.state.on});
	}

	switchLight() {
		const { lightSwitched, row, column } = this.props;
		this.setState({on: !this.state.on});
		lightSwitched(row, column);
	}

	getLightStyle() {
		return this.state.on ? 'light on' : 'light';
	}

	getLightBorderStyle() {
		return this.state.on ? 'light-border-one border-on' : 'light-border-one';
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
