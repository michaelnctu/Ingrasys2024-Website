// image slider

var imgs = document.querySelectorAll('.img-select a');
console.log(imgs);
var imgBtns = [].slice.call(imgs);
imgBtns.forEach(function (imgItem) {
  imgItem.addEventListener('click', function (event) {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  var displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
  document.querySelector('.img-showcase').style.transform = "translateX(".concat(-(imgId - 1) * displayWidth, "px)");
}

window.addEventListener('resize', slideImage);

// tab 

// $(".dropdown-menu li a").click(function () {
//   $('.answer').css({
//     display: 'none'
//   });
//   $('.acc' + question).css({
//     display: 'block'
//   });
// });
// $('#faq-questions').change(function () {
//   var question = $(this).val();
//   $('.answer').css({
//     display: 'none'
//   });
//   $('.answer-' + question).css({
//     display: 'block'
//   });
// });

(function ($) {
  $.fn.responsiveTabs = function () {
    this.addClass('responsive-tabs'), this.append($('<span class="dropdown-arrow"></span>')), this.on("click", "span.dropdown-arrow, li.active", function () {
      this.toggleClass('open'); //this 指的是responsive-tabs
    }.bind(this)), this.on("click", "li:not(.active)", function () {
      this.removeClass("open");
    }.bind(this));
  };
})(jQuery);


function screen_resize() {
  var w = parseInt(window.innerWidth);

  if (w <= 768) {
    //max-width 500px
    // actions here...
    $('.nav-pills').responsiveTabs();
  } else {
    console.log(
      "hey"
    )
    // $('.nav-tabs').NoresponsiveTabs();
  }
} // if window resize call responsive function


$(window).resize(function (e) {
  screen_resize();
}); // call responsive function on default :)

$(document).ready(function (e) {
  screen_resize();
});
