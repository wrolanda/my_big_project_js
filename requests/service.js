function getImages(pageNumber, successCallback) {
	$.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`, {
		success: function (data) {
			successCallback (data)
		}
	});
}
