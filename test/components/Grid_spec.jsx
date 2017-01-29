import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedComponentsWithType,
	scryRenderedDOMComponentsWithTag,
	Simulate
} from 'react-addons-test-utils';
import { expect } from 'chai';
import Grid from '../../src/components/Grid/Grid';
import LightRow from '../../src/components/LightRow/LightRow';

describe('Grid', () => {
	it('has a default render of a 5x5 grid', () => {
		const component = renderIntoDocument(
			<Grid/>
		)
		const rows = scryRenderedComponentsWithType(component, LightRow);
		expect(rows.length).to.equal(5);
		expect(rows[0].props.width).to.equal(5);
	})

	it('can set game height', () => {
		const component = renderIntoDocument(
			<Grid newGame={() => {}}/>
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
		const width = component.gameWidth;
		const height = component.gameHeight;
		width.value = 10
		height.value = 20
		Simulate.change(width);
		Simulate.change(height);
		Simulate.click(buttons[0]);
		const rows = scryRenderedComponentsWithType(component, LightRow);
		expect(rows.length).to.equal(20);
		expect(rows[0].props.width).to.equal(10);

	})
})
