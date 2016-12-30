function gifAnimation(ImgId, ImgFolder,ImgCount){

    var img = 0;

    var slides = new Array();

    var getUrl = window.location;
	var baseUrl = getUrl .protocol + "//" + getUrl.host ;

    while (img < ImgCount) {

        img++;

        var src = baseUrl+'/assets/images/posts_images/' + ImgFolder + img + '.png';

        slides.push(src);

    }

    var index = 0,timer = 0;

    showNextSlide();

    timer = setInterval(showNextSlide, 2000);

    function showNextSlide() {

        if (index >= slides.length) {

            index = 0;

        }

        document.getElementById(ImgId).src = slides[index++];
    }
}

$( document ).ready(function() {
	gifAnimation('userapp_gif_1','108hackathon/userapp_1/',4);
});	

