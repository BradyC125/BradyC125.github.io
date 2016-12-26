$(document).ready(function(){
    alert("Hello!");
    var navBar = $("#navbar");
    navBar.toggleClass("stickyNavBar", this.scrollTop > 30);
    })
});
