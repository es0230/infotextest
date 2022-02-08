import users from './users.js'; // добавляем массив пользователей

let div = document.createElement('div');				// создаём
let table = document.createElement('table');		// элементы
let tableHeader = document.createElement('tr');	// страницы

document.body.append(div);	// добавляем
div.append(table);					// созданные
table.append(tableHeader);	// элементы

for (let i = 0; i < 5; i++) { 
	let th = document.createElement('th');
	th.textContent = Object.entries(users[0])[i][0];
	th.classList.add('cell');
	tableHeader.append(th);
} // наполняем заголовок таблицы ключами объектов массива пользователей


for (let i = 0; i < users.length; i++) {
	let tr = document.createElement('tr');
	for (let j = 0; j < 5; j++) {
		let td = document.createElement('td');
		td.classList.add('cell');
		td.classList.add(`${Object.entries(users[0])[j][0]}`);
		td.textContent = Object.entries(users[i])[j][1];
		tr.append(td);	
	}
	table.append(tr);
} // наполняем таблицу данными пользователей