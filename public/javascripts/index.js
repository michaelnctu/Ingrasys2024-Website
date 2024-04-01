
console.log("Script loaded!");
// Function to remove elements with the class 'void-item' in portrait view
function removeVoidItemsInPortrait() {
  const voidItems = document.querySelectorAll('.void-item');
  const isPortraitView = window.matchMedia("(orientation: portrait)").matches;

  if (isPortraitView) {
    voidItems.forEach(item => {
      item.remove(); // Remove void items from the DOM
    });
  }
}

// Call the function initially and listen for orientation change events
removeVoidItemsInPortrait();
window.addEventListener('orientationchange', removeVoidItemsInPortrait);



function animateCounting(element) {
  const counters = $(element).find('.color.counter'); // Select counters within the active item

  counters.each(function () {
    const startValue = 0; // Starting value for the counter
    const endValue = parseFloat($(this).text()); // Get the target end value from the element's text
    const duration = 50000; // Duration in milliseconds (adjust as needed)
    const increment = (endValue - startValue) / (duration / 1000); // Calculate the increment per second

    let current = startValue;
    const counter = $(this);

    const timer = setInterval(function () {
      current += increment;

      // Check if the current value is an integer
      if (current % 1 === 0) {
        // Display as an integer
        counter.text(current.toFixed(0));
      } else {
        // Display with one decimal place
        counter.text(current.toFixed(1));
      }

      if (current >= endValue) {
        clearInterval(timer);
        // Ensure the final value is displayed as an integer if it's an integer
        counter.text(endValue % 1 === 0 ? endValue.toFixed(0) : endValue.toFixed(1));
      }
    }, 1000 / 60); // 60 FPS
  });
}


// location carousel
$(document).ready(function () {
  var $carousel = $(".carousel-location1");

  // Initialize Owl Carousel and store it in a variable
  var owl = $carousel.owlCarousel({
    margin: 25,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    },
    onTranslated: function (event) {
      // Remove shine class from all items
      $(".location-item").children(":first-child").addClass("cover");

      // Get the currently active item
      var $activeItem = $carousel.find(".owl-item.active .location-item");

      $activeItem.first().children(":first-child").removeClass("cover");
    },
  });
});

$(document).ready(function () {
  const owl = $('.carousel-esg-care').owlCarousel({
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      },
    },
    onChanged: handleCarouselChange
  });


  function handleCarouselChange(event) {
    // Delay the execution of the animateCounting function by a small amount of time
    setTimeout(function () {
      const activeItem = $(event.target).find('.owl-item.active');
      console.log("active item", activeItem);
      animateCounting(activeItem);
    }, 100); // Adjust the delay as needed
  }

  // function handleCarouselChange(event) {
  //   // const activeItem = event.item;
  //   const activeItem = $(event.target).find('.owl-item.active'); // Corrected the selector here
  //   console.log("active item1", activeItem)
  //   animateCounting(activeItem);
  // }
});


// $(document).ready(function () {
//   $("#gr1-content .carousel-inner").owlCarousel({
//     items: 1, // Set this to 1 to show one item per slide
//     loop: true,
//     nav: true,
//     responsive: {
//       0: {
//         items: 1 // 螢幕大小為 0~600 顯示 1 個項目
//       },
//       600: {
//         items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
//       },
//       1000: {
//         items: 3 // 螢幕大小為 1000 以上 顯示 5 個項目
//       }
//     }

//   });
// });




$(document).ready(function () {
  $("#carousel-news").owlCarousel({
    margin: 10, // 外距 10px
    nav: true,
    dots: false,// 顯示點點
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

$(document).ready(function () {
  $(".carousel-esg").owlCarousel({
    margin: 10, // 外距 10px
    nav: true,
    dots: false,// 顯示點點
    responsive: {
      0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
      },
      600: {
        items: 2 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1000: {
        items: 2 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });

})











// $(document).ready(function () {
//   var $carousel = $(".carousel-location1");

//   // Initialize Owl Carousel and store it in a variable
//   var owl = $carousel.owlCarousel({
//     margin: 25,
//     nav: true,
//     dots: false,
//     responsive: {
//       0: {
//         items: 1
//       },
//       600: {
//         items: 3
//       },
//       1000: {
//         items: 3
//       }
//     },

//     onTranslated: function (event) {
//       // Remove shine class from all items
//       $(".location-item").children(":first-child").addClass("cover");

//       // Get the currently active item
//       var $activeItem = $carousel.find(".owl-item.active .location-item");

//       $activeItem.first().children(":first-child").removeClass("cover");
//     },
//   });

// });

$(document).ready(function () {
  $("#trial-carousel").owlCarousel({
    items: 4,
    loop: false,
    center: true,
    margin: 10,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    nav: true, // Enable navigation

    responsive: {
      // Define responsive breakpoints
      0: {
        items: 1, // Number of items to show at this breakpoint
        // Other settings for small screens
      },
      768: {
        items: 2, // Number of items to show at this breakpoint
        // Other settings for medium screens
      },
      1200: {
        items: 4, // Number of items to show at this breakpoint
        // Other settings for large screens
      }
    }
  });
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




$('.dropdown-toggle').dropdown();




console.log("Script fucked");