import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom'; // eslint-disable-line
import {
	renderIntoDocument,
	scryRenderedComponentsWithType,
} from 'react-addons-test-utils';
import { expect } from 'chai';
import Grid  from '../../src/components/Grid/Grid'; // eslint-disable-line
import LightRow from '../../src/components/LightRow/LightRow';

describe('Grid', () => {

	it('has a default renders a grid', () => {
		const rows = [[0,0,0,1,1], [0,1,1,0,1], [0,0,0,0,1], [0,0,1,0,1], [0,0,1,1,0]];
		const component = renderIntoDocument(
			<Grid rows={rows} setReduxState={() => {}}/>
		);
		const LightRows = scryRenderedComponentsWithType(component, LightRow);
		expect(LightRows.length).to.equal(5);
	});

});
