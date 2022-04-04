const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number");
const getImagesButton = document.querySelector("#get-images");
const getTasksButton = document.querySelector("#get-tasks");

debugger;
//createTask('learn CSS');
//deleteTask('ac5f8fd7-6a20-46db-ae37-f08fe8cdadba');
updateTask('24f3338c-ae24-4d2c-9305-fa4d21b66637', 'learn qwerty');

getImagesButton.addEventListener("click", () => {
	const promise = getImages(pageNumberEl.value);
	promise
		.then(onImagesReceived);
});

getTasksButton.addEventListener("click", () => {
	const promise = getTasks();
	promise
		.then(onTasksReceived);
});

function onImagesReceived(array) {
	array.forEach(el => {
		const img = document.createElement('img');
		img.src = el.thumbnail;
		document.querySelector('#images-result').appendChild(img);
	});
}

function onTasksReceived(tasks) {
	const result = document.querySelector('#tasks-result');
	result.innerHTML = '';

	tasks.forEach(task => {
		const li = document.createElement('li');
		li.innerHTML = task.title;
		li.dataset.id = task.id;
		result.appendChild(li);
	});
}

