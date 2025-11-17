//Created on: 17.11.2025
//Creator: Jakub Bielec

// Time gets inported and the angles for the hands are calculated
function updateClock() {
  const timeNow = new Date();

  const seconds = timeNow.getSeconds();
  const minutes = timeNow.getMinutes();
  const hours = timeNow.getHours();

  const secondsDeg = (seconds / 60) * 360;
  const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30;

  document.querySelector(".second-hand").style.transform = `rotate(${
    secondsDeg - 90
  }deg)`;

  document.querySelector(".min-hand").style.transform = `rotate(${
    minutesDeg - 90
  }deg)`;

  document.querySelector(".hour-hand").style.transform = `rotate(${
    hoursDeg - 90
  }deg)`;
}

const clock = document.querySelector(".clock");
const markingHeight = 20; // Height of a marking
const markingWidth = 6; // Width of a marking
const radius = 150; // Radius of the clock

// Create 12 markings for the clock

for (let i = 0; i < 12; i++) {
  const mark = document.createElement("div");
  mark.classList.add("marking");
  mark.style.width = `${markingWidth}px`;
  mark.style.height = `${markingHeight}px`;
  mark.style.backgroundColor = "black";
  mark.style.position = "absolute";

  // Positioning the marking at the top center
  mark.style.top = `0%`;
  mark.style.left = `50%`;
  mark.style.transformOrigin = `center ${radius}px`; // Set the transform origin

  // Rotate the marking to its correct position
  mark.style.transform = `translateX(-50%) rotate(${i * 30}deg)`;

  clock.appendChild(mark);
}

setInterval(updateClock, 1000);