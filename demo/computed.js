var computed = new Vue({
	el: '#computed',
	data: {
		message: 'Hello',
		firstName: 'Foo',
	    lastName: 'Bar',
		fullName: '1111'
	},
	computed: {
		reversedMessage: function () {
			return this.message.split('').reverse().join('');
		},
		fullName: {
			// getter
		    get: function () {
		      return this.firstName + ' ' + this.lastName
		    },
		    // setter
		    set: function (newValue) {
		      var names = newValue.split(' ')
		      this.firstName = names[0]
		      this.lastName = names[names.length - 1]
		    }
		}
		// now: function(){
		// 	return Date.now()
		// }
	}
})