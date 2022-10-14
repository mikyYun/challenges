const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

navigator.geolocation.watchPosition(data => {
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading || 20}deg)`; // 
}, (err) => {
  console.error("ERROR", err);
  alert("Please allow location");
});