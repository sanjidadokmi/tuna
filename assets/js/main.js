
// const cardContainer = document.getElementById("cardContainer");
// const gridViewButton = document.getElementById("gridView");
// const flexViewButton = document.getElementById("flexView");

// gridViewButton.addEventListener("click", () => {
//   cardContainer.classList.remove("flex-layout");
//   gridViewButton.classList.add("active");
//   flexViewButton.classList.remove("active");
// });

// flexViewButton.addEventListener("click", () => {
//   cardContainer.classList.add("flex-layout");
//   flexViewButton.classList.add("active");
//   gridViewButton.classList.remove("active");
// });

// document.querySelectorAll('.likeBtn').forEach(function(btn) {
//   btn.addEventListener('click', function() {
//     const regularHeart = this.querySelector('.fa-regular');
//     const solidHeart = this.querySelector('.fa-solid');

//     if (solidHeart.style.display === 'none' || !solidHeart.style.display) {
//       regularHeart.style.display = 'none';
//       solidHeart.style.display = 'inline';
//     } else {
//       regularHeart.style.display = 'inline';
//       solidHeart.style.display = 'none';
//     }
//   });
// });


//card view script end

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
	


