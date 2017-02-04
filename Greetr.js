(function(global, $) {
	console.log(global)

	var Greetr = function(firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	}

	var supportedLangs = ['en', 'es'];

	var greetings = {
		en: 'Hello',
		es: 'Hola'

	};

	var formalGreetings = {
		en: 'Greetings',
		es: 'Hola'

	};

	var logMessages = {
		en: 'Logged in',
		es: 'Inicio sesion'
	};

	Greetr.prototype = {

		fullName: function() {
			return this.firstName + ' ' + this.lastName
		},

		validate: function() {
			if (supportedLangs.indexOf(this.language) === -1) {
				throw "Invalid language";
			}
		},

		greeting: function() {
			return greetings[this.language] + ' ' + this.firstName + '!';
		},

		formalGreeting: function() {
			return formalGreetings[this.language] + ' ' + this.firstName + this.lastName + '!'
		},



		greet: function(formal) {
			var msg;

			//if undefined or null it will be coerced to 'false'
			if (formal) {
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}

			if (console) {
				console.log(msg);
			}
			//'this' refers to the calling object at execution time
			//makes the method chainable
			return this
		}

	};

	Greetr.init = function(firstName, lastName, language) {
		var self = this;
		self.firstName = firstName || 'Akin';
		self.lastName = lastName || 'Sowemimo';
		self.language = language || 'English'
	}


	Greetr.init.prototype = Greetr.prototype;

	global.Greetr = global.G$ = Greetr;
	console.log(Greetr)
}(window, jQuery));
