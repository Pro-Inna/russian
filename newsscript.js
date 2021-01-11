"use strict"

$(document).ready(function(){
	$('.slider-box').slick({
		arrows: false,
		dots: true,
		infinite: false,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});
});

/* Код с Инета на JQuery
let size = 64,
	newsContent= $('.news-header__text'),
	newsText = newsContent.text();

if(newsText.length > size){
	newsContent.text(newsText.slice(0, size) + ' ...');
}
*/


let size = 64,
	headersNews = document.querySelectorAll('.news-header__text');

for (let headerNews of headersNews) {
	let textNews = headerNews.textContent;

	if (textNews.length >= size) {
	headerNews.textContent = textNews.slice(0, size) + '...';
}
}


$(window).resize(function() {

  if ( $(window).width() < 540 ) {
  			let size2 = 40,
			headersNews = document.querySelectorAll('.news-header__text');

		for (let headerNews of headersNews) {
	let textNews = headerNews.textContent;

	if (textNews.length >= size2) {
	headerNews.textContent = textNews.slice(0, size2) + '...';
}
}
  }

});









