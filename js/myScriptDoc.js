$(function(){
  
  var navBar = $("#navBar");

  navBar.on("scroll", function(e) {
    if (this.scrollTop > 30) {
      navBar.addClass("stickyNavBar");
    } else {
      navBar.removeClass("stickyNavBar");
  }
  
});
