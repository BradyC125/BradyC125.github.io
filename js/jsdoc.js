$(document).ready(function(){
    alert("alert1");
    var navBar = $("#navbar");
    $(document).on("scroll", function(e) {
        if (this.scrollTop > 30) {
            alert("alert2");
            navBar.addClass("stickyNavBar");
        } else {
            navBar.removeClass("stickyNavBar");
        }
    })
});
