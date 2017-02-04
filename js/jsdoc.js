$(document).ready(function(){
   var elementPosition = $('#navbar').offset();
    $(window).scroll(function () {
    if ($(window).scrollTop() > elementPosition.top) {
       $('#navbar').css('position', 'fixed').css({'top':'0','left':'0','right':'0'}).css('text-align', 'center');
       $('#mainContent').css('margin-top', '57.440px'); 
       $('#content').css('margin-top', '33px');
    } else {
       $('#navbar').css('position', 'static');
       $('#mainContent').css('margin-top', '0px'); 
    }
  })});

