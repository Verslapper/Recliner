function showAbout(e) {
	e.preventDefault();
	$(".about-content").show();
	$(".contact-content").hide();
	$(".updates-content").hide();
	$(".faq-content").hide();
}
function showContact(e) {
	e.preventDefault();
	$(".about-content").hide();
	$(".contact-content").show();
	$(".updates-content").hide();
	$(".faq-content").hide();
}
function showUpdates(e) {
	e.preventDefault();
	$(".about-content").hide();
	$(".contact-content").hide();
	$(".updates-content").show();
	$(".faq-content").hide();
}
function showFaq(e) {
	e.preventDefault();
	$(".about-content").hide();
	$(".contact-content").hide();
	$(".updates-content").hide();
	$(".faq-content").show();
}
function mediaQueryInit() {
const mediaQueryList = window.matchMedia("(max-width: 600px)");
if (mediaQueryList.matches) {
	$(".brewer").attr("src", "img/happy-brewer-mobile.jpg");
}
}
$(document).ready(function() {
	mediaQueryInit();
});