import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom'; // eslint-disable-line
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag,
	scryRenderedComponentsWithType
} from 'react-addons-test-utils';
import { expect } from 'chai';
import LightRow from '../../src/components/LightRow/LightRow'; // eslint-disable-line
import Light from '../../src/components/Light/Light';

describe('LightRow', () => {

	let component;

	beforeEach(() => {
		component = renderIntoDocument(
			<LightRow width={5}/>
		);
	});

	afterEach(() => {
		component = undefined;
	});

	it('renders a row of buttons', () => {
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		expect(buttons.length).to.equal(5);
	});

	it('can check if row is off', () => {
		const lights = scryRenderedComponentsWithType(component, Light);
		const isOff = (light) => { return !light.state.on; };
		const rowOffCheck = lights.every(isOff);
		const rowOff = component.checkRowOff();
		expect(rowOff).to.equal(rowOffCheck);
	});

	it('can tell if row is off', () => {
		const lights = scryRenderedComponentsWithType(component, Light);
		for(let light of lights) {
			light.setState({on: false});
		}
		component.checkRowOff();
		expect(component.isOff).to.be.true;
	});
});
