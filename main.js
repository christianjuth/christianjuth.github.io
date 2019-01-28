$(document).ready(() => {
	let date = new Date();
	let month = date.getMonth();

	if(month >= 10){
		$("body").addClass("winter-mode");
	}
});