const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
	if (inputBox.value === '') {
		alert('You must write something!');
	} else {
		const newTask = document.createElement('li');
		newTask.innerText = inputBox.value;
		listContainer.appendChild(newTask);
		const span = document.createElement('span');
		span.innerText = '\u00d7';
		newTask.appendChild(span);
	}

	inputBox.value = '';
	saveTask();
}

listContainer.addEventListener('click', function (e) {
	if (e.target.tagName === 'LI') {
		e.target.classList.toggle('checked');
		saveTask();
	} else if (e.target.tagName === 'SPAN') {
		e.target.parentElement.remove();
		saveTask();
	}
});

function saveTask() {
	localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
	listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
