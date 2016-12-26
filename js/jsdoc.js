$(document).ready(function(){
    var navBar = $("#navbar");
    navBar.on("scroll", function(e) {
        alert("alert")
        if (this.scrollTop > 30) {
            navBar.addClass("stickyNavBar");
        } else {
            navBar.removeClass("stickyNavBar");
        }
    })
});
