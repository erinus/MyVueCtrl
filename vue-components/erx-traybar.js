var erxTraybar = Vue.extend({
	components: {
		
	},
	template:
		'<div class="erx-traybar" v-bind:style="{ height: Height + \'px\' }">' +
		'    <slot></slot>' +
		'</div>',
    created: function () {

	},
	mounted: function () {

	},
    updated: function () {

	},
	props: {
		Height: {
			type: Number,
		}
	},
	computed: {

	},
	methods: {
        
	},
	data: function () {
		return {

		};
	}
});

Vue.component('erx-traybar', erxTraybar);