$(document).ready(function(){
  
  $("p").hide()
  
  var navBar = $("#navbar");

  navBar.on("scroll", function() {
    if (this.scrollTop > 30) {
      navBar.addClass("stickyNavBar");
    } else {
      navBar.removeClass("stickyNavBar");
  }
  
});
