

$(document).ready(function(){
   $("a.menu__link").click(function(){
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      },{
         duration: 1000,
         easing: "swing"
      });
      return false;
   });
  
});

$(document).ready(function () {
   $("a.menu__link").click(function () {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + -100,
      }, {
         duration: 1000,
         easing: "swing"
      });
      return false;
   });

});

const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu__list");

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   menuList.classList.toggle("active");
})

document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click", () => {
   hamburger.classList.remove("active");
   menuList.classList.remove("active");
}));


$(function(){
   var mixer = mixitup('.galery__content');
});


$(function () {
   $('.galery__top').slick({
      arrows: false,
      slidesToShow: 6,
      slidesToScroll: 6,
      dots: false,
      infinite: false,
      responsive: [
         {
            breakpoint: 801,
         settings:{
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg" alt=""></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg" alt=""></button>',
         }
         },
         {
            breakpoint: 501,
            settings:{
               dots: false,
               infinite: true,
               slidesToShow: 2,
               slidesToScroll: 2,
               arrows: true,
               prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg" alt=""></button>',
               nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg" alt=""></button>',
            }
         },
         {
            
            breakpoint: 381,
            settings:{
               dots: false,
               infinite: true,
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: true,
               prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg" alt=""></button>',
               nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg" alt=""></button>',
            }
         },
      ]
      
   });

});
AOS.init();
