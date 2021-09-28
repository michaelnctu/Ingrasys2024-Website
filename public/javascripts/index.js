//burger



$(document).ready(function () {

  // $('.sub-btn').click(function () {
  //   // $('.sub-menu').slideUp();
  //   // $(this).next('.sub-menu').slideToggle();

  //   $(this).find('.dropdown').toggleClass('rotate');
  // });
  $('.sub-btn').click(function () {

    $(this).toggleClass('submenu-open').parent('div').siblings('div').children('a.submenu-open').removeClass('submenu-open');

    $(this).parent().toggleClass('submenu-open').children('div').slideToggle(500).end().siblings('.submenu-open').removeClass('submenu-open').children('div').slideUp(500);

    $(this).find('.dropdown').toggleClass('rotate');
    $('html, body').animate({
      scrollTop: (0),
    }, "fast"); /*this will scroll upto the top, not sure if I want to use this yet */
  });


});

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    $('.menu').toggleClass('active');
    $('.blur-mask').toggleClass('active');


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