//console.log('im here too on front')
import $ from 'jquery'
window.jQuery = window.$ = $;
import 'slick-carousel'
/*jQuery(document).ready(function( $ ) {
});*/


if(1)jQuery(document).ready(function( $ ) {
	$('.wp-block-un-block-slider').not('.slick-initialized').each(function(index, el) {
		$(el).slick({
			//rtl: true
			infinite: true,
			dots: true,
			autoplay: false,
			autoplaySpeed: 5000,
			speed: 600,
			//adaptiveHeight: true,
			arrows: false,
			centerPadding: '60px',
		});
	});

	$('.wc-block-grid.carousel > .wc-block-grid__products').not('.slick-initialized').slick({
		dots: true,
		arrows: true,
		infinite: true,
		speed: 600,
		centerPadding: '60px',
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows:false
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});
});

