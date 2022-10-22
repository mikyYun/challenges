let countdown;

const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time")
const buttons = document.querySelectorAll("[data-time]")


const displayEndTine = (timeStamp) => {
  const end = new Date(timeStamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  const adjustHour = hour > 12 ? hour - 12 : hour;
  const adjustMinute = minutes > 10 ? minutes : "0" + minutes

  endTime.textContent = `Be Back At ${adjustHour}:${adjustMinute}`

};

const displayTimeLeft = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
  timerDisplay.textContent = display;

};

const timer = (seconds) => {
  clearInterval(countdown)

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds)
  displayEndTine(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
};

const startTimer = (e) => {
  const seconds = parseInt(e.target.dataset.time)
  timer(seconds)
} 
buttons.forEach(button => button.addEventListener("click", startTimer))


document.customForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const mins = parseInt(e.target.minutes.value)
  timer(mins * 60);
  e.target.reset();
})
