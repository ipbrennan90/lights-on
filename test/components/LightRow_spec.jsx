import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag,
	scryRenderedComponentsWithType
} from 'react-addons-test-utils';
import { expect } from 'chai';
import LightRow from '../../src/components/LightRow/LightRow';
import Light from '../../src/components/Light/Light';

describe('Light', () => {
	it('renders a row of buttons', () => {
		const component = renderIntoDocument(
			<LightRow width={5}/>
		)
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		expect(buttons.length).to.equal(5);
	})

	it('can check if row is off', () => {
		const component = renderIntoDocument(
			<LightRow width={5}/>
		)
		const lights = scryRenderedComponentsWithType(component, Light);
		const isOff = (light) => { return !light.state.on }
		const rowOffCheck = lights.every(isOff)
		const rowOff = component.checkRowOff();
		expect(rowOff).to.equal(rowOffCheck);
	})

	it('can tell if row is off', () => {
		const component = renderIntoDocument(
			<LightRow width={5}/>
		)
		const lights = scryRenderedComponentsWithType(component, Light);
		for(let light of lights) {
			light.setState({on: false});
		}
		const isRowOff = component.checkRowOff();
		expect(isRowOff).to.be.true;
	})
})
