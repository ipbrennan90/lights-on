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

describe('GameContainer', () => {
	it('renders a game with a 5 row grid', () => {
		const component = renderIntoDocument(
			<GameContainer/>
		)
		const grid = scryRenderedComponentsWithType(component, Grid)
		const rows = scryRenderedComponentsWithType(component, LightRow);
		expect(rows.length).to.equal(5);
	})

	it('can set game height', () => {
		const component = renderIntoDocument(
			<GameContainer/>
		)
		const gameContainer = scryRenderedComponentsWithType(component, GameContainer)
		const width = gameContainer[0].gameWidth;
		const height = gameContainer[0].gameHeight;
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
		width.value = 10;
		height.value = 20;
		Simulate.change(width);
		Simulate.change(height);
		Simulate.click(buttons[0]);
		const rows = scryRenderedComponentsWithType(component, LightRow);
		expect(rows.length).to.equal(20);

	})
})
