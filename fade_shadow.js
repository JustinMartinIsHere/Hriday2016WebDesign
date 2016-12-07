$(document).ready(function () {
  var displayHeight = $(".midDisplay").css( "height");
    $(window).scroll(function () {
        if ($(document).scrollTop() > displayHeight) {
            $(".topnav").css("box-shadow", "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)");
        } else {
            $(".topnav").css("box-shadow", "0 0 0px rgba(0,0,0,0),0 0px 0px rgba(0,0,0,0)");
        }
    });
});
