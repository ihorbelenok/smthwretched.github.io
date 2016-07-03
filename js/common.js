$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
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
		items: 4,
		center: false,
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

	$(function(){
    $('#filter-container').mixItUp();
	});
});
