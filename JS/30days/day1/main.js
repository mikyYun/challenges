/** FIND audio with attr data-key equal to keycode and play sound */
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

/** REMOVE TRANSITIONS */
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing")
}

/** SET removeTransition function to each */
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition))

window.addEventListener("keydown", playSound);