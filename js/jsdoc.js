$(document).ready(function(){
   var elementPosition = $('#navbar').offset();
    $(window).scroll(function () {
    if ($(window).scrollTop() > elementPosition.top) {
       $('#navbar').className = "stickyNavBar";
    } else {
       $('#navbar').className = "scrolling";
    }
  })});

