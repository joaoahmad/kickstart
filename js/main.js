$(function() {
  // Menu
  $('.js-hamburger').click(function(e) {
    e.preventDefault();
    $('body').toggleClass('is-mobile-menu-open');
  });

  $('.mobile-nav-overlay').click(function(e) {
    e.preventDefault();
    $('body').removeClass('is-mobile-menu-open');
  });
});
