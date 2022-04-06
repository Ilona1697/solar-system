"use strict";
const btnStart = document.getElementById("btn-start");
const orbits = document.querySelectorAll(".orbit");
const dropdownContent = document.getElementById("dropdown-content");
const speedBtns = dropdownContent.querySelectorAll("a");
let currentSpeed = 1;
btnStart.addEventListener(
  "click",
  () => {
    orbits.forEach((elem) => {
      elem.classList.add("animation__active");
      btnStart.disabled = "true";
      btnStart.style.backgroundColor = "#555555";
      btnStart.style.cursor = "none";
    });
  },
  true
);
speedBtns.forEach((elem) => {
  elem.addEventListener("click", () => {
    // orbits.forEach((orbit) => {
    //   const style = getComputedStyle(orbit);
    //   const initSpeed = Number.parseFloat(style.animationDuration);
    //   const selectedSpeed = Number.parseFloat(elem.innerHTML);
    //   let result;
    //   if (currentSpeed == 1 && selectedSpeed == 0.5) {
    //     result = initSpeed * selectedSpeed + "s";
    //   } else if (currentSpeed == 1 && selectedSpeed == 1.5) {
    //     result = initSpeed / selectedSpeed + "s";
    //   } else if (currentSpeed == 1.5 && selectedSpeed == 0.5) {
    //     result = initSpeed * selectedSpeed + "s";
    //   } else if (currentSpeed == 1.5 && selectedSpeed == 1) {
    //     result = initSpeed * 1.5 + "s";
    //   } else if (currentSpeed == 0.5 && selectedSpeed == 1) {
    //     result = initSpeed / 0.5 + "s";
    //   }
    //   currentSpeed = selectedSpeed;
    //   orbit.style.animationDuration = result;
    // });
  });
});
