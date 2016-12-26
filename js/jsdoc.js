$(document).ready(function(){
    alert("alert1");
    var navBar = $("#navbar");
    navBar.toggleClass("stickyNavBar", this.scrollTop > 147);
    })
});
