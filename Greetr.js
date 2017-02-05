(function(global, $) {
	// 'Calling Greetr or g creates a new object'
	var Greetr = function(firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	}
	// hidden within the scope of the IIFE and never directly accesible (using
	// closures)
	var supportedLangs = ['en', 'es'];

	// informal greetings
	var greetings = {
		en: 'Hello',
		es: 'Hola'

	};
	// formal greetings
	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'

	};
	// logger messages
	var logMessages = {
		en: 'Logged in',
		es: 'Inicio sesion'
	};
	// prototype holds methods (to save memory space)
	Greetr.prototype = {

		//'this' refers to the calling object at execution time i.e. the user created
		//object
		fullName: function() {
			return this.firstName + ' ' + this.lastName
		},

		validate: function() {
			//Checks that the inputed language is valid
		//references the externally inaccesible supportedLangs array within the
		//closure
			if (supportedLangs.indexOf(this.language) === -1) {
				throw "Invalid language";
			}
		},
		//retrieve messages from object by referring to properties using [] syntax
		//- gets the value by referencing the key as a string
		greeting: function() {
			return greetings[this.language] + ' ' + this.fullName + '!';
		},

		formalGreeting: function() {
			return formalGreetings[this.language] + ' ' + this.firstName + ' ' + this.lastName + '!'
		},


		//chainable methods return their own containing object
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
		},
	log: function() {
		if (console) {
				console.log(logMessages[this.language] + ': ' + this.fullName());
		}
		return this;
	},


	setLang: function(language) {
		this.language = language;

		this.validate();
		return this
	},

		changeName: function(firstName,formal) {
			this.firstName = firstName;
			return this;
		},
		//Uses jQuery to display the greeting in the DOM
		displayGreeting: function(selector,formal) {
			if (!$) {
				throw 'jQuery not loaded';
			}
			if (!selector) {
				throw 'Missing jQuery selector'
			}
			var msg;
			if (formal) {
				msg = this.formalGreeting();
			} else {
				msg = this.greeting();
			}
			$(selector).html(msg);

			return this;
		}


	};
	// The actual object is created here, allow the use of the 'new' keyword
	// without actually calling 'new'
	Greetr.init = function(firstName, lastName, language) {
		var self = this;
		self.firstName = firstName || 'Akin';
		self.lastName = lastName || 'Sowemimo';
		self.language = language || 'English'

		self.validate();
	}

	//trick borrowed from jQuery so we dont have to use the new keyword
	//when an object is created with init its prototype is set to Greetr
	Greetr.init.prototype = Greetr.prototype;

	//This exposes the Greeter object to the global execution context as well as
	//its alias
	global.Greetr = global.G$ = Greetr;
}(window, jQuery));
