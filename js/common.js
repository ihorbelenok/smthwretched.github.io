var small_media = false;
if ($(window).width() < 480) {
	small_media = true;
}

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
	if ($(window).scrollTop() > 400) {
		$(".nav").css("display", "inline-block");
	}
});

if ($(window).width() <= 320) {
	$(".greeting").typed({
		loop: false,
		strings: ["Antik"],
		typeSpeed: 25,
		backSpeed: 10,
		startDelay: 500,
		backDelay: 500,
		callback: function() {
			$('.second-line').fadeIn("slow");	
		}
	});
}
else {
	$(".greeting").typed({
		loop: false,
		strings: ["a web-developer", "a freelancer", "Antik"],
		typeSpeed: 25,
		backSpeed: 10,
		startDelay: 500,
		backDelay: 500,
		callback: function() {
			$('.second-line').fadeIn("slow");	
		}
	});
}

var hc_fz = "14px";
if ($(window).width() <= 768){
	hc_fz = "12px";
}

$('.prof-skills').highcharts({
	chart: {
		type: 'bar',
		backgroundColor: 'transparent',
	},
	tooltip: {
		enabled: false
	},
	title: {
		text: null,
	},
	plotOptions: {
        series: {
        	pointWidth: parseInt(hc_fz)+6,
            pointPadding: 0,
            groupPadding: 0,
            borderWidth: 0,
            shadow: false
        }
    },
	xAxis: {
		categories: ['HTML', 'CSS', 'jQuery', 'Django', 'Bootstrap' ,'Photoshop', 'Linux', 'SQL', 'Git'],
		labels: {
			style: {"color": "#f0f0f0", "shadow": "none", "fontSize": hc_fz},
			align: 'left',
			padding: 2,
			reserveSpace: false,
			x: 10,
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
		text: null,
	},
	plotOptions: {
        series: {
            pointWidth: parseInt(hc_fz)+6,
            pointPadding: 0,
            groupPadding: 0,
            borderWidth: 0,
            shadow: false
        }
    },
	xAxis: {
		categories: ['Attentive', 'Accurate', 'Cooperative', 'Dedicated', 'Efficient', 'Flexible', 'Motivated', 'Reliable', 'Responsible'],
		labels: {
			style: {"color": "#f0f0f0", "shadow": "none", "fontSize": hc_fz},
			align: 'left',
			padding: 2,
			reserveSpace: false,
			x: 10,
		},
		gridLineColor: 'transparent',
		opposite: false,
	},
	yAxis: {
		max: 100,
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
		data: [80, 90, 75, 100, 100, 80, 80, 90, 80],
	}]
});

$('[data-toggle="tooltip"]').tooltip();


	$('.portfolio-popup').magnificPopup({
		type:'image',
		gallery:{
			enabled:true
		}
	});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS("particles-bg", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 0,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

$(document).ready(function() {
    $('#fullpage').fullpage({
    });
});

$('.arrow-right').on('click', function(){
  $.fn.fullpage.moveSlideRight();
});

$('.arrow-left').on('click', function(){
  $.fn.fullpage.moveSlideLeft();
});

$('.arrow-down').on('click', function(){
  $.fn.fullpage.moveSectionDown();
});

$('.arrow-up').on('click', function(){
  $.fn.fullpage.moveSectionUp();
});


