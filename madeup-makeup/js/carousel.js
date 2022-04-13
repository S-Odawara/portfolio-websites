$(document).ready(function(){
    $('.carousel-top').slick({
        autoplay: true, // 自動再生
        autoplaySpeed: 3000, // 自動再生の速さ、単位はミリ秒
        speed: 600,
        cssEase: 'ease-out',

        arrows: false,
        //prevArrow:'<div class="prev">prev</div>',
        //nextArrow:'<div class="next">next</div>',
        dots: false, 
        draggable: false,
        swipe: false,
        pauseOnFocus: false,
        pauseOnHover:false,

        fade: false, 
        centerMode: true,
        centerPadding:'15%',
        slidesToShow: 1,

    });
});

$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000, // 自動再生の速さ、単位はミリ秒
        speed: 1000,
        arrows: false,
        dots: false, 
        fade: true, 
        centerMode: true,

        //centerPadding:'0%',
        //slidesToShow: 1,
    });
});
