// $('.counting').each(function () {
//   var $this = $(this),
//     countTo = $this.attr('data-count');

//   $({ countNum: $this.text() }).animate({
//     countNum: countTo
//   },

//     {

//       duration: 3000,
//       easing: 'linear',
//       step: function () {
//         $this.text(Math.floor(this.countNum));
//       },
//       complete: function () {
//         $this.text(this.countNum);
//         //alert('finished');
//       }

//     });
// });


// document.addEventListener("scroll", $('.counting').each(function () {
//   var $this = $(this),
//     countTo = $this.attr('data-count');

//   $({ countNum: $this.text() }).animate({
//     countNum: countTo
//   },

//     {

//       duration: 3000,
//       easing: 'linear',
//       step: function () {
//         $this.text(Math.floor(this.countNum));
//       },
//       complete: function () {
//         $this.text(this.countNum);
//         //alert('finished');
//       }

//     });
// }))


//counterd
function isCounterElementVisible($element) {
  var topView = $(window).scrollTop();
  var botView = topView + $(window).height();
  var topElement = $element.offset().top;
  var botElement = topElement + $element.height();
  return ((botElement <= botView) && (topElement >= topView));
}

$(window).scroll(function () {
  $(".counter").each(function () {
    isOnView = isCounterElementVisible($(this));
    if (isOnView && !$(this).hasClass('visibled')) {
      $(this).addClass('visibled');
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    }
  });
});


// Javascript to enable link to tab
var url = document.location.toString();

if (url.match('#')) {
  $('.nav-pills a[href="#' + url.split('#')[1] + '"]').tab('show');
  console.log('done')
}

// With HTML5 history API, we can easily prevent scrolling!
$('.nav-pills a').on('shown.bs.tab', function (e) {
  console.log('done')
  if (history.pushState) {
    history.pushState(null, null, e.target.hash);
  } else {
    window.location.hash = e.target.hash; //Polyfill for old browsers
  }
})