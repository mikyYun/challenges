/** Grab all video content elements and show total play times */
const timeNodes = [...document.querySelectorAll("[data-time]")];

const seconds = timeNodes
                .map(node => node.dataset.time)
                .map(timeCode => {
                  const [mins, secs] = timeCode.split(":").map(parseFloat)
                  return (mins * 60) + secs
                })
                .reduce((total, VideoSeconds) => total + VideoSeconds)
                console.log(seconds)
// reduce!!!
  let secondsLeft = seconds;
  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  // Hours Mins Seconds
  console.log(hours, mins, secondsLeft)