const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  console.log(this.classList.value);
  // e.stopPropagation(); // stop bubbling

}

document.body.addEventListener("click", logText); // once

divs.forEach(div => div.addEventListener("click", logText, {
  capture: false,
  once: true
})); // n times from the child to parent

button.addEventListener("click", () => {
  console.log("BUTTON")
}, {
  once: true
})