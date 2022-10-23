const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector("button")
let prevHole;
let timeUp;
let score = 0;

const randomTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
}

/** Pick one of holes to peep */
const randomHole = (holes) => {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];
  if (hole === prevHole) return randomHole(holes);
  hole.classList.add("up")
  
  prevHole = hole;
  return hole;
}

const peep = () => {
  const time = randomTime(500, 1000);
  const hole = randomHole(holes);


  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time)
}

const startGame =  () => {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 10000)
}

const bonk = (e) => {
  console.log("BONK")
  if (!e.isTrusted) return;
  score ++;
  e.target.classList.remove("up");
  scoreBoard.textContent = score;
}

startButton.addEventListener("click", startGame)

moles.forEach(mole => mole.addEventListener("click", bonk))
