import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import { expect } from 'chai';
import Grid from '../../src/components/Grid';

describe('Grid', () => {
	it('renders a 5x5 grid of buttons', () => {
		const component = renderIntoDocument(
			<Grid/>
		)
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		expect(buttons.length).to.equal(25);
	})
})
