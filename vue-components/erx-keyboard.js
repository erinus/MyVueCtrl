var erxKeyboard = Vue.extend({
	template:
		'<transition v-on:enter="Enter" v-on:leave="Leave">' +
		'    <div class="erx-keyboard-container">' +
		'        <div class="erx-keyboard" v-bind:style="{ width: Width + \'px\', height: Height + \'px\' }">' +
		'            <div class="erx-keyboard-tool">' +
		'                <button class="button" style="float: right; font-size: 20pt; background-color: rgb(255, 255, 255); border: none; outline: none;" @click="Hide()">' +
		'                    <i class="fa fa-chevron-down" aria-hidden="true"></i>' +
		'                </button>' +
		'                <div style="clear: both;"></div>' +
		'            </div>' +
		'            <div class="erx-keyboard-body">' +
		'                <div style="margin-top: 8px; text-align: center;">' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-number">1</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-number">2</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-number">3</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-number">4</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-number">5</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-number">6</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-number">7</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-number">8</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-number">9</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-number">0</button>' +
		'                </div>' +
		'                <div style="margin-top: 8px; text-align: center;">' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">q</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">w</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">e</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">r</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">t</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">y</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">u</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">i</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">o</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">p</button>' +
		'                </div>' +
		'                <div style="margin-top: 8px; text-align: center;">' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">a</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">s</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">d</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">f</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">g</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">h</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">j</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">k</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">l</button>' +
		'                </div>' +
		'                <div style="margin-top: 8px; text-align: center;">' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-others" style="width: 109px;">' +
		'                        <i class="fa fa-arrow-up" aria-hidden="true"></i>' +
		'                    </button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">z</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">x</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">c</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">v</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">b</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">n</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-symbol">m</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-others" style="width: 109px;">' +
		'                        <i class="fa fa-arrow-left" aria-hidden="true"></i>' +
		'                    </button>' +
		'                </div>' +
		'                <div style="margin-top: 8px; text-align: center;">' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-others" style="width: 343px;">&nbsp;</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-others">/</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-others">.</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-others">,</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-others">;</button>&nbsp;' +
		'                    <button class="erx-keyboard-button erx-keyboard-button-others" style="width: 109px;">ENTER</button>' +
		'                </div>' +
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
});

Vue.component('erx-keyboard', erxKeyboard);