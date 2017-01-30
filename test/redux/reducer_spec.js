import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../../src/reducer';


describe('reducer', () => {
	it('handles SET_STATE', () => {
		const initialState = Map();
		const action = {
			type: 'SET_STATE',
			state: Map({
				game: Map({
					rows: List.of(
						List.of(0,1,0,1,1),
						List.of(0,0,0,0,1),
						List.of(0,1,0,1,0),
						List.of(0,1,1,1,0),
						List.of(0,1,1,1,0)
					),
					moves: 0,
					hasWon: false
				})
			})
		};
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			game: {
				rows: [
					[0,1,0,1,1],
					[0,0,0,0,1],
					[0,1,0,1,0],
					[0,1,1,1,0],
					[0,1,1,1,0]
				],
				moves: 0,
				hasWon: false
			}
		}));
	});

	it('can set state with plain JS', () => {
		const action = {
			type: 'SET_STATE',
			state: {
				game: {
					rows: [
						[0,1,0,1,1],
						[0,0,0,0,1],
						[0,1,0,1,0],
						[0,1,1,1,0],
						[0,1,1,1,0]
					],
					moves: 0,
					hasWon: false
				}
			}
		};
		const nextState = reducer(undefined, action);

		expect(nextState).to.equal(fromJS({
			game: {
				rows: [
					[0,1,0,1,1],
					[0,0,0,0,1],
					[0,1,0,1,0],
					[0,1,1,1,0],
					[0,1,1,1,0]
				],
				moves: 0,
				hasWon: false
			}
		}));
	});

	it('will set state with no initial state (undefined)', () => {
		const initialState = Map();
		const action = {
			type: 'SET_STATE',
			state: {
				game: {
					rows: [
						[0,1,0,1,1],
						[0,0,0,0,1],
						[0,1,0,1,0],
						[0,1,1,1,0],
						[0,1,1,1,0]
					],
					moves: 0,
					hasWon: false
				}
			}
		};
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			game: {
				rows: [
					[0,1,0,1,1],
					[0,0,0,0,1],
					[0,1,0,1,0],
					[0,1,1,1,0],
					[0,1,1,1,0]
				],
				moves: 0,
				hasWon: false
			}
		}));
	});

	it('will add to state moves with the move action', () => {
		const state = fromJS({
			game: {
				rows: [
					[0,1,0,1,1],
					[0,0,0,0,1],
					[0,1,0,1,0],
					[0,1,1,1,0],
					[0,1,1,1,0]
				],
				moves: 0,
				hasWon: false
			}
		});

		const action = {type: 'MOVE'};
		const nextState = reducer(state, action);

		expect(nextState).to.equal(fromJS({
			game: {
				rows: [
					[0,1,0,1,1],
					[0,0,0,0,1],
					[0,1,0,1,0],
					[0,1,1,1,0],
					[0,1,1,1,0]
				],
				moves: 1,
				hasWon: false
			}
		}));
	});

	it('will update game rows correctly when a switch action has occured', () => {
		const state = fromJS({
			game: {
				rows: [
					[0,1,0,1,1],
					[0,0,0,0,1],
					[0,1,0,1,0],
					[0,1,1,1,0],
					[0,1,1,1,0],
				],
				moves: 0,
				hasWon: false
			}
		});

		const action = {type: 'SWITCH_LIGHT', row: 3, column: 4};
		const nextState = reducer(state, action);

		expect(nextState).to.equal(fromJS({
			game: {
				rows: [
					[0,1,0,1,1],
					[0,0,0,0,1],
					[0,1,0,1,1],
					[0,1,1,0,1],
					[0,1,1,1,1],
				],
				moves: 1,
				hasWon: false
			}
		}));
	});

	it('can detect a win', () => {
		const state = fromJS({
			game: {
				rows: [
					[0,0,0,0,0],
					[0,0,0,0,0],
					[0,0,0,0,0],
					[0,0,1,0,0],
					[0,1,1,1,0],
				],
				moves: 24,
				hasWon: false
			}
		});
		const actions = [
			{type: 'SET_STATE', state: state},
			{type: 'SWITCH_LIGHT', row: 4, column: 2},
			{type: 'CHECK_WIN'}
		];
		const nextState = actions.reduce(reducer, Map());
		expect(nextState).to.equal(fromJS({
			game: {
				rows: [
					[0,0,0,0,0],
					[0,0,0,0,0],
					[0,0,0,0,0],
					[0,0,0,0,0],
					[0,0,0,0,0],
				],
				moves: 25,
				hasWon: true
			}
		}))
	});
});
