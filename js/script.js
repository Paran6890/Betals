
//  team part slick slider///////////////

$('.slider').slick({
    dots:false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


//  team part slick slider///////////////

$('.team').slick({
    dots:false,
    infinite: true,
    speed: 1000,
    // autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  });


//  testimonial slick slider///////////////

$('.test').slick({
    dots:false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });


// fixed/sticky menu

$(window).scroll(function(){
  var scrollamount = $(window).scrollTop()
  
  if(scrollamount > 0){
    $(".menu").addClass("fixed")
  }else{
    $(".menu").removeClass("fixed")
  }

    



  if(scrollamount > 500){
    $(".btop").fadeIn();
  }else{
    $(".btop").fadeOut();
  }
})


$(".btop").click(function(){
$("html,body").animate({
  scrollTop:0
},3000)
})