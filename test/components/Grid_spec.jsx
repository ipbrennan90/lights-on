import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	scryRenderedComponentsWithType
} from 'react-addons-test-utils';
import { expect } from 'chai';
import Grid from '../../src/components/Grid';
import LightRow from '../../src/components/LightRow';

describe('Grid', () => {
	it('renders a grid with rows equal to its height', () => {
		const component = renderIntoDocument(
			<Grid height={5} width={5}/>
		)
		const height = component.props.height
		const rows = scryRenderedComponentsWithType(component, LightRow);
		expect(rows.length).to.equal(height);
	})
})
