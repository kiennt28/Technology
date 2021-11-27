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

tabs.forEach(function (tab, index) {
  const pane = panes[index];
  tab.onclick = function () {
    console.log(pane);
    x(".tab.active").classList.remove("active");
    x(".timetab-container.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
  };
});
