
window.addEventListener("scroll", () => {
    var ypos = window.pageYOffset;

    var letter = document.getElementById("backtext");
    letter.style.fontSize = (600 + ypos * 0.4) + "px";
    letter.style.opacity = 1 - (ypos / 700);

    var head = document.getElementById("name");
    head.style.height = ((ypos * 0.06) + 25) + "vh";
    head.style.paddingLeft = ((ypos * 0.02) + 2) + "vh";

    var image4 = document.getElementById("side");
    image4.style.height = (ypos * 0.1) + "px";

    var image1 = document.getElementById("imgone");
    image1.style.top = ((ypos * 0.02) + 100) + "%";

    var utb = document.getElementById("texttwo");
    utb.style.marginTop = ((ypos * 0.008) + 40) + "%";
    utb.style.background = "rgba(255, 255, 255, 0."  (ypos * 0.002) + ")";
});

$(document).ready(function () {
    var lettertop = $('#name').offset().top,
    $window = $(window);
    $window.scroll(function () {
        if ($window.scrollTop() >= lettertop) {
            $("#menubutton").stop().fadeIn(500);
        }
        else {
            $("#menubutton").stop().fadeOut(200);
        }
    });

    $("#menubutton p").click(function () {
        $("#headertwo").stop().slideDown(500);
        $("#menubuttontwo p").stop().css({ transform: "rotate(90deg)" });
        $("#menutwo li").stop().css({ color: "#fff" });
    });
    $("#menubuttontwo p").click(function () {
        $("#headertwo").stop().slideUp(500);
        $("#menubuttontwo p").css({ transform: "rotate(450deg)" });
        $("#menutwo li").stop().css({ color: "transparent" });
    });
})