class Paint {
	constructor() {
		// Кастомные курсоры
		this.cursorBrush = document.getElementById('cursorBrush');
		this.cursorEraser = document.getElementById('cursorEraser');

		// Настройки по умолчанию
		this.defaultMode = 'color';
		this.defaultColor = '#000';
		this.defaultSize = '64';

		this.currentMode = this.defaultMode;
		this.currentColor = this.defaultColor;
		this.currentSize = this.defaultSize;

		this.container = document.getElementById('cells');
		this.inputHexColor = document.getElementById('inputHexColor');
		this.sideLength = document.getElementById('sideLength');
		this.sideSizeField = document.getElementById('sideSizeField');

		this.buttonCreateCell = document.getElementById('buttonCreateCell');
		this.buttonModeEraser = document.getElementById('buttonModeEraser');
		this.buttonModeColor = document.getElementById('buttonModeColor');

		this.flagMouseDown = false;

	}

	init() {
		// Листенер для добавления кастомного курсора
		window.addEventListener('mousemove', this.moveCursor)

		// Флаг, принимает значение true, когда зажата левая кнопка мыши и false, когда кнопка отжата
		this.container.addEventListener('mousedown', () => {this.flagMouseDown = true});
		document.body.addEventListener('mouseup', () => {this.flagMouseDown = false});

		// Выбор цвета из палитры
		this.inputHexColor.addEventListener('change', () => {this.currentColor = this.inputHexColor.value});
		this.inputHexColor.addEventListener('change', this.dyeColor);

		// Если меняется рамзер сетки, то выводится текущее значение в поле ниже ползунка и изменятся текущий размер сетки
		this.sideLength.addEventListener('mousemove', this.sideSizeFieldValue);
		this.sideLength.addEventListener('change', () => {this.currentSize = this.sideLength.value});
		this.sideLength.addEventListener('change', this.createCells);

		// С помощью этих кнопок происходит переключение режима с рисования на стерку и обратно
		this.buttonModeEraser.addEventListener('click', () => {this.currentMode = 'eraser'});
		this.buttonModeColor.addEventListener('click', () => {this.currentMode = 'color'});

		// 
		this.sideSizeFieldValue();
	}

	// Этот метод записывает текущий выбраенный размер под ползунком выбора размера сеткт
	sideSizeFieldValue = () => {
		let sideLength = this.sideLength.value
		this.sideSizeField.innerHTML = `${sideLength} x ${sideLength}`;
	}

	// Этот метод создает доску для рисования заданных размеров
	createCells = () => {
		cells.innerHTML = '';
		let sideLength = this.currentSize
		let cellsCount = sideLength * sideLength;
		this.container.style.gridTemplateColumns = `repeat(${sideLength}, 1fr)`
		this.container.style.gridTemplateRows = `repeat(${sideLength}, 1fr)`
		for (let j=1; j <= cellsCount; j++) {
			let divNew = document.createElement('div');
			divNew.addEventListener('mouseenter', this.dyeColor)
			divNew.addEventListener('mousedown', this.dyeColor)
			cells.append(divNew);
		}
	}

	// Функция окрашиватель. Записывает из input.value Hex-код цвета в свойство background в класс элемента доски. 
	dyeColor = (e) => {
		// this.color = this.currentColor
		if (e.type === 'mouseenter' && !this.flagMouseDown) {
			return
		}
		if (this.currentMode == 'color') {
			e.target.style.backgroundColor = this.currentColor;
		} else if (this.currentMode == 'eraser') {
			e.target.style.backgroundColor = '#fff'
		}
	}
}


// создание объекта paint с заданными классом свойствами, далее обращение к методу этого объекта

const paint = new Paint();
paint.init();
paint.createCells();