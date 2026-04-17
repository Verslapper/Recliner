function mediaQueryInit() {
	const mediaQueryList = window.matchMedia("(max-width: 600px)");
	if (mediaQueryList.matches) {
		$(".brewer").attr("src", "img/happy-brewer-mobile.jpg");
	}
}
$(document).ready(function() {
	mediaQueryInit();
});