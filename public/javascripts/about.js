

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


// // Javascript to enable link to tab
// var url = document.location.toString();

// if (url.match('#')) {
//   $('.nav-pills a[href="#' + url.split('#')[1] + '"]').tab('show');
//   console.log('done')
// }
// 

// Javascript to enable link to tab
// var hash = document.location.hash;
// var prefix = "tab_";
// if (hash) {
//   $('.nav-pills a[href=' + hash.replace(prefix, "") + ']').tab('show');
// }

// // Change hash for page-reload
// $('.nav-pills a').on('shown.bs.tab', function (e) {
//   window.location.hash = e.target.hash.replace("#", "#" + prefix);
// });



// // With HTML5 history API, we can easily prevent scrolling!
// $('.nav-pills a').on('shown.bs.tab', function (e) {
//   console.log('done')
//   if (history.pushState) {
//     history.pushState(null, null, e.target.hash);
//   } else {
//     window.location.hash = e.target.hash; //Polyfill for old browsers
//   }
// })

$(function () {
  var hash = window.location.hash;
  hash && $('ul.nav.nav-pills a[href="' + hash + '"]').tab('show');
  $('ul.nav.nav-pills a').click(function (e) {
    $(this).tab('show');
    $('body').scrollTop();
    window.location.hash = this.hash;
  });
});

var initSubject = '', initBody = '';


function submitHandler() {
  var to = "michaelnctu@gmail.com";//寫死的傳送對象 就是公司的信箱 不會顯示在網頁上
  var name = nameText.value;//讀取ID為 nameTextuser 物件中的值
  var email = emailText.value;
  var tel = telText.value;
  var subject = subText.value;
  //把user填的資料都塞到 mail body 中
  var body = "" + bodyText.value + '%0A%0A%0A';//%0A是換行 換了三行
  body += "From：" + nameText.value + '%0A';
  body += "Email：" + emailText.value + '%0A';
  body += "Tel：" + telText.value;
  //傳送的主要程式碼
  mailTo.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
  mailTo.click();
}

function init() {
  subText.value = initSubject;
  toText.value = initTo;
  bodyText.value = initBody;
}
