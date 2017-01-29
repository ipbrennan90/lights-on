import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag,
	Simulate
} from 'react-addons-test-utils';
import { expect } from 'chai';
import Light from '../../src/components/Light/Light';

describe('Light', () => {
	it('renders a button', () => {
		const component = renderIntoDocument(
			<Light/>
		)
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		expect(buttons.length).to.equal(1);
	})

	it('turns on and off', () => {
		const component = renderIntoDocument(
			<Light/>
		)
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		const lightOn = component.state.on;
		if(lightOn) {
			expect(component.state.on).to.be.true;
			component.remoteSwitch();
			expect(component.state.on).not.to.be.true;
			component.remoteSwitch();
			expect(component.state.on).to.be.true;
		} else {
			expect(component.state.on).not.to.be.true;
			component.remoteSwitch();
			expect(component.state.on).to.be.true;
			component.remoteSwitch();
			expect(component.state.on).not.to.be.true;
		}
	})
})
