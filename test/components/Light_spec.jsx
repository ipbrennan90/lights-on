import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag,
} from 'react-addons-test-utils';
import { expect } from 'chai';
import Light from '../../src/components/Light/Light'; //eslint-disable-line

describe('Light', () => {
	it('renders a button', () => {
		const component = renderIntoDocument(
			<Light/>
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		expect(buttons.length).to.equal(1);
	});
});
