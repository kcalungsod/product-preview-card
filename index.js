let menuToggle = document.querySelector("#menu-toggle");
let overlay = document.querySelector(".overlay");

menuToggle.addEventListener("click", function () {
    console.log(menuToggle.checked);

    if (menuToggle.checked === true) {
        document.querySelector(".line1").style.transform = "rotate(45deg)";
        document.querySelector(".line2").style.transform = "scaleY(0)";
        document.querySelector(".line3").style.transform = "rotate(-45deg)";

        overlay.style.left = "0px";
    }
    else {
        document.querySelector(".line1").style.transform = "rotate(0deg)";
        document.querySelector(".line2").style.transform = "scaleY(1)";
        document.querySelector(".line3").style.transform = "rotate(0deg)";

        overlay.style.left = "-500px";
    }
});
