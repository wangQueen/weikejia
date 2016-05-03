$(function(){
    $('.headmin').click(function(){
        $('.headmin').next().slideToggle()
    });
    move();
    $(window).scroll(move);
        function move() {
            if ($(window).scrollTop() > 0) {
                $('.top').css({height: 60, "background": "#000"});
                $('.headcenter ul li').css({height: 60});
                $('.headcenter ul li a').css({"line-height": "60px"});
                $('.headleft img').attr('src', 'images/logo.png').css({height: 40});
            } else {
                $('.top').css({height: 80, "background": ""});
                $('.headcenter ul li').css({height: 80});
                $('.headcenter ul li a').css({"line-height": "80px"});
                $('.headleft img').attr('src', 'images/logo-black.png').css({height: 50});
            }
        }
    var mySwiper = new Swiper ('.swiper-container', {
        autoplay : 3000,
        speed:300,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        // 如果需要滚动条
//        scrollbar: '.swiper-scrollbar',

    })

});