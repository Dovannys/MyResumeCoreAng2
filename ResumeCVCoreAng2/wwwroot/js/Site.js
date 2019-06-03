// Write your Javascript code.
function myFunction(e) {
    var evt = window.event || e;
    evt.preventDefault();
    var wd = event.wheelDelta;
    var csp = window.pageYOffset;
    window.scrollTo(0, csp - wd);
}

if (navigator.userAgent.match(/Trident\/7\./)) {
    document.body.addEventListener("mousewheel", myFunction, false);
}