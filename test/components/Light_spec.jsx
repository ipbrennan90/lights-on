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
		expect(component.state.light).to.equal('off')
		Simulate.click(buttons[0])
		expect(component.state.light).to.equal('on')
		Simulate.click(buttons[0])
		expect(component.state.light).to.equal('off')
	})
})
