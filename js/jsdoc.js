alert("alert12")
$(document).ready(function(){
    alert("alert2")
    var navBar = $("#navbar");
    $(document).on("scroll", function(e) {
        alert("alert")
        if (this.scrollTop > 30) {
            navBar.addClass("stickyNavBar");
        } else {
            navBar.removeClass("stickyNavBar");
        }
    })
});
