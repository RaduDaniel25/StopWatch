"use strict";

let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let miliseconds = document.querySelector(".miliseconds");
const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");
const btnReset = document.querySelector(".btn-reset");
let int = 0;
let ms = 0;
let min = 0;
let sec = 0;

function displayTime() {
  ms += 10;
  // console.log(ms);
  if (ms == 100) {
    sec++;
    ms = 0;
  }
  if (sec == 60) {
    min++;
    sec = 0;
  }
  let mms = ms < 10 ? "0" + ms : ms;
  let s = sec < 10 ? "0" + sec : sec;
  let m = min < 10 ? "0" + min : min;
  miliseconds.innerHTML = `${mms}`;
  seconds.innerHTML = `${s}`;
  minutes.innerHTML = `${m}`;
}

btnStart.addEventListener("click", function () {
  console.log("radu");
  if (int !== 0) clearInterval(int);
  int = setInterval(displayTime, 100);
});
btnStop.addEventListener("click", function () {
  clearInterval(int);
});
btnReset.addEventListener("click", function () {
  clearInterval(int);
  miliseconds.innerHTML = "00";
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  ms = min = sec = 0;
});

// What time is it?
const labelDate = document.querySelector(".data");

const rightnow = setInterval(displayDate, 1000);

function displayDate() {
  const now = new Date();
  const year = `${now.getFullYear()}`.padStart(4, 0);
  const month = `${now.getMonth()}`.padStart(2, 0);
  const day = `${now.getDay()}`.padStart(2, 0);
  const hour = `${now.getHours()}`.padStart(2, 0);
  const mins = `${now.getMinutes()}`.padStart(2, 0);
  const se = `${now.getSeconds()}`.padStart(2, 0);
  labelDate.textContent = `${hour}:${mins}:${se} ${day}/${month}/${year} `;

  // const options = {
  //   minute: "numeric",
  //   hour: "numeric",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   second: "numeric",
  // };
  // const dataTime = new Intl.DateTimeFormat("ro", options).format(now);
  // labelDate.textContent = `${dataTime}`;

  if (hour[1] == 1 && mins == 21) console.log("01:21");
}
