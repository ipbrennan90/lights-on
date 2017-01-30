import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom'; // eslint-disable-line
import {
	renderIntoDocument,
	Simulate,
	scryRenderedComponentsWithType,
	scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import { expect } from 'chai';
import GameContainer from '../../src/components/GameContainer/GameContainer' // eslint-disable-line
import LightRow from '../../src/components/LightRow/LightRow';
import Light from '../../src/components/Light/Light'; // eslint-disable-line

describe('GameContainer', () => {

	let component;

	beforeEach(() => {
		component = renderIntoDocument(
			<GameContainer/>
		);
	});

	afterEach(() => {
		component = undefined;
	});

	it('renders a game with a 5 row grid', () => {
		const rows = scryRenderedComponentsWithType(component, LightRow);
		expect(rows.length).to.equal(5);
	});

	it('tracks players move based on clicks', () => {
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		//skip over startGame button
		Simulate.click(buttons[1]);
		expect(component.state.moves).to.equal(1);

	});
});
