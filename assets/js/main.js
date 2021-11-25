window.onscroll = function () {
  scrollFunction();
};
var navbar = document.querySelector("header");
var sticky = navbar.offsetTop;

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
