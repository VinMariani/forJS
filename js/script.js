// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// let elems = document.querySelectorAll('.elem');

// let divelem = document.querySelector('#div');
// let divs = document.querySelectorAll('.div');

// let a = document.querySelector('#a');

// let image = document.querySelector('#img');
// let image2 = document.querySelector('#img2');

// let text_input = document.querySelector('#text-input');
// let text_input2 = document.querySelector('#text-input-2');
// let text_input3 = document.querySelector('#text-input-3');
// let text_input4 = document.querySelector('#text-input-4');
// let text_input5 = document.querySelector('#text-input-5');

// let inputs = document.querySelectorAll('.text-input');

//



// 363-9
// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#text-input');
// let inp2 = document.querySelector('#text-input-2');
// let inp3 = document.querySelector('#text-input-3');

// btn.addEventListener('click', function() {
// 	inp3.value = Number(inp1.value) + Number(inp2.value);
// });

// 363-8
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('.text-input');
// let sum = 0;

// button.addEventListener('click', function() {
//     for (let elem of elems) {
//         sum += Number(elem.value);
//     }
// 	console.log(sum);
// });

// 363-7
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('.elem');
// let sum = 0;

// button.addEventListener('click', function() {
//     for (let elem of elems) {	
//         sum += Number(elem.textContent);
//     };
//     console.log(sum);
// })


// 363-6
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('.elem');

// button.addEventListener('click', function() {
// 	for (let elem of elems) {
// 		elem.innerHTML = `<b>${elem.textContent}</b>`;
// 	}
// });


// 363-5
// let elems = document.querySelectorAll('.elem');
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent += '!';
// 	});
// }

// 363-4
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('.elem');

// button.addEventListener('click', function() {
// 	let sum = 0;
	
// 	for (let elem of elems) {
// 		sum += Number(elem.textContent);
// 	}
	
// 	console.log(sum);
// });


// 363-3
// let button = document.querySelector('button');
// let elem   = document.querySelector('p');

// button.addEventListener('click', function() {
// 	elem.innerHTML = `<b>${elem.textContent}</b>`;
// });


// 363-2
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent = Number(this.textContent) + Number(1);
// 	});
// }

// 363-1
// let elems = document.querySelectorAll('p');
// for (let i = 0; i < elems.length; i++) {
//     elems[i].textContent += '!';
// }

// 362
// function sumDigits(year) {
//     let sum = 0;
//     while (year > 0) {
//       sum += year % 10;
//       year = Math.floor(year / 10);
//     }
//     return sum;
//   }
  
//   function func362() {
//     const list_items = document.getElementsByTagName("li");
//     let totalSum = 0; 
  
//     for (let i = 0; i < list_items.length; i++) {
//       const year = Number(list_items[i].textContent); // Преобразуем строку в число
//       if (sumDigits(year) === 6) { // Проверяем, равна ли сумма цифр 6
//         totalSum += year; // Добавляем год к общей сумме
//       }
//     }
  
//     console.log("Общая сумма годов:", totalSum);
//   }
//   func362();


// button1.addEventListener('blur', func3571);
// button2.addEventListener('click', img7);

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

// function func2() {
// 	alert(elem.textContent);
// }

// function func3() {
// 	elem.textContent = 'blablabla';
// 	alert(elem.textContent)
// }

// function summ() {
// 	let total = Number(elem.textContent) + Number(elem1.textContent);
// 	alert(total);
// }

// function sum_to_div() {
// 	let total = Number(elem.textContent) + Number(elem1.textContent);
// 	div.textContent = total;
// } 

// function new_p() {
// 	let res = Number(elem.textContent) + 10;
// 	elem.textContent = res;
// }

// function new_p1() {
// 	let res = elem.textContent + '!';
// 	elem.textContent = res
// }

// function read() {
// 	alert(elem.innerHTML)
// }

// function read2() {
// 	elem.innerHTML = '<b>HELLOOOOOOOOOOOO</b>';
// 	alert(elem.innerHTML);
// }

// function type() {
// 	elem2.type = 'submit';
// 	alert(elem2.type)
// }

// // 348 - 3
// function anchor() {
// 	elem.textContent = a.href;
// 	alert(elem.innerHTML)
// }

// // 348 - 4 
// function anchor2() {
// 	a.textContent = `${a.textContent} (${a.href})}`;
// }

// 348 - 5 
// function img() {
// 	elem1.textContent = image.src;
// }

// 348 - 6
// function img2() {
// 	image.width = '300';
// 	console.log(image.width);
// }

// // 348 - 7
// function img3() {
// 	image.width = image.width*2;
// 	console.log(image.width)
// }

// // 348 - 8 
// function img4() {
// 	image.src = "/img.jpg";
// }

// function img5() {
// 	image2.src = '/img/img2.jpg';
// }

// // 349 - 1
// function text() {
// 	text_input.value = 'new_text';
// }

// // 349 - 2
// function text2() {
// 	text_input.value = elem.textContent;
// }

// // 349 - 3
// function text3() {
// 	text_input2.value = text_input.value**2;
// }

// // 349 - 4 ???
// function text4() {
// 	text_input.value = text_input2.value;
// 	text_input2.value = text_input.value;
// }

// // 349 - 5
// function text5() {
// 	elem.textContent = (Number(text_input.value) + Number(text_input2.value) + Number(text_input3.value) + Number(text_input4.value) + Number(text_input5.value)) / 5;
// }

// 350 - 1 
// function focus() {
// 	text_input.value = '1';
// }

// function focus2() {
// 	text_input.value = '2';
// }

// // 350 - 2
// function focus3() {
// 	alert(text_input.value**2);
// }

// 350 - 3
// function focus4() {
// 	text_input.value = null;
// }

// // 351 - 1
// function div() {
// 	alert(divelem.className);
// }

// // 351 - 2
// function div2() {
// 	divelem.className = 'newClass';
// 	alert(divelem.className);
// }

// 351 - 3
// function div3() {
// 	let classes = [];

// 	// classes = divelem.classList;

// 	for (let i = 0; i < divelem.classList.length; i++) {
// 		classes.push(divelem.classList[i])
// 	};

// 	console.log(classes);
// }

// // 352 
// function img6() {
// 	console.log(document.querySelector('#img').src);
// }

// // 353
// function img7() {
// 	console.log(image.src);
// 	console.log(image.width);
// 	console.log(image.height);
// }

// // 354 - 1
// function thisfunc1() {
// 	this.value = '1';
// }

// function thisfunc2() {
// 	this.value = '2';
// }

// // 354 - 2
// function thisfunc3() {
// 	this.value = Number(this.value) + Number(1);
// }

// // 355 - 1 
// function texts() {
// 	this.textContent = this.textContent + '!';
// }

// // 355 - 2
// function text_input355() {
// 	this.value = Number(this.value)**2;
// }

// // 356 - 1
// function function3561() {
// 	for (let elem of elems) {
// 		elem.textContent = 'text'
// 	}
// }

// // 356 - 2
// function function3562() {
// 	for (let i = 0; i < elems.length; i++) {
// 		elems[i].textContent += `${i + 1}`;
// 	}
// }

// 356 - 3
// function function3563() {
// 	let sum = 0;
// 	for (let elem of inputs) {
// 		sum += Number(elem.value);
// 	}

// 	elem1.textContent = sum;
// }

// // 357 - 1
// function func357_1() {
// 	for (let elem of inputs) {
// 		elem.addEventListener('blur', function() {
// 		this.value = Number(this.value) + 1;
// 	});
// }
// }

// func357_1()

// 357 - 2
// function func357_2() {
// 	for (let elem of elems) {
// 		elem.addEventListener('click',  function() {
// 			this.textContent = this.textContent**2;
// 		});
// 	}
// }

// func357_2()

// 358
// function func358() {
// 	for (let div of divs) {
// 		div.addEventListener('click', function() {
// 			this.textContent++;
// 		});
// 	};
// };

// func358()

// text_input.addEventListener('blur', text_input355);
// text_input2.addEventListener('blur', text_input355);
// text_input3.addEventListener('blur', text_input355);
// text_input.addEventListener('blur', thisfunc2);
// elem1.addEventListener('click', texts)
// elem2.addEventListener('click', texts)
// elem3.addEventListener('click', texts)

// 359 - 1
// Дана ссылка и кнопка. 
// По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках. 
// Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
// button1.addEventListener('click', function359_1)

// function function359_1() {
//     a.textContent = a.textContent + '(' + a.href +')';
// 	button1.removeEventListener('click', function359_1);
// };

// 359 - 2
// Дана кнопка, значением которой служит число 1. 
// Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. 
// После того, как значение кнопки достигнет 10 - отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие.

// let count = 1;

// button1.addEventListener('click', function () {
// 	count++;
// 	if (count <= 10) {
// 		button1.value = count;
// 	} else{
// 		button1.removeEventListener('click', this);
// 	}
// });

// 360
// Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. 
// Сделайте так, чтобы это добавление происходило лишь по первому нажатию.

// for (let p of elems) {
// 	p.addEventListener('click', func)
// }

// function func() {
// 	this.textContent = this.textContent + '!';
// 	this.removeEventListener('click', func);
// }

// 361 - 1
// Дан список ul, в каждом пункте которого записано число. 
// Сделайте так, чтобы по клику на любую li ее число увеличивалось на единицу.

// for (let listItem of list_items) {
// 	listItem.addEventListener('click', function func361_1() {
// 		this.textContent = Number(this.textContent) + 1;
// 	});
// };

// 361 - 2
// Модифицируйте предыдущую задачу так, 
// чтобы каждая li увеличивала свое значение только по первому нажатию на нее.

// for (let listItem of list_items) {
// 	listItem.addEventListener('click', function func361_1() {
// 		this.textContent = Number(this.textContent) + 1;
// 		this.removeEventListener('click', func361_1);
// 	});
// };

// 361 - 3
// Модифицируйте предыдущую задачу так, 
// чтобы каждая li увеличивала свое значение только если ее значение меньше 10.

// for (let listItem of list_items) {
// 	listItem.addEventListener('click', function func361_1() {
// 		let counter = this.textContent;
// 		if (counter < 10) {
// 			counter++
// 			this.textContent = counter;
// 		} else {
// 			this.removeEventListener('click', func361_1);
// 		}
// 	});
// };

// 
