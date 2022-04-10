$(document).ready(function(){
    $('.carousel-top').slick({
        autoplay: true, // 自動再生
        autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
        arrows: true,
        prevArrow:'<div class="prev">prev</div>',
        nextArrow:'<div class="next">next</div>',
        dots: false, 
        fade: false, 
        centerMode: true,
        centerPadding:'0%',
        slidesToShow: 1,

        cssEase: 'ease-out',
    });
});

$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000, // 自動再生の速さ、単位はミリ秒
        arrows: false,

        dots: false, 
        fade: true, 
        centerMode: true,
        centerPadding:'0%',
        slidesToShow: 1,

        cssEase: 'ease-out',
    });
});
