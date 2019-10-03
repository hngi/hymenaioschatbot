function resize() {
    if ($(window).height() < 768) {
        $('#bg-elevation').height($(window).height());
    } else {
        $('#bg-elevation').height(new_height);
    }
}

$(document).ready(function () {
    $(window).bind('resize', resize);
    $("#toggle").on("click", function () {
        if ($("#nav-list").css("display") == "none") {
            $("#nav-list").css("display", "block")
        } else {
            $("#nav-list").css("display", "none")
        }
    })
});