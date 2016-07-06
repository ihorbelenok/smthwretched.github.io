$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$("a").smoothScroll();
	
});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
	$(".player").YTPlayer();
	if ($(window).scrollTop() > 400) {
		$(".nav").css("display", "inline-block");
	}
});

$("#greeting").typed({
	loop: false,
	strings: ["a web-developer.", "a freelancer.", "Antik."],
	typeSpeed: 25,
	backSpeed: 10,
	startDelay: 500,
	backDelay: 500,
	callback: function() {
		$('.second-line').fadeIn("slow",function(){$('.link-line').fadeIn("slow");});
	}
});

$(window).on("scroll", function () {
	if ($(window).scrollTop() > 400) {
		$(".nav").css("display", "inline-block");
	}
});

$(".link-line a").on("click", function(){
	$("body").css("overflow-y", "visible");
});

$('.prof-skills').highcharts({
	chart: {
		type: 'bar',
		backgroundColor: 'transparent',
	},
	tooltip: {
		enabled: false
	},
	title: {
		text: 'Professional skills',
		style: {"color": "#f0f0f0", "fontSize": "24px"},
	},
	xAxis: {
		categories: ['HTML', 'CSS', 'jQuery', 'Django', 'Bootstrap' ,'Photoshop', 'Linux', 'SQL', 'Git'],
		labels: {
			style: {"color": "#f0f0f0", "shadow": "none", "fontSize": "18px"},
		},
		gridLineColor: 'transparent',
	},
	yAxis: {
		min: 0,
		labels: {enabled: false},
		title: {enabled: false},
		gridLineColor: 'transparent',
	},
	credits: {
		enabled: false
	},
	series: [{
		name: '',
		showInLegend: false,
		data: [90, 80, 70, 50, 100, 50, 80, 70, 80],
	}]
});

$('.pers-skills').highcharts({
	chart: {
		type: 'bar',
		backgroundColor: 'transparent',
	},
	tooltip: {
		enabled: false
	},
	title: {
		text: 'Personal skills',
		style: {"color": "#f0f0f0", "fontSize": "24px"},
	},
	xAxis: {
		categories: ['Attentive', 'Accurate', 'Cooperative', 'Dedicated', 'Efficient', 'Flexible', 'Motivated', 'Reliable', 'Responsible'],
		labels: {
			style: {"color": "#f0f0f0", "shadow": "none", "fontSize": "18px"},
		},
		gridLineColor: 'transparent',
		opposite: true,
	},
	yAxis: {
		max: 0,
		labels: {enabled: false},
		title: {enabled: false},
		gridLineColor: 'transparent',
	},
	credits: {
		enabled: false
	},
	series: [{
		name: '',
		showInLegend: false,
		data: [-80, -90, -75, -100, -100, -80, -80, -90, -80],
	}]
});

$(".portfolio-carousel").owlCarousel({
	loop: true,
	center: false,
	dots: true,
	autoplay: true,
	autoplayHoverPause:true,
	responsive : {
    // breakpoint from 0 up
    0 : {
    	items: 1
    },
    480 : {
    	items: 2
    },
    768 : {
    	items: 2
    },
    // breakpoint from 768 up
    991 : {
    	items: 2
    }
  }
});

$('[data-toggle="tooltip"]').tooltip();


	$('.portfolio-popup').magnificPopup({
		type:'image',
		gallery:{
			enabled:true
		}
	});


