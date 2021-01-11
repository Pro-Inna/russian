$(document).ready(function(){
	$('.slider-sertificats').slick({
		dots:false,
		slidesToShow:4,
		slidesToScroll:2,
		speed:1000,
		responsive:[
			{
				breakpoint: 768,
				settings:{
					slidesToShow:3,
					slidesToScroll:1,
				}
			},{
				breakpoint: 450,
				settings:{
					slidesToShow:2,
					slidesToScroll:1,
				}
			}
		]
	});
});