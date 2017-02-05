function greet(event) {
	event.preventDefault();
	const firstName = document.querySelector('.firstName').value;
	const lastName = document.querySelector('.lastName').value;
	const select = document.querySelector('#lang');
	const lang = select.options[select.selectedIndex].value;

	console.log('greet ran');
	console.log(lang);


	var g = G$(firstName, lastName, lang)

	g.greet().setLang(lang).greet(true).displayGreeting('h1');
}

const submit = document.querySelector('#submit');
submit.addEventListener('click', greet);
