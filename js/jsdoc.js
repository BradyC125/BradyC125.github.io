alert("This site is under development!");
$(document).ready(function(){
    var navBar = $("#navbar");
    navBar.on("scroll", function() {
        if (this.scrollTop > 30) {
            navBar.addClass("stickyNavBar");
        } else {
            navBar.removeClass("stickyNavBar");
        }
    }
)});
