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

setInterval(updateClock, 1000);
