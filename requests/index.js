const resultBlock = document.querySelector("#result");
const pageNumberEl = document.querySelector("#page-number");
const clickMeButton = document.querySelector("#click-me");

clickMeButton.addEventListener("click", () => {
	getImages(pageNumberEl.value, onDataReceived);
});

function onDataReceived(data) {
	data.forEach(el => {
		const img = document.createElement('img');
		img.src = el.thumbnail;
		document.querySelector('#result').appendChild(img);
	});
}
