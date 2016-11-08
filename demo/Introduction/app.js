var main = new Vue({
    el: '#app',
    data: function(){
    	return {
    		message: 'Hello World!',
			todos: [{text:'test1'}],
			seen: true,
			title: 'This is title'
    	}
	},
	mounted: function(){
		this.todos.push({text:'test1'});
	},
	methods:{
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('')
		}
	}
});
Vue.component('todo-list',{
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})

var app1 = new Vue({
	el: '#app1',
	data: {
		todolist: [
			{text: 'learn Englist'},
			{text: 'do sports'},
			{text: 'makeup'}
		]
	}
});

var data = {a: 1};
var vm = new Vue({
	el: '#app1',
	data: {
		a: 1
	},
	watch: {
		a: function(val, oldVal) {
			console.log('new: s%, old %s', val, oldVal)
		}
	},
	created: function(){
		console.log('a is:' + this.a)
	}
});
// console.log(vm.a)
// console.log(data.a === vm.a)
// data.a = 2;
vm.a = 3;
// console.log(data.a)
// console.log(vm.data.a) //报错
// console.log(vm.$data.a)
// console.log($(vm.$el).find('li:eq(1)').html())
vm.$watch('a', function(newVal, oldVal){
	console.log("newVal",newVal,",oldVal",oldVal)
})

vm.a = 5;