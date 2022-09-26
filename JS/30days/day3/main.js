const inputs = document.querySelectorAll(".controls input");

function handleUpdate(e) {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(el => {
  el.addEventListener("change", handleUpdate);
  el.addEventListener("mousemove", handleUpdate);
})