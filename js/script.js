// 377 
// Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn2');

// if (btn) {
//   btn.addEventListener('click', function() {
//     if (elem) {
//       elem.style.width = '60px';
//       elem.style.heigth = '30px'; 
//       elem.style.border = '1px solid black';
//     };
//   })
// }

// 376
// let elem = document.querySelector('#elem');
// if (elem) {
//   elem.classList.toggle('www')
// }

// 374
// let elem = document.querySelector('#elem');
// if (elem) {
//   if (elem.classList.contains('ggg')) {
//     elem.classList.remove('ggg')
//   } else {
//     console.log('такой класс не найден')
//   };
// } else {
//   console.log('такой элемент не найден')
// }

// 373-1
// let elem = document.querySelector('#elem');
// elem.classList.add('xxx')

// 372-2
// Переберите в цикле его классы.
// let elem = document.querySelector('#elem');
// let classes = elem.classList;
// for (let className of classes) {
//   console.log(className);
// }

// 372-1
// Узнайте количество его классов.
// let elem = document.querySelector('#elem');
// let classes = elem.classList;
// console.log(classes.length)

// 371
// let elems = document.querySelectorAll('.elem');
// let number = 0;
// elems.forEach((elem, index) => { 
//   elem.setAttribute('data-num', '');
//   elem.addEventListener('click', function() {
//     elem.setAttribute('data-num', index+1);
//   })
// })

// 370-1
// по клику на див в конец его текста добавлялась стоимость покупки, 
// равная цене, умноженной на количество.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
//   let price = parseInt(elem.dataset.productPrice);
//   let amount = parseInt(elem.dataset.productAmount);
//   elem.textContent += price*amount;
// })

// 369-5
// В инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. 
// чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.
// let input = document.querySelector('#elem');

// input.addEventListener('blur', function() {
//   let text = input.value;
//   let max = parseInt(input.dataset.max);
//   let min = parseInt(input.dataset.min);

//   if (text.length < min || text.length > max ) {
//     console.log('Ошибка')
//   } else {
//     console.log('ok')
//   }
// })

// 369-4 -- ??
// в атрибуте data-length содержится количество символов, которое нужно ввести в инпут.
// чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.
// let input = document.querySelector('#elem');

// input.addEventListener('blur', function() {
//   let text = input.value;
//   let textLength = parseInt(input.dataset.nL);

//   if (text.length === textLength) {
//     console.log('ok')
//   } else { 
//     console.log('not ok')
//   }
// })

// 369-3
// чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. 
// Пусть по клику на другую кнопку на экран выводится, сколько кликов было сделано по первой кнопке.
// let btnClick = document.querySelector('#btn');
// let btnCount = document.querySelector('#btn2');
// btnClick.setAttribute('data-count', '');
  
// btnClick.addEventListener('click', function() {
//   btnClick.dataset.count++;
// })

// btnCount.addEventListener('click', function() {
//   console.log(btnClick.dataset.count)
// })

// 369-2
// Даны дивы, содержащие в атрибуте data-num свой порядковый номер
// чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.
// let elems = document.querySelectorAll('div');
// elems.forEach((elem) => {
//   elem.addEventListener('click', function() {
//     this.textContent += this.dataset.num; 
//   })
// })

// 369-1
// чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
//   let newText = elem.dataset.text;
//   elem.textContent += newText;
// })

// 368
// let input = document.querySelector('#elem');
// console.log(input.hasAttribute('value'));

// 367-1
// let input = document.querySelector('#elem');
// input.removeAttribute('value')

// 366-2
// let input = document.querySelector('#elem');
// input.setAttribute('class', 'valid');

// 366-1
// let input = document.querySelector('#elem');
// input.setAttribute('value', 'text');

// 365-2
// let input = document.querySelector('#elem');
// let inputClass = input.getAttribute('class');
// console.log(inputClass)

// 365-1
// let input = document.querySelector('#elem');
// let inputValue = input.getAttribute('value');
// console.log(inputValue)

// 364-10
// Дан инпут. В него вводится число. 
// Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
// let input = document.querySelector('#inp1');
// input.addEventListener('blur', function() {
//   let text = input.value;
//   if (text.includes('3')) {
//     console.log('есть')
//   } else {
//     console.log('нет')
//   }
// })

// 364-9 
// Дан инпут. В него вводится слово. 
// По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
// let input = document.querySelector('#inp1');
// let btn = document.querySelector('button'); 

// btn.addEventListener('click', function() {
//   let letters = input.value;
//   let lastIndex = letters.length-1;
//   for (let i = 0; i < letters.length / 2; i++) {
//     if (letters[i] !== letters[lastIndex-i]) {
//       console.log('Неправильно')
//     } else {
//       console.log('Проверка пройдена')
//     }
//   }
// })


// {
//   let letters = input.value.split(''); // ['f', 'f', 'f', 'f']
//    for (let i=0; i<letters.length; i++) { // letters[i] = 'f'
//        console.log(letters[i])
//      }
// }

// 364-8
// Дан инпут. В него вводится дата в формате 31.12.2016. 
// По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
// let input = document.querySelector('#inp1');
// input.addEventListener('blur', function() {
//   let dates = input.value.split('.');
//   if (dates.length === 3) {
//     let [day, month, year] = dates;
//     let formattedDate = `${year}.${month}.${day}`;
//     input.value = formattedDate;
//   } else {
//     alert('Введите корректную дату')
//   }
// });
  
// 364-7
// Дан инпут. В него вводится текст. 
// По потери фокуса узнайте количество слов в этом тексте.
// let input = document.querySelector('#inp1');
// input.addEventListener('blur', function() {
//   let sum = 0; 
//   let words = input.value.split(' '); 
//   for (let i=0; i<words.length; i++) {
//     sum++;
//   };
//   console.log(sum)
// })

// 364-6
// Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. 
// по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).
// let input = document.querySelector('#inp1');
// input.addEventListener('blur', function() {
//   let fullname = input.value.split(' ');
//   fullname = fullname.map(name => {
//     return name.charAt(0).toUpperCase() + name.slice(1);
//   }); 
//    input.value = fullname.join(' ');
//    console.log(fullname)
// });

// 364-5
// Даны 4 инпута. В первый инпут вводится ФИО через пробел. 
// По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
// let inputFIO = document.querySelector('#inp1');
// let inputs = document.querySelectorAll('.inp');
// inputFIO.addEventListener('blur', function() {
//   let fullname = inputFIO.value.split(' '); // ['Иванов', 'Иван', 'Иванович']
//   for (let i=0; i<fullname.length; i++) {
//     if (i<inputs.length) {
//       inputs[i].value = fullname[i];
//     }
//   }
// })

// 364-4 - ?
// Дан инпут. В него вводятся числа через запятую. 
// По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
// let input = document.querySelector('#inp1');
// let sum = 0;
// let res = 0;
// input.addEventListener('blur', function() {
//   let digits = input.value.split(',');
//   for (let i=0; i<digits.length; i++) {
//     sum += Number(digits[i]);
//     res = sum / digits.length;
//   }
//   console.log(res);
// });

// 364-3
// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
// let input = document.querySelector('#inp1');
// input.addEventListener('blur', function() {
//   let digits = input.value.split('');
//    let sum = 0;
//    for (let digit of digits) {
//      sum += Number(digit);
//    }
//  	console.log(sum);
// })

// 364-2
// Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
// let inputs = document.querySelectorAll('input');
// let text = document.querySelector('p');
// let btn = document.querySelector('button');
// let sum = 0;

// btn.addEventListener('click', function() {
//   for (let input of inputs) {
//     sum += Number(input.value);
//   }
//   text.textContent = sum;
// })

// 364-1
// Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
// let input = document.querySelector('input')
// let paragraph = document.querySelector('p')

// input.addEventListener('blur', function() {
//   paragraph.textContent = paragraph.textContent + input.value
// })

// 363-15 
// В инпут вводится число. По потери фокуса в консоль должна вывестись сумма цифр этого числа:
// let inp = document.querySelector('#inp');
// inp.addEventListener('blur', function() {
// 	let digits = inp.value.split('');
//   let sum = 0;
//   for (let digit of digits) {
//     sum += Number(digit);
//   }
// 	console.log(sum);
// });


// 363-14
// В первые два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел:
// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');

// let sum  = 0;

// btn.addEventListener('click', function() {
//   sum = Number(inp1.value) + Number(inp2.value);
//   inp3.value = sum;
// });

// 363-13
// В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма введенных чисел:

// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');
// let sum = 0;

// btn.addEventListener('click', function() {
// 	for (let input of inputs) {
// 		sum += Number(input.value);
// 	}
	
// 	console.log(sum);
// });

// 363-12 
// В первые два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел:
// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')

// let texts = [
// 	'text1',
// 	'text2',
// 	'text3',
// ];

// button.addEventListener('click', function() {

//   for (let input of inputs) {
//     let flag = false;
// 		for (let text of texts) {
// 			if (input.value === text) {
//         flag = true;
// 			}
// 		}
//   if (flag === true) {
//     input.classList.add('right')
//   } else {
//     input.classList.add('wrong')
//   }
// }
// });

// 363-11
// В инпут вводится число. По потери фокуса в консоль должна вывестись сумма цифр этого числа:
// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')

// button.addEventListener('click', function() {
// 	for (let input of inputs) {
// 		if (input.value === input.dataset.text) {
// 			input.classList.add('right')
// 		} else {
// 			input.classList.add('wrong')
// 		}
// 	}
// });

// 363-10 ---???
// let btn  = document.querySelector('#btn');
// let res  = document.querySelector('#res');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');

// btn.addEventListener('click', function() {
//   res.textContent = Number(inp1.value) + Number(inp2.value);
// });



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
