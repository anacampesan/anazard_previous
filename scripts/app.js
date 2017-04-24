$(window).on('scroll', function(event) {
  var scroll = $(window).scrollTop();
  var navbar = $('#navbar')
  if (scroll > 50) {
    navbar.addClass('navbar-scroll');
  } else {
    navbar.removeClass('navbar-scroll');
  }
})
