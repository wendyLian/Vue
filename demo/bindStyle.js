//Class 与 Style 绑定
var bindStyle = new Vue({
	el: '#bindStyle',
	data: function () {
		return {
			isActive: true,
			classObject: {
				isActive: true,
				error: null
			}
		}
	},
	computed: {
		classObject: function(){
			return {
				active: this.isActive && !this.error,
				'text-danger': this.error && this.error.type === 'fatal'
			}
		}
	}
})