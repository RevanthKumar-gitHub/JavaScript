const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weeeksdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".desc");
const block = document.querySelectorAll(".b");

let tempDate = new Date();

let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 20, 11, 30);

let day = futureDate.getDay();
day = weeeksdays[day];
let month = futureDate.getMonth();
month = months[month];

giveaway.innerHTML = `Giveaway ends on ${day} , ${futureDate.getDate()} ${month} ${futureDate.getFullYear()} ${futureDate.getHours()}:${futureDate.getMinutes()} am`;

const today = new Date();

const futureTime = futureDate.getTime();

function getRemainingTime() {
  let todayTime = new Date().getTime();
  let t = futureTime - todayTime;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000;

  let remDays = Math.floor(t / oneDay);
  let remHours = Math.floor((t % oneDay) / oneHour);
  let remMins = Math.floor((t % oneHour) / oneMin);
  let remSec = Math.floor((t % oneMin) / oneSec);

  const values = [remDays, remHours, remMins, remSec];
  // console.log(values);

  let format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  block.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    giveaway.innerHTML = `<h2 style="color:red">sorry, this giveaway has expired!</h2>`;
    block.forEach((item) => {
      item.innerHTML = 0;
    });
  }
}
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
