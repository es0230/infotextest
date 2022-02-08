import users from './users.js'; // добавляем массив пользователей

let div = document.createElement('div');				// создаём
let table = document.createElement('table');		// элементы
let tableHeader = document.createElement('tr');	// страницы

document.body.append(div);	// добавляем
div.append(table);					// созданные
table.append(tableHeader);	// элементы

for (let i = 0; i < Object.entries(users[0]).length; i++) { 
	let th = document.createElement('th');
	th.textContent = Object.entries(users[0])[i][0];
	tableHeader.append(th);
} // наполняем заголовок таблицы ключами объектов массива пользователей