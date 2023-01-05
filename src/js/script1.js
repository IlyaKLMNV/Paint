//1) Переписать вычисляемые свойства в set
//2) 


// переменная устанавает длину стороны сетки
// Раскомментить

// let i = prompt('vvedete razmer setke');

class Paint {
	constructor() {

		// this.backgroundColor = this.getElementById('inputHexColor')

	}

	// i - это переменная, которая вводится пользователем и является длиной стороны сетки

	createCells = () => {
	
		let cellsCount = i * i;
		for (let j=1; j <= cellsCount; j++) {
			let divNew = document.createElement('div');
			let divWidthHeight = (720 / i) + 'px';
			divNew.className = 'div-cell'
			divNew.style.height = divWidthHeight;
			divNew.style.width =  divWidthHeight;
			
			cells.append(divNew);
		}
	}

	// находит все элементы с классом div-cell
	findAllDivCells = () => {
		let elements = document.querySelectorAll('div-cell');

	}
	
	// Функция окрашиватель. Записывает из js свойство background в класс. цвет берет из функции-генератора. Срабатывает когда выполняется условие что зажата клавиша мыши и на блоке есть mouseover.

}


// создание объекта paint с заданными классом свойствами, далее обращение к методу этого объекта
// Расскомментить

// const paint = new Paint();
// paint.createCells();



const showValueInput = () => {
	let showValue = document.querySelector('#inputHexColor').value;
	alert(showValue);
	console.log("dfgfg");
}



buttonHexColor.addEventListener('click', showValueInput);




// Этот код находит все делители чисола заданного через prompt

// let nautiDelitely = prompt('vvedete chislo dlya nahojdeniya deliteley');
// 	for (let i=1; i <= nautiDelitely; i++) {
// 		if (nautiDelitely%i == 0) { 
// 		console.log(i);
// 		}
// 	}