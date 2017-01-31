import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom'; // eslint-disable-line
import {
	renderIntoDocument,
	scryRenderedDOMComponentsWithTag,
} from 'react-addons-test-utils';
import { expect } from 'chai';
import LightRow from '../../src/components/LightRow/LightRow'; // eslint-disable-line
import Light from '../../src/components/Light/Light'; //eslint-disable-line

describe('LightRow', () => {
	it('renders a row of buttons', () => {
		const component = renderIntoDocument(
			<LightRow lights={[0,1,0,1,1]}/>
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		expect(buttons.length).to.equal(5);
	});
});
