$(document).ready(function() {

	$("#btn-txt").click(function(){
		$(".p1").slideToggle(600);
	});

	$("#btn-txt1").click(function(){
		$(".p2").slideToggle(600);
	});
	var controller = new ScrollMagic.Controller();

	if ($('.parallax').length) {
	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.parallax',
		triggerHook: 4,
		duration: 1200
	})
	.setTween(TweenMax.fromTo('.prlx1', 2, {y: '0%', ease:Linear.easeNone}, {y: '-40%', ease:Linear.easeNone}))
	.addTo(controller)
	}

	if ($('.dark-bg').length) {
	var fadeInImage = new ScrollMagic.Scene({
		triggerElement: '.dark-bg'
	})
	.setClassToggle('#dark-bg-img', 'fade-in')
	.addTo(controller);
	}

	if ($('.proposer').length) {
	var fadeInProp = new ScrollMagic.Scene({
		triggerElement: '.proposer',
		triggerHook: 2
	})
	.setClassToggle('.proposer', 'slide-in')
	.addTo(controller);
}


	var overlayImage = new TimelineMax();

	overlayImage.set('.prlx-overlay', {autoAlpha: 0.2})
				.to('.prlx-overlay', 1, {autoAlpha: 1, ease:Linear.easeNone})


	if ($('.parallax2').length) {
	var slideParallaxScene1 = new ScrollMagic.Scene({
		triggerElement: '.parallax2',
		triggerHook: 1,
		duration: 1100
	})
	.setTween(overlayImage)
	.addTo(controller)
	}

	var scrollToBtn = new TimelineMax()
	scrollToBtn.from('.scroll-btn', 0.6, {y: '20%', ease:Power4.easeOut, repeat: -1, yoyo: true}, 0.2)

	$(function() {
	    $('#scrollBtn').click (function() {
	      $('html, body').animate({scrollTop: $('section.firstsection').offset().top }, 'slow');
	      return false;
	    });
	  });

	$('.ttip').tooltipster({
		trigger: 'custom',
		triggerOpen: {
    	  click: true,  // For mouse
    	  tap: true    // For touch device
    	},
    	triggerClose: {
    	  click: true,  // For mouse
    	  tap: true    // For touch device
    	},
		contentAsHTML: true,
		arrow: false,
		maxWidth: 320,
		theme: 'tooltipster-wb',
		position: 'top',
		interactive: true
	})
	$('.wttip').tooltipster({
		trigger: 'custom',
		triggerOpen: {
    	  click: true,  // For mouse
    	  tap: true    // For touch device
    	},
    	triggerClose: {
    	  click: true,  // For mouse
    	  tap: true    // For touch device
    	},
		contentAsHTML: true,
		arrow: false,
		maxWidth: 320,
		theme: 'tooltipster-gb',
		position: 'top',
		interactive: true
	})
	$('.tooltip').tooltipster({
		trigger: 'click',
		contentAsHTML: true,
		arrow: false,
		maxWidth: 420,
		position: 'bottom',
		interactive: true
	});

//video popup
$('#chanel-link').magnificPopup({
    delegate: 'a',
    type: 'inline',
    callbacks: {
        open: function() {

            $('html').css('margin-right', 0);

            // Play video on open:
            $(this.content).find('video')[0].play();

        },
        close: function() {

            // Reset video on close:
            $(this.content).find('video')[0].load();

        }
    }
});


});
