//banner slider
$(document).ready(function(){
  $('#slider').slick({
    dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  prevArrow: '<button class="slick-prev custom-prev"><i class="fa-solid fa-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next custom-next"><i class="fa-solid fa-arrow-right"></i></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]

  });


  
});
	


