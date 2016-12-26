alert("alert1")
$(document).ready(function(){
    alert("alert2")
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
