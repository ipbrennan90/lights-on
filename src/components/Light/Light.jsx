import React, { Component, PropTypes } from 'react';

const styles = require('./Light.scss')
export default class Light extends Component {
	static propTypes = {
		lightSwitched: PropTypes.function,
		row: PropTypes.number,
		column: PropTypes.number
	}

	constructor(props) {
		super(props);
		this.state  = {
			light: 'off'
		};
		this.switchLight = this.switchLight.bind(this);
	}

	switchLight(e) {
		const { lightSwitched, row, column } = this.props
		this.state.light === 'off' ? this.setState({light: 'on'}) : this.setState({light: 'off'});
		lightSwitched(row, column);
	}

	getLightStyle() {
		return this.state.light === 'on' ? "light on" : "light"
	}

	render() {
		return <button className={this.getLightStyle()} onClick={this.switchLight}></button>
	}
}
