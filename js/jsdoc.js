$(document).ready(function(){
    var navBar = $("#navbar");
    navBar.toggleClass("stickyNavBar", this.scrollTop > 30);
});
