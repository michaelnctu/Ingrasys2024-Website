//burger

$(document).ready(function () {
  $(document).delegate('.open', 'click', function (event) {
    $(this).addClass('oppenned');
    event.stopPropagation();
  })
  $(document).delegate('body', 'click', function (event) {
    $('.open').removeClass('oppenned');
  })
  $(document).delegate('.cls', 'click', function (event) {
    $('.open').removeClass('oppenned');
    event.stopPropagation();
  });
});

$(document).ready(function () {
  $('#nav-icon1').click(function () {
    $(this).toggleClass('open');

  });

  $('.sub-btn').click(function () {
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });

});

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    $('.menu').toggleClass('active');
    $('.blur-mask').toggleClass('active');
  });

  $('#youtube').magnificPopup({
    items: {
      src: './assets/video/index-intro.mp4'
    },
    type: 'iframe'
  });





});

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




//banner video popup function

$(document).ready(function () {
  $('#youtube').magnificPopup({
    items: {
      src: './assets/video/index-intro.mp4'
    },
    type: 'iframe'
  });

});

//text scroller
$(document).on("scroll", function () {

  // scroll位置可以在max後面數字改變
  $(".text-1").css("left", Math.max(1500 - 0.4 * window.scrollY) + "px");

  $(".text-2").css("right", Math.max(1500 - 0.35 * window.scrollY) + "px");


  $(".text-3").css("left", Math.max(1400 - 0.3 * window.scrollY) + "px");

  if (screen.width <= 768) {
    //scroll位置可以在max後面數字改變
    $(".text-1").css("left", Math.max(1000 - 0.35 * window.scrollY) + "px");

    $(".text-2").css("right", Math.max(1500 - 0.32 * window.scrollY) + "px");


    $(".text-3").css("left", Math.max(1200 - 0.3 * window.scrollY) + "px");
  }

  // for iphone 11
  if (screen.width <= 420) {
    //scroll位置可以在max後面數字改變
    $(".text-1").css("left", Math.max(1000 - 0.35 * window.scrollY) + "px");

    $(".text-2").css("right", Math.max(1200 - 0.35 * window.scrollY) + "px");

    $(".text-3").css("left", Math.max(1100 - 0.3 * window.scrollY) + "px");
  }



  if (screen.width <= 400) {
    //scroll位置可以在max後面數字改變
    $(".text-1").css("left", Math.max(1000 - 0.35 * window.scrollY) + "px");

    $(".text-2").css("right", Math.max(1300 - 0.4 * window.scrollY) + "px");


    $(".text-3").css("left", Math.max(1100 - 0.3 * window.scrollY) + "px");
  }


});

$('.slider').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        dots: true,
        centerPadding: '0px',
        slidesToShow: 1,
      }
    }
  ]
})
