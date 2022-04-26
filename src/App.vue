<!-- @format -->

<template>
	<h1 class="center">
		Spinner Demo
	</h1>
	<h4 class="center">
		Status
	</h4>
	<div class="center">
		<PulseLoader
			:loading="loadingState"
			:color="color"
			:size="size"
		/>
	</div>
	<div>
		<p class="center">
			<span>Status</span
			><span>{{
				` ` + loadingState
			}}</span>
		</p>
	</div>
	<div>
		<p class="center">
			<button
				@click="
					setLoadingState
				"
			>
				{{
					loadingState
						? 'Set to False'
						: 'Set to True'
				}}
			</button>
		</p>
	</div>
	<div class="center">
		<button
			@click="
				generateRandomNum
			"
		>
			Generate Rand
		</button>
	</div>
	<div class="center">
		<div
			v-show="
				!numberGenerated
			"
		>
			<h4>
				{{
					randNumber === 0
						? 'Not Generated'
						: randNumber
				}}
			</h4>
		</div>
		<DotLoader
			:loading="
				numberGenerated
			"
			:color="newColor"
			:size="newSize"
		/>
	</div>
</template>
<script>
	import {
		mapState,
		mapActions,
	} from 'vuex';
	import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
	import DotLoader from 'vue-spinner/src/DotLoader.vue';
	export default {
		name: 'App',
		data() {
			return {
				color: '#ff0000',
				size: '50px',
				newColor: 'lightblue',
				newSize: '200px',
			};
		},
		computed: {
			...mapState('spinner', [
				'loadingState',
				'randNumber',
				'numberGenerated',
			]),
		},
		methods: {
			...mapActions(
				'spinner',
				[
					'setLoadingStateTrue',
					'setLoadingStateFalse',
					'generateRandomNum',
				],
			),
			setLoadingState() {
				if (
					this.loadingState
				) {
					this.setLoadingStateFalse();
				} else {
					this.setLoadingStateTrue();
				}
			},
		},
		components: {
			PulseLoader,
			DotLoader,
		},
	};
</script>
<style>
	.center {
		text-align: center;
	}
	.v-dot {
		margin-left: auto;
		margin-right: auto;
	}
</style>
