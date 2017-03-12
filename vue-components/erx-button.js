var erxButton = Vue.extend({
	components: {
		
	},
	template:
		'<button class="erx-button" v-bind:style="_Style" v-on:mouseover="_OnMouseOver" v-on:mouseout="_OnMouseOut">' +
		'    <slot></slot>' +
		'</button>',
	cretaed: {

	},
	mounted: function () {

	},
	updated: function () {

	},
	props: {
		Width: {
			type: String,
			default: undefined
		},
		Height: {
			type: String,
			default: undefined
		},
		Color: {
			type: String,
			default: 'rgb(255, 255, 255)'
		},
		FontSize: {
			type: Number,
			default: 30
		},
		FontFamily: {
			type: String,
			default: ''
		},
		BackColor: {
			type: String,
			default: 'rgb(140, 184, 212)'
		},
		EnterColor: {
			type: String,
			default: 'rgb(112, 168, 204)'
		},
		BorderRadius: {
			type: Number,
			default: 0
		},
		BorderWidth: {
			type: Number,
			default: 0
		},
		BorderColor: {
			type: String,
			default: 'rgb(24, 86, 126)'
		},
		BorderStyle: {
			type: String,
			default: 'solid'
		}
	},
	computed: {
		_Width: function () {
			if (isNaN(this.Width)) {
				return this.Width;
			} else {
				return this.Width + 'px';
			}
		},
		_Height: function () {
			if (isNaN(this.Height)) {
				return this.Height;
			} else {
				return this.Height + 'px';
			}
		},
		_Style: function () {
			var style = {};
			if (this.Width !== undefined) {
				style['width'] = this._Width;
			}
			if (this.Width !== undefined) {
				style['height'] = this._Height;
			}
			if (this.Width !== undefined) {
				style['backgroundColor'] = this.BackColor;
			}
			style['color'] = this.Color;
			style['fontSize'] = this.FontSize + 'px';
			style['fontFamily'] = this.FontFamily;
			style['borderRadius'] = this.BorderRadius + 'px';
			style['borderWidth'] = this.BorderWidth + 'px';
			style['borderColor'] = this.BorderColor;
			style['borderStyle'] = this.BorderStyle;
			return style;
		}
	},
	methods: {
		_OnMouseOver: function () {
			this.$el.style.backgroundColor = this.EnterColor;
		},
		_OnMouseOut: function () {
			this.$el.style.backgroundColor = this.BackColor;
		}
	},
	data: function () {
		return {

		};
	}
});

Vue.component('erx-button', erxButton);