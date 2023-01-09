//  variables

let string = "";
let btns = document.querySelectorAll('.btn');
let count = -1;

//  procedure


btns.forEach((items) => {
	items.addEventListener('click', (e) => {
		if (e.target.innerHTML == '=') {
			string = eval(string)
			document.querySelector('input').value = string;
		}
		else if (e.target.innerHTML == 'Ac') {
			string = '';
			document.querySelector('input').value = string;

		}
		else if (e.target.innerHTML == 'Back') {
			string = string.slice(0, -1);
			document.querySelector('input').value = string;
		}
		else {
			string = string + e.target.innerHTML;
			document.querySelector('input').value = string;
			// console.log(string)
		}
	})
})