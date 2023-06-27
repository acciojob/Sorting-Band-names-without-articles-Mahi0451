//your code here
let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let modifiednames = bandNames.map(names => .replace(/^(a|an|the)\s/i"))

modifiednames.sort();
let ul = document.createElement('ul');
ul.setAttribute('id', 'band');
modifiednames.forEach(name => {
	let li = document.createElement('li');
	li.textContent = name;
	ul.appendChild(li);
})