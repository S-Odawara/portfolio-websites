$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true, // 自動再生
        autoplaySpeed: 3000, // 自動再生の速さ、単位はミリ秒
        arrows: false,
        dots: false, 
        fade: false, 
        centerMode: true,
        centerPadding:'20%',
        slidesToShow: 1,
    });
});
