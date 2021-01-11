let itemServices = document.querySelectorAll('.item__services');
let footerTitle = document.querySelectorAll('.footer-title');


footerTitle[0].onclick = function(event){
	footerTitle[0].classList.toggle('active');

	itemServices[0].classList.toggle('is-closed');
	itemServices[0].classList.toggle('is-open');
};

footerTitle[1].onclick = function(event){
	footerTitle[1].classList.toggle('active');

	itemServices[1].classList.toggle('is-closed');
	itemServices[1].classList.toggle('is-open');
};

footerTitle[2].onclick = function(event){
	footerTitle[2].classList.toggle('active');

	itemServices[2].classList.toggle('is-closed');
	itemServices[2].classList.toggle('is-open');
};

