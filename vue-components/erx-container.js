var erxContainer = Vue.extend({
	components: {
		'traybar': {
			components: {
				
			},
			template:
				'<div class="erx-container-traybar" v-bind:style="{ height: Height + \'px\' }">' +
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
		},
		'keyboard': {
			template:
				'<transition v-on:enter="Enter" v-on:leave="Leave">' +
				'    <div class="erx-container-keyboard" v-bind:style="{ width: Width + \'px\', height: Height + \'px\' }">' +
				'        <div class="erx-container-keyboard-tool">' +
				'            <button class="button" style="float: right; font-size: 20pt; background-color: rgb(245, 245, 245); border: none; outline: none;" @click="Hide()">' +
				'                <i class="fa fa-chevron-down" aria-hidden="true"></i>' +
				'            </button>' +
				'            <div style="clear: both;"></div>' +
				'        </div>' +
				'        <div class="erx-container-keyboard-body">' +
				'            <div style="margin-top: 8px; text-align: center;">' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-number">1</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-number">2</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-number">3</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-number">4</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-number">5</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-number">6</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-number">7</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-number">8</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-number">9</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-number">0</button>' +
				'            </div>' +
				'            <div style="margin-top: 8px; text-align: center;">' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">q</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">w</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">e</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">r</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">t</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">y</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">u</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">i</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">o</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">p</button>' +
				'            </div>' +
				'            <div style="margin-top: 8px; text-align: center;">' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">a</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">s</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">d</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">f</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">g</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">h</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">j</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">k</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">l</button>' +
				'            </div>' +
				'            <div style="margin-top: 8px; text-align: center;">' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-others" style="width: 109px;">' +
				'                    <i class="fa fa-arrow-up" aria-hidden="true"></i>' +
				'                </button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">z</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">x</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">c</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">v</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">b</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">n</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-symbol">m</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-others" style="width: 109px;">' +
				'                    <i class="fa fa-arrow-left" aria-hidden="true"></i>' +
				'                </button>' +
				'            </div>' +
				'            <div style="margin-top: 8px; text-align: center;">' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-others" style="width: 343px;">&nbsp;</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-others">/</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-others">.</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-others">,</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-others">;</button>&nbsp;' +
				'                <button class="erx-container-keyboard-button erx-container-keyboard-button-others" style="width: 109px;">ENTER</button>' +
				'            </div>' +
				'        </div>' +
				'    </div>' +
				'</transition>',
			props: {
				Width: {
					type: Number,
					default: 800
				},
				Height: {
					type: Number,
					default: 410
				},
				Target: {
					type: Object,
					default: null
				}
			},
			methods: {
				Enter: function (el, done) {
					// Velocity(el, { translateY: -(this.Height + 20) }, {
					// 	duration: 300,
					// 	easing: [ .23, .44, .59, 1.23 ]
					// });
				},
				Leave: function (el, done) {
					// Velocity(el, { translateY: +(this.Height + 20) }, {
					// 	duration: 400,
					// 	easing: [ .4, -0.25, .78, .6 ]
					// });
				},
				Show: function (el) {
					bus.$emit('show-keyboard', this);
				},
				Hide: function (el) {
					bus.$emit('hide-keyboard', this);
				}
			},
			mounted: function () {
				bus.$on('show-keyboard', (target) => {
					this.Target = target;
				});
				bus.$on('hide-keyboard', (target) => {
					this.Target = null;
				});
			},
			data: function () {
				return {

				};
			}
		}
	},
	template:
		'<div class="erx-container" v-bind:style="{ width: Width + \'px\', height: Height + \'px\' }">' +
        '    <traybar ref="traybar" v-bind:Height="TrayHeight"></traybar>' +
		'    <div class="erx-container-body" v-bind:style="{ height: BodyHeight + \'px\' }">' +
		'        <slot></slot>' +
		'    </div>' +
		'    <keyboard ref="keyboard"></keyboard>' +
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