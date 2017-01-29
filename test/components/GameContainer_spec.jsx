import React from 'react';
import ReactDOM from 'react-dom';
import {
	renderIntoDocument,
	Simulate,
	scryRenderedComponentsWithType,
	scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import { expect } from 'chai';
import GameContainer from '../../src/components/GameContainer/GameContainer'
import Grid from '../../src/components/Grid/Grid';
import LightRow from '../../src/components/LightRow/LightRow';
import Light from '../../src/components/Light/Light';

describe('GameContainer', () => {
	it('renders a game with a 5 row grid', () => {
		const component = renderIntoDocument(
			<GameContainer/>
		)
		const grid = scryRenderedComponentsWithType(component, Grid)
		const rows = scryRenderedComponentsWithType(component, LightRow);
		expect(rows.length).to.equal(5);
	})

	it('tracks players move based on clicks', () => {
		const component = renderIntoDocument(<GameContainer/>);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
		//skip over startGame button
		Simulate.click(buttons[1])
		expect(component.state.moves).to.equal(1);

	})
})
