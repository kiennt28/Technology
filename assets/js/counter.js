const counters = document.querySelectorAll(".timer");
const speed = 2000;
// console.log(counters);
counters.forEach(function (counter) {
  const updateCount = function () {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerHTML;

    const inc = target / speed;
    if (count < target) {
      counter.innerHTML = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      count.innerHTML = target;
    }
  };
  updateCount();
});
