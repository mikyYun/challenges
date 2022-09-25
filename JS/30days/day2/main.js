/** GET secondsHand */
const secondHand = document.querySelector(".sec-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const tableHour = document.querySelector(".hours")
const tableMinute = document.querySelector(".minutes")
const tableSecond = document.querySelector(".seconds")

function setDate() {
  /** GET TIMES */
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();
  /** GET CLOCK DEGREES */
  const secondsDegree = (seconds / 60 * 360);
  const minutesDegree = (mins / 60 * 360);
  const hoursDegree = (hours / 12 * 360);

  /** UPDATE secondHand degree */
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;

  tableHour.textContent = hours
  tableMinute.textContent = mins
  tableSecond.textContent = seconds
}

setInterval(setDate, 1000);