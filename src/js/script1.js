// 1) Нужно добавить обводку выбранному моду
// 2) Добавить смену курсоров


// *) Добавить медиа-запросы


class Paint {
	constructor() {
		// Кастомные курсоры
		this.cursorBrush = document.getElementById('cursorBrush');
		this.cursorEraser = document.getElementById('cursorEraser');


		// Настройки по умолчанию
		this.defaultMode = "color";
		this.defaultColor = "#766ec0";
		this.defaultSize = "64";

		this.container = document.getElementById('cells');
		this.inputHexColor = document.getElementById('inputHexColor');
		this.sideLength = document.getElementById('sideLength');
		this.sideSizeField = document.getElementById('sideSizeField');

		this.buttonCreateCell = document.getElementById('buttonCreateCell');
		this.buttonModeEraser = document.getElementById('buttonModeEraser');
		this.buttonModeColor = document.getElementById('buttonModeColor');

		this.flagMouseDown = false;
		this.flagEraserOn = false;

	}

	init() {
		// Листенер для добавления кастомного курсора
		window.addEventListener('mousemove', this.moveCursor)

		// Это флаг, принимает значение true, когда зажата левая кнопка мыши и false, когда кнопка отжата
		this.container.addEventListener('mousedown', () => {this.flagMouseDown = true});
		document.body.addEventListener('mouseup', () => {this.flagMouseDown = false});

		// Кнопка, которая создает сетку заданного размера
		this.buttonCreateCell.addEventListener('click', this.createCells);

		// Если меняется рамзер сетки, то выводится текущее значение в поле ниже ползунка и изменятся текущий размер сетки
		this.sideLength.addEventListener('mousemove', this.sideSizeFieldValue);
		this.sideLength.addEventListener('change', this.createCells);

		// С помощью этих кнопок происходит переключение режима с рисования на стерку и обратно
		this.buttonModeEraser.addEventListener('click', () => {this.flagEraserOn = true});
		this.buttonModeColor.addEventListener('click', () => {this.flagEraserOn = false});

		this.sideSizeFieldValue();
	}

	// Функция для движения курсора
	// moveCursor = (e) => {
	// 	const mouseY = e.clientY;
	// 	const mouseX = e.clientX;
	// 	if (this.flagEraserOn == false) {
	// 		// this.document.style.cursor = 'none';
	// 		this.cursorBrush.style.display = 'block';
	// 		this.cursorEraser.classList.remove('._display');
	// 		this.cursorBrush.style.transform = `translate3d(calc(${e.clientX}px ), calc(${e.clientY}px - 39px), 0)`
	// 	}
	// 	// Нужно добавить функцию для движения 
	// 	else if (this.flagEraserOn == true) {
	// 	// document.style = {cursor: none};
	// 	this.cursorBrush.classList.remove('._display');
	// 	this.cursorEraser.classList.add('._display');
	// 	this.cursorEraser.style.transform = `translate3d(calc(${e.clientX}px ), calc(${e.clientY}px), 0)`
	// 	}
	// 	// this.cursorEraser.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
	// }


	// Этот метод записывает текущий выбраенный размер под ползунком выбора размера сеткт
	sideSizeFieldValue = () => {
		let sideLength = this.sideLength.value
		this.sideSizeField.innerHTML = `${sideLength} x ${sideLength}`;
	}

	createCellsDefaul = () => {

		let cellsCount = this.defaultSize * this.defaultSize;
		for (let j=1; j <= cellsCount; j++) {
			let divNew = document.createElement('div');
			let divWidthHeight = (720 / sideLength) + 'px';
			divNew.className = 'div-cell'
			divNew.style.height = divWidthHeight;
			divNew.style.width =  divWidthHeight;

			divNew.addEventListener('mouseenter', this.dyeColor)
			divNew.addEventListener('mousedown', this.dyeColor)

			cells.append(divNew);
		}
	}

	// Этот метод создает доску для рисования заданных размеров
	createCells = () => {
		let sideLength = this.sideLength.value


		cells.innerHTML = '';
		let cellsCount = sideLength * sideLength;
		for (let j=1; j <= cellsCount; j++) {
			let divNew = document.createElement('div');
			let divWidthHeight = (720 / sideLength) + 'px';
			divNew.className = 'div-cell'
			divNew.style.height = divWidthHeight;
			divNew.style.width =  divWidthHeight;

			divNew.addEventListener('mouseenter', this.dyeColor)
			divNew.addEventListener('mousedown', this.dyeColor)

			cells.append(divNew);
		}
	}

	// Функция окрашиватель. Записывает из input.value Hex-код цвета в свойство background в класс элемента доски. 
	dyeColor = (e) => {
		this.color = this.inputHexColor.value;
		if (e.type === 'mouseenter' && !this.flagMouseDown) {
		return
		}
		
		if (this.flagEraserOn == false) {
		e.target.style.backgroundColor = this.color;
		// e.relatedTarget.style.backgroundColor = color
		} else if (this.flagEraserOn == true) {
		e.target.style.backgroundColor = '#fff'
		}
	}
}


// создание объекта paint с заданными классом свойствами, далее обращение к методу этого объекта

const paint = new Paint();
paint.init();