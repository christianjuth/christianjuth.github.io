$(document).ready(() => {
	let date = new Date();
	let month = date.getMonth();

	if(month >= 10 || month <= 2){
		$("body").addClass("winter-mode");
	}
});