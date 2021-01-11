$(document).ready(function(){
	$('.slider-program').slick({
		arrows:false,
		dots:true,
		slidesToShow:4,
		slidesToScroll:2,
		speed:1000,
		// autoplay:true,
		// autoplaySpeed:500,
		pauseOnFocus:true,
		responsive:[
			{
				breakpoint: 768,
				settings:{
					slidesToShow:3,
					slidesToScroll:1,
				}
			},	{
				breakpoint: 450,
				settings:{
					slidesToShow:2,
					slidesToScroll:1,
					// variableWidth:true,
				}
			}
		]
	});
});