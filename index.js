var y = $(window).scrollTop();

$(document).ready(function(){
  $('#down').click(function(){
    $('#landingscreen').animate({scrollTop: y + $(window).height() })
  });
  $("#down").click(function(){
    $("#landingscreen").slideDown();
  });
})