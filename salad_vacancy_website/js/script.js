$(document).ready(function() {
	$('.burger_menu').click(function(event) {
		$('.burger_menu, .menu_body').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.menu_body').click(function(event) {
		$('.burger_menu, .menu_body').removeClass('active');
		$('body').removeClass('lock');
	});
	$('.slider').slick({
		dots: true,
	});
});
