import React, { Component, PropTypes } from 'react';

const styles = require('./Light.scss')
export default class Light extends Component {
	static propTypes = {
		row: PropTypes.number,
		column: PropTypes.number
	}

	constructor(props) {
		super(props);
		this.resetLight()
		this.switchLight = this.switchLight.bind(this);
		this.remoteSwitch = this.remoteSwitch.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.resetLight();
	}

	resetLight() {
		const random_boolean = Math.random() >= 0.5;
		this.state = {
			on: random_boolean
		}
	}

	remoteSwitch() {
		this.setState({on: !this.state.on})
	}

	switchLight() {
		const { lightSwitched, row, column } = this.props
		this.setState({on: !this.state.on})
		lightSwitched(row, column);
	}

	getLightStyle() {
		return this.state.on ? "light on" : "light"
	}

	render() {
		return <button className={this.getLightStyle()} onClick={this.switchLight}></button>
	}
}
