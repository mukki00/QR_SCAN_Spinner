/** @format */

import axios from 'axios';
export default {
	namespaced: true,
	state() {
		return {
			loadingState: true,
			randNumber: 0,
			numberGenerated: false,
		};
	},
	mutations: {
		setLoadingStateTrue(
			state,
		) {
			state.loadingState = true;
		},
		setLoadingStateFalse(
			state,
		) {
			state.loadingState = false;
		},
		setNumberGeneratedTrue(
			state,
		) {
			state.numberGenerated = true;
		},
		setRandNumber(
			state,
			randNumber,
		) {
			state.numberGenerated = false;
			state.randNumber =
				randNumber;
		},
	},
	actions: {
		setLoadingStateTrue({
			commit,
		}) {
			commit(
				'setLoadingStateTrue',
			);
		},
		setLoadingStateFalse({
			commit,
		}) {
			commit(
				'setLoadingStateFalse',
			);
		},
		async generateRandomNum({
			commit,
		}) {
			commit(
				'setNumberGeneratedTrue',
			);
			const response =
				await axios.get(
					'https://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1',
				);
			const randNum =
				parseInt(
					response.data[0],
				);
			commit(
				'setRandNumber',
				randNum,
			);
		},
	},
};
