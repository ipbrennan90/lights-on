import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom'; // eslint-disable-line
import {
	renderIntoDocument,
	scryRenderedComponentsWithType,
	scryRenderedDOMComponentsWithTag,
	Simulate
} from 'react-addons-test-utils';
import { expect } from 'chai';
import { shutOffLights } from '../helper_functions.js';
import { Grid } from '../../src/components/Grid/Grid'; // eslint-disable-line
import LightRow from '../../src/components/LightRow/LightRow';

describe('Grid', () => {

	let component;

	beforeEach(() => {
		const rows = [[0,0,0,1,1], [0,1,1,0,1], [0,0,0,0,1], [0,0,1,0,1], [0,0,1,1,0]];
		component = renderIntoDocument(
			<Grid rows={rows} setReduxState={() => {}}/>
		);
	});

	afterEach(() => {
		component = undefined;
	});

	it('has a default render of a 5x5 grid', () => {
		const rows = scryRenderedComponentsWithType(component, LightRow);
		expect(rows.length).to.equal(5);
		expect(rows[0].props.width).to.equal(5);
	});

	it('can set game height', () => {
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		const width = component.gameWidth;
		const height = component.gameHeight;
		width.value = 10;
		height.value = 20;
		Simulate.change(width);
		Simulate.change(height);
		Simulate.click(buttons[0]);
		const rows = scryRenderedComponentsWithType(component, LightRow);
		expect(rows.length).to.equal(20);
		expect(rows[0].props.width).to.equal(10);
	});

});
