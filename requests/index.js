const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number");
const getImagesButton = document.querySelector("#get-images");
const getTasksButton = document.querySelector("#get-tasks");


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

createTask('text1').then((data) => {
	debugger;
	console.log(data);
})

function onImagesReceived(array) {
	array.forEach(el => {
		const img = document.createElement('img');
		img.src = el.thumbnail;
		document.querySelector('#images-result').appendChild(img);
	});
}

function onTasksReceived(tasks) {
	tasks.forEach(task => {
		const li = document.createElement('li');
		li.innerHTML = task.title;
		document.querySelector('#tasks-result').appendChild(li);
	});
}

