// 339
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector("#elem2");
// let elem3 = document.querySelector("#elem3");

// let elem = document.querySelector('#parent input');

// let elem4 = document.querySelector('#block p');

// let elem5 = document.querySelector('.block p');

// let elem6 = document.querySelector('.www');

// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
// 	alert('!!!');
// });

// 341
// let button1 = document.querySelector('#button1');

// button1.addEventListener('click', function() {
// 	alert('1');
// });

// let button2 = document.querySelector('#button2');

// button2.addEventListener('click', function() {
// 	alert('2');
// });

// let button3 = document.querySelector('#button3');

// button3.addEventListener('click', function() {
// 	alert('3');
// });

// 342
// function func1() {
// 	alert(1);
// }

function func2() {
	alert(elem.textContent);
}

function func3() {
	elem.textContent = 'blablabla';
	alert(elem.textContent)
}

function summ() {
	let total = Number(elem.textContent) + Number(elem1.textContent);
	alert(total);
}

function sum_to_div() {
	let total = Number(elem.textContent) + Number(elem1.textContent);
	div.textContent = total;
} 

function new_p() {
	let res = Number(elem.textContent) + 10;
	elem.textContent = res;
}

function new_p1() {
	let res = elem.textContent + '!';
	elem.textContent = res
}

function read() {
	alert(elem.innerHTML)
}

function read2() {
	elem.innerHTML = '<b>HELLOOOOOOOOOOOO</b>';
	alert(elem.innerHTML);
}

function type() {
	elem2.type = 'submit';
	alert(elem2.type)
}

function anchor() {
	elem.textContent = a.href;
	alert(elem.innerHTML)
}
// let button1 = document.querySelector('#button1');

// button1.addEventListener('click', func1);

let button2 = document.querySelector('#button2');
let elem = document.querySelector('#elem');
let elem1 = document.querySelector('#elem1');
let div = document.querySelector('.div');
let a = document.querySelector('#a')
// button2.addEventListener('click', func2);
// button2.addEventListener('mouseover', func2);
// button2.addEventListener('mouseout', func2);
// button2.addEventListener('dblclick', func2)

button2.addEventListener('click', anchor);


