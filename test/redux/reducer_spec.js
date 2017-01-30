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
						List.of(0,1,1,1,0)
					),
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
					[0,1,1,1,0]
				],
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
						[0,1,1,1,0]
					],
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
					[0,1,1,1,0]
				],
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
						[0,1,1,1,0]
					],
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
					[0,1,1,1,0]
				],
				hasWon: false
			}
		}));
	})
});
