// Slider
var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("mySlider");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 5000);
}

const tabs = document.querySelectorAll(".tab");
const panes = document.querySelectorAll(".timetab-container");

const tabAddress = document.querySelectorAll(".nav-link");
const tabMaps = document.querySelectorAll(".tab-pane");

const tabActive = document.querySelector(".nav-link.active");
const line = document.querySelector(".nav-tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

// Areas of strength-Active
tabs.forEach(function (tab, index) {
  const pane = panes[index];
  tab.onclick = function () {
    document.querySelector(".tab.active").classList.remove("active");
    document
      .querySelector(".timetab-container.active")
      .classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");
  };
});

// Contact-Active
tabAddress.forEach(function (tab, index) {
  const tabMap = tabMaps[index];
  tab.onclick = function () {
    document.querySelector(".nav-link.active").classList.remove("active");
    document.querySelector(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    tabMap.classList.add("active");
  };
});
