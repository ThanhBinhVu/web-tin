
onresize();
function onresize() {
    width = document.body.clientWidth;
    if (width < 960) {
        document.getElementById("header").style.display = "none";
        document.getElementById("header-responsive").style.display = "";

    }else{
        document.getElementById("header").style.display = "";
        document.getElementById("header-responsive").style.display = "none";
        document.getElementById("wrapperbutton").style.display = "";
    }
}
window.addEventListener("resize", onresize);

var navbar_toggle = document.getElementById("navbar-toggle");
navbar_toggle.onclick = function(){
    navbar_toggle.classList.toggle('open');
}
