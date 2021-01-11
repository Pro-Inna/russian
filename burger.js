$(document).ready(function() {
	$('.header-burger').click(function(event) {
		$('.header-burger, .header-bottom').toggleClass('active');
		$('body').toggleClass('lock');
	});
});