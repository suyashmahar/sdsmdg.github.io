// Window Scroll
var windowScroll = function () {
    $(window).scroll(function () {

        var scrollPos = $(this).scrollTop();

        if ($(window).scrollTop() > 70) {
            $('.site-header').addClass('site-header-nav-scrolled');
        } else {
            $('.site-header').removeClass('site-header-nav-scrolled');
        }
    });
};

function gifAnimation (ImgId, ImgFolder,ImgCount){

    var img = 0;

    var slides = new Array();

    while (img < ImgCount) {

        img++;

        // put your image src in sequence

        var src = 'assets/images/' + ImgFolder + img + '.jpg';

        slides.push(src);

    }

    var index = 0,timer = 0;

    showNextSlide();

    timer = setInterval(showNextSlide, 15000);

    function showNextSlide() {

        if (index >= slides.length) {

            index = 0;

        }

        document.getElementById(ImgId).src = slides[index++];
    }

$( document ).ready(function() {
    windowScroll();
});


$(document).ready(
	
});
