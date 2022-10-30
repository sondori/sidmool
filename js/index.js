$(document).ready(function () {


    const swiper = new Swiper(" .swiper.banner-slide",{
        autoplay: {
            delay: 5000
        },
        loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            centeredSlides: true,
            freeMode: true,
            spaceBetween:20
    })


    const swiper2 = new Swiper(" .swiper.product-slide",{
        autoplay: {
            delay: 5000
        },
        loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            centeredSlides: true,
            spaceBetween: 1,
            slidesPerView: 4
    })

    const swiper3 = new Swiper(" .swiper.best-slide",{
        autoplay: {
            delay: 3500
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
            },
            centeredSlides: true,
            spaceBetween: 10,
            slidesPerView: 1
    }) // swiper

$(".content .content-wrap .menu ul li a").mouseover(function(){
    let i = $(this).index();
    $(".content .content-wrap .menu ul li a").eq(i).removeClass("on").addClass("on")
})






$(".best-wrap .best.swiper-slide").mouseover(function () { 
    $(this).find(".hover").show()
    $(this).find(".a").hide()


});




$(".best-wrap .best-slide").mouseout(function () { 
    let i = $(this).index()
    $(".best-slide .content-img .hover").hide();
    $(".best-slide .a").show();
    
});

$(".content .menu ul li .p").mouseover(function(){
    $(".nav .menu").addClass("on")
    $(".nav .menu .content").addClass("on")
})
$(".content .menu ul li .p").mouseout(function(){
    $(".nav .menu").removeClass("on")
    $(".nav .menu .content").removeClass("on")
})
$(".nav .menu .content").mouseover(function(){
    $(".nav .menu").addClass("on")
    $(".nav .menu .content").addClass("on")
})
$(".nav .menu .content").mouseout(function(){
    $(".nav .menu").removeClass("on")
    $(".nav .menu .content").removeClass("on")
})


$(".nav .menu .content ul li span").mouseover(function(){

    let i = $(this).index();

    $(".nav .menu .content ul li span").eq(i).removeClass("on").addClass("on")
    $(".content .content-wrap .menu ul li .p").addClass("on")




    


})


});//jqery 끝