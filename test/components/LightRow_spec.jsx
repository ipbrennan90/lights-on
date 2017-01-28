import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import { expect } from 'chai';
import LightRow from '../../src/components/LightRow';

describe('Light', () => {
	it('renders a row of buttons', () => {
		const component = renderIntoDocument(
			<LightRow width={5}/>
		)
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		expect(buttons.length).to.equal(5);
	})
})
