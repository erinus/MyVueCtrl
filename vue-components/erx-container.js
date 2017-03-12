var erxContainer = Vue.extend({
	components: {
		'erx-keyboard': erxKeyboard
	},
	template:
		'<div class="erx-container" v-bind:style="{ width: Width + \'px\', height: Height + \'px\' }">' +
        '    <erx-traybar ref="traybar" v-bind:Height="TrayHeight"></erx-traybar>' +
		'    <div class="erx-container-body" v-bind:style="{ height: BodyHeight + \'px\' }">' +
		'        <slot></slot>' +
		'    </div>' +
		'    <erx-keyboard ref="keyboard"></erx-keyboard>' +
		'</div>',
    created: function () {

	},
	mounted: function () {
		bus.$on('show-keyboard', (target) => {
			this.BodyHeight = this.Height - this.TrayHeight - this.$refs.keyboard.$el.clientHeight;
		});
		bus.$on('hide-keyboard', (target) => {
			this.BodyHeight = this.Height - this.TrayHeight;
		});
	},
    updated: function () {

	},
	props: {
		Width: {
			type: Number,
			default: 800
		},
		Height: {
			type: Number,
			default: 1280
		},
		TrayHeight: {
			type: Number,
			default: 80
		},
		BodyHeight: {
			type: Number,
			default: 1200
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

Vue.component('erx-container', erxContainer);