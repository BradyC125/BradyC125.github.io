alert("This site is under development!");
$(document).ready(function(){
    $("p").text("Test2!");
    $("p").css("color", "red");
    var navBar = $("#navbar");
    navBar.on("scroll", function() {
        if (this.scrollTop > 30) {
            navBar.addClass("stickyNavBar");
        } else {
            navBar.removeClass("stickyNavBar");
        }
    }
)});
