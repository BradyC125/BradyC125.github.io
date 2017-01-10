$(document).ready(function(){
   var elementPosition = $('#navbar').offset();
    $(window).scroll(function () {
    if ($(window).scrollTop() > elementPosition.top) {
       $('#navbar').css('position', 'fixed').css('top', '0').css('text-align', 'center');
    } else {
        $('#navbar').css('position', 'static');
    }
  })});

