$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.project').fadeIn();
  } else {
    $('.project').fadeOut();
  }
});