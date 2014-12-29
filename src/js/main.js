// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
            $('header nav').removeClass('navbar-fixed-top');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
        $('header nav').addClass('navbar-fixed-top');
        }
    }
    
    lastScrollTop = st;
}

//Slider

jQuery(document).ready(function($) {
	$('#team-slider').bjqs({
		'animtype' : 'slide',
		'height' : 320,
		'width' : '620',
		'showmarkers' : false,
		'responsive' : true,
		'randomstart' : true
	});
});

$('#myCarousel').carousel({
	interval: 4000
}); 