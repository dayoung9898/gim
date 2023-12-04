
$('.gnb>li').click(function(){

        var winWidth = $(window).width();
    
        if(winWidth <= 1300) {
           $(this).find('.arr').addClass('active');
           $(this).siblings().find('.arr').removeClass('active');
           $(this).children('.sub').stop().slideToggle();
           $(this).siblings().children('.sub').stop().slideUp();
        } else if(winWidth > 1300){
            $(this).children('.sub').stop().slideDown();
        }
});

$(window).resize(function() {
    var winWidth = $(window).width();

    if(winWidth < 900) {
        $(".gnb > li .sub").css("display", "none");
    } else if(winWidth >= 900){
        $(".gnb > li .sub").css("display", "block");
    }
});

$('.nav_btn').click(function(){
    $('nav').animate({'right':0});
});
$('.mo_close').click(function(){
    $('nav').animate({'right':'-100%'})
});


    $(".l_icon").click(function(){
          var submenu = $(this).next("ul")
     
         if( submenu.is(":visible") ){
             submenu.slideUp();
         }else{
              submenu.slideDown();
         }
      });

const swiper1 = new Swiper(".bn", {

    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 1,  
    centeredSlides: true, 

    autoplay: {
         delay: 2500,
    },

    breakpoints: {
     1320: {
        spaceBetween: 40,     
        slidesPerView: 2,
     },
    }, 
});

$('.tab_btn button').click(function(){

    $(this).css({'color':'#fff','background':'#1d1d1d'})
    .siblings().css({'color':'#ccc','background':'transparent'});

    let i = $(this).index();
    $('.item').eq(i).css({'display':'block'})
    .siblings().css({'display':'none'})

});


const swiper2 = new Swiper(".sub_slide", {
    direction: "vertical",
    spaceBetween: 10,
    slidesPerView: 3,
    slideToClickedSlide : true,
    watchSlidesProgress: true,
    centeredSlides: true,
    loop: true,

    breakpoints: {
        1320: {
           spaceBetween: 20,     
        },
       }, 
    
});

const swiper3 = new Swiper(".main_slide", {
    spaceBetween: 10,
    thumbs: {
      swiper3: swiper2,
    },
    
});

swiper2.on("slideChange", function() {
    let i = swiper2.realIndex;
    swiper3.slideTo(i);
}); 

const swiper4 = new Swiper(".news", {
    direction: "vertical",

    autoplay: {
        delay: 2500,
    },

    loop: true,
    breakpoints: {
         1320: {
            slidesPerView: 2,
            spaceBetween: 10,
          
         },
     },
    //  on: {
    //     breakpoint : function(swiper, breakpointParams) {
    //         console.log(breakpointParams.breakpoints)
    //         if(breakpointParams.breakpoints){
    //             this.enable();
    //         } else {
    //             this.disable();
    //         }
    //     },
    // },
});

