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
    this.addClass('responsive-tabs'), this.append($('<span class="dropdown-arrow"></span>')), this.on("click", "li.active, span.dropdown-arrow, .responsive-tabs", function () {
      this.toggleClass('open');
    }.bind(this)), this.on("click", "li > a:not(.active)", function () {
      this.removeClass("open");
    }.bind(this));
  };
})(jQuery);

// (function ($) {
//   $.fn.NoresponsiveTabs = function () {

//     //IE 無法使用remove(), 不然可直接使用remove()
//     var dropdoen_parent = '.dropdown-arrow'.parentNode
//     console.log("helo", dropdoen_parent)
//     this.removeClass('responsive-tabs'), dropdoen_parent.removeChild(), this.removeClass('open');
//   };
// })(jQuery);

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
