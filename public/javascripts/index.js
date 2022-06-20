

//burger



// $(document).ready(function () {

//   // $('.sub-btn').click(function () {
//   //   // $('.sub-menu').slideUp();
//   //   // $(this).next('.sub-menu').slideToggle();

//   //   $(this).find('.dropdown').toggleClass('rotate');
//   // });
//   $('.sub-btn').click(function () {

//     // $(this).toggleClass('submenu-open').parent('div').siblings('div').children('a.submenu-open').removeClass('submenu-open');

//     $(this).find('.dropdown').toggleClass('rotate');

//     $('html, body').animate({
//       scrollTop: (0),
//     }, "fast");

//     $(this).parent().toggleClass('submenu-open').children('div').slideToggle(300).end().siblings('.submenu-open').removeClass('submenu-open').children('div').slideUp(300).parent().children('.sub-btn').children('.dropdown').toggleClass('rotate');



//     // $(this).find('.dropdown').toggleClass('rotate');
//     // $('html, body').animate({
//     //   scrollTop: (0),
//     // }, "fast"); /*this will scroll upto the top, not sure if I want to use this yet */
//   });


// });

// $(document).ready(function () {
//   $(".hamburger").click(function () {
//     $(this).toggleClass("is-active");
//     $('.menu').toggleClass('active');
//     $('.blur-mask').toggleClass('active');


//   });




// });

// ParticlesJS Config.
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#003865"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#003865"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#003865",
      "opacity": 0.9,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

document.documentElement.setAttribute("data-agent", navigator.userAgent);



//scroll down

$(document).ready(function () {
  $('.demo a').on('click', function (event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({ scrollTop: $(hash).offset().top }, 900);
    console.log("hello")
  });
})




/* Function to create a Multi-Carousel */
function MultiCarousel($thisSlide, $maxSize) {

  var _nextSlide = $($thisSlide).next();
  if (!_nextSlide.length) {
    // If at the last slide, clone the first slide
    // This makes an infinite carousel
    _nextSlide = $($thisSlide).siblings(":first");
  }
  // Append the first child of the next slide to the current one
  _nextSlide.children(":first-child").clone().appendTo($($thisSlide));

  // Private function to append other slide children
  function _appendChildren($nextSlide, $thisSlide) {
    if (!$nextSlide.length) {
      // If there isn't a next slide, append the first child of the first slide to this one
      $($thisSlide).siblings(":first").children(":first-child").clone().appendTo($($thisSlide));
    }
    else {
      // If there is a next slide, append the first child of that slide to the current one
      $nextSlide.children(":first-child").clone().appendTo($($thisSlide));
    }
  }

  for (var _i = 2; _i < ($maxSize); _i++) {
    // Find the slide after nextSlide
    _nextSlide = _nextSlide.next();
    // Call function to find the next-next slide's children
    _appendChildren(_nextSlide, $thisSlide);
  }

}




$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 10, // 外距 10px
    nav: true,
    dots: true,// 顯示點點
    responsive: {
      0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
      },
      600: {
        items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1000: {
        items: 3 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });

});

$('.dropdown-toggle').dropdown();


// (function ($) { // Begin jQuery
//   $(function () { // DOM ready
//     // If a link has a dropdown, add sub menu toggle.
//     $('nav ul li a:not(:only-child)').click(function (e) {
//       $(this).siblings('.nav-dropdown').toggle();
//       // Close one dropdown when selecting another
//       $('.nav-dropdown').not($(this).siblings()).hide();
//       e.stopPropagation();
//     });
//     // Clicking away from dropdown will remove the dropdown class
//     $('html').click(function () {
//       $('.nav-dropdown').hide();
//     });
//     // Toggle open and close nav styles on click
//     $('#nav-toggle').click(function () {
//       $('nav ul').slideToggle();
//     });
//     // Hamburger to X toggle
//     $('#nav-toggle').on('click', function () {
//       this.classList.toggle('active');
//     });
//   }); // end DOM ready
// })(jQuery); // end jQuery