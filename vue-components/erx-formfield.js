var erxFormField = Vue.extend({
	template:
		'<div class="erx-formfield-container" v-bind:style="Style">' +
		'    <span class="erx-formfield-label"  v-bind:style="LabelStyle">{{ FieldLabel }}</span>' +
		'    <input class="erx-formfield-input" v-bind:style="InputStyle" v-bind:type="FieldType" v-bind:value="FieldInput" v-bind:placeholder="Placeholder" v-on:focusin="ShowKeyboard">' +
		'    <div style="clear: both;"></div>' +
		'</div>',
	props: {
		FieldType: {
			type: String,
			default: ''
		},
		FieldLabel: {
			type: String,
			default: ''
		},
		FieldInput: {
			type: String,
			default: ''
		},
        Style: {
			type: String,
			default: ''
		},
        LabelStyle: {
			type: String,
			default: ''
		},
        InputStyle: {
			type: String,
			default: ''
		},
		Placeholder: {
			type: String,
			default: ''
		}
	},
	methods: {
		ShowKeyboard: function (el) {
			bus.$emit('show-keyboard', this);
		}
	},
	data: function () {
		return {
			
		};
	}
});

Vue.component('erx-formfield', erxFormField);