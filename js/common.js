$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(".scroll-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	$("body").vegas({
		timer:false,
		transitionDuration:2000,

		slides: [
		{ src: "./img/bg_01.jpg" },
		{ src: "./img/bg_02.jpg" },
		{ src: "./img/bg_03.jpg" },
		{ src: "./img/bg_04.jpg" }
		]
	});
});

$(document).ready(function(){

	$('.gallery-popup').magnificPopup({
		type:'image',
		gallery:{
			enabled:true
		}
	});

	$(".top-owl-carousel").owlCarousel({
		loop: true,
		items: 1,
		center: true,
		dots: true,
		autoplay: true
	});

	$(".news-owl-carousel").owlCarousel({
		loop: true,
		center: false,
		dots: true,
		autoplay: true,
		responsive : {
    // breakpoint from 0 up
    0 : {
        items: 1
    },
    480 : {
        items: 2
    },
    768 : {
        items: 3
    },
    // breakpoint from 768 up
    991 : {
        items: 4
    }
}
	});

	$(".testimonials-carousel").owlCarousel({
		loop: true,
		items: 1,
		center: true,
		dots: true,
		autoplay: true
	});

	var wow = new WOW(
	{
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       50,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
  );
	wow.init();
	$('a').smoothScroll();

	$(function(){
    $('#filter-container').mixItUp();
	});
});

$(window).on("scroll", function () {
            if ($(window).scrollTop() > 200) {
                $(".navbar").removeClass("transparent-nav");
                $(".scroll-top").css("display", "block");
            }
            else {
                $(".navbar").addClass("transparent-nav");
                $(".scroll-top").css("display", "none");
            }
        });
