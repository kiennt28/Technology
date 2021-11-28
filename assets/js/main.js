// window.onscroll = function () {
//   scrollFunction();
// };
// var navbar = document.querySelector("header");
// var sticky = navbar.offsetTop;

// function scrollFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

const x = document.querySelector.bind(document);
const y = document.querySelectorAll.bind(document);

const tabs = y(".tab");
const panes = y(".timetab-container");

const tabAddress = y(".nav-link");
const tabMaps = y(".tab-pane");

const tabActive = x(".nav-link.active");
const line = x(".nav-tabs .line");
// console.log(line);

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

// Areas of strength-Active
tabs.forEach(function (tab, index) {
  const pane = panes[index];
  tab.onclick = function () {
    x(".tab.active").classList.remove("active");
    x(".timetab-container.active").classList.remove("active");

    this.classList.add("active");
    pane.classList.add("active");
  };
});

// Contact-Active 
tabAddress.forEach(function (tab, index) {
  const tabMap = tabMaps[index];
  tab.onclick = function () {
    x(".nav-link.active").classList.remove("active");
    x(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    tabMap.classList.add("active");
  }
})