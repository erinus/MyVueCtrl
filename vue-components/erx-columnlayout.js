var erxColumnLayout = Vue.extend({
	template:
		'<div class="erx-columnlayout">' +
		'    <slot></slot>' +
		'</div>',
    created: function () {

	},
    mounted: function () {
		this.$el.style.padding = (this.Spacing / 2) + 'px';
		var wall = this.$el.clientWidth - this.Spacing;
		var wone = (wall - this.Spacing * this.Columns) / this.Columns;
		for (idx in this.$children) {
			var self = this.$children[idx].$el;
			var next = self.nextSibling;
			var wrap = document.createElement('DIV');
			wrap.style.cssFloat = 'left';
			wrap.style.margin = (this.Spacing / 2) + 'px';
			wrap.style.width = wone + 'px';
			wrap.appendChild(self);
			if (next) {
				this.$el.insertBefore(wrap, next);
			} else {
				this.$el.appendChild(wrap);
			}
		}
		var node = document.createElement('DIV');
		node.style.clear = 'both';
		this.$el.appendChild(node);
	},
    updated: function () {
		
	},
	props: {
        Columns: {
            type: Number,
            default: 0
        },
		Spacing: {
            type: Number,
            default: 0
        }
	},
	computed: {

	},
	methods: {
		// ResizeChilds: function () {
		// 	var wall = this.$el.clientWidth - this.Spacing;
		// 	var wone = (wall - this.Spacing * this.Columns) / this.Columns;
		// 	for (idx in this.$el.children) {
		// 		if (this.$el.children[idx].tagName === 'DIV') {
		// 			this.$el.children[idx].style.width = wone + 'px';
		// 		}
		// 	}
		// }
	},
	data: function () {
		return {

		};
	}
});

Vue.component('erx-columnlayout', erxColumnLayout);