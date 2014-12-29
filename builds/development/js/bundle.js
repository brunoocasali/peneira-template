(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIEhpZGUgSGVhZGVyIG9uIG9uIHNjcm9sbCBkb3duXG52YXIgZGlkU2Nyb2xsO1xudmFyIGxhc3RTY3JvbGxUb3AgPSAwO1xudmFyIGRlbHRhID0gNTtcbnZhciBuYXZiYXJIZWlnaHQgPSAkKCdoZWFkZXInKS5vdXRlckhlaWdodCgpO1xuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBkaWRTY3JvbGwgPSB0cnVlO1xufSk7XG5cbnNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIGlmIChkaWRTY3JvbGwpIHtcbiAgICAgICAgaGFzU2Nyb2xsZWQoKTtcbiAgICAgICAgZGlkU2Nyb2xsID0gZmFsc2U7XG4gICAgfVxufSwgMjUwKTtcblxuZnVuY3Rpb24gaGFzU2Nyb2xsZWQoKSB7XG4gICAgdmFyIHN0ID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcbiAgICBcbiAgICAvLyBNYWtlIHN1cmUgdGhleSBzY3JvbGwgbW9yZSB0aGFuIGRlbHRhXG4gICAgaWYoTWF0aC5hYnMobGFzdFNjcm9sbFRvcCAtIHN0KSA8PSBkZWx0YSlcbiAgICAgICAgcmV0dXJuO1xuICAgIFxuICAgIC8vIElmIHRoZXkgc2Nyb2xsZWQgZG93biBhbmQgYXJlIHBhc3QgdGhlIG5hdmJhciwgYWRkIGNsYXNzIC5uYXYtdXAuXG4gICAgLy8gVGhpcyBpcyBuZWNlc3Nhcnkgc28geW91IG5ldmVyIHNlZSB3aGF0IGlzIFwiYmVoaW5kXCIgdGhlIG5hdmJhci5cbiAgICBpZiAoc3QgPiBsYXN0U2Nyb2xsVG9wICYmIHN0ID4gbmF2YmFySGVpZ2h0KXtcbiAgICAgICAgLy8gU2Nyb2xsIERvd25cbiAgICAgICAgICAgICQoJ2hlYWRlciBuYXYnKS5yZW1vdmVDbGFzcygnbmF2YmFyLWZpeGVkLXRvcCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNjcm9sbCBVcFxuICAgICAgICBpZihzdCArICQod2luZG93KS5oZWlnaHQoKSA8ICQoZG9jdW1lbnQpLmhlaWdodCgpKSB7XG4gICAgICAgICQoJ2hlYWRlciBuYXYnKS5hZGRDbGFzcygnbmF2YmFyLWZpeGVkLXRvcCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGxhc3RTY3JvbGxUb3AgPSBzdDtcbn1cblxuLy9TbGlkZXJcblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XG5cdCQoJyN0ZWFtLXNsaWRlcicpLmJqcXMoe1xuXHRcdCdhbmltdHlwZScgOiAnc2xpZGUnLFxuXHRcdCdoZWlnaHQnIDogMzIwLFxuXHRcdCd3aWR0aCcgOiAnNjIwJyxcblx0XHQnc2hvd21hcmtlcnMnIDogZmFsc2UsXG5cdFx0J3Jlc3BvbnNpdmUnIDogdHJ1ZSxcblx0XHQncmFuZG9tc3RhcnQnIDogdHJ1ZVxuXHR9KTtcbn0pO1xuXG4kKCcjbXlDYXJvdXNlbCcpLmNhcm91c2VsKHtcblx0aW50ZXJ2YWw6IDQwMDBcbn0pOyAiXX0=
