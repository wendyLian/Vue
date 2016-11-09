//观察 Watchers
var watchExampleVM = new Vue({
	el: '#app2',
	data: function(){
		return {
			question: '',
			answer: 'I cannot give you an answer until you ask a question'
		}
	},
	watch: {
		question: function (newQuestion) {
			this.answer = 'Waiting for you to stop typing...'
			this.getAnswer()
		}
	},
	methods: {
		getAnswer: _.debounce(
			function(){
				var vm = this
				if(this.question.indexOf('?') === -1) {
					vm.answer = 'need a mark to end a question'
					return
				}
				vm.answer = 'Thinking...'
				axios.get('http://yesno.wtf.api')
					.then(function(response){
						vm.answer = _.capitalize(response.data.answer)
					})
					.catch(function(error){
						vm.answer = 'Error! Could not reach the API. ' + error
					})
			},500
		)
	}
})