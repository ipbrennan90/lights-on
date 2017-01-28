import React, { Component, PropTypes } from 'react';

const styles = require('./Light.scss')
export default class Light extends Component {

	constructor(props) {
		super(props);
		this.state  = {
			light: 'off'
		};
		this.switchLight = this.switchLight.bind(this);
	}

	switchLight() {
		this.state.light === 'off' ? this.setState({light: 'on'}) : this.setState({light: 'off'});
	}

	getLightStyle() {
		return this.state.light === 'on' ? "light on" : "light"
	}

	render() {
		return <button className={this.getLightStyle()} onClick={this.switchLight}></button>
	}
}
