window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$('.scroll').on('click', function (e) {
  e.preventDefault();
  var offset = 0;
  var target = this.hash;
  if ($(this).data('offset') != undefined) offset = $(this).data('offset');
  $('html, body').stop().animate({
    'scrollTop': $(target).offset().top - offset
  }, 500, 'swing', function () {
  });
})
