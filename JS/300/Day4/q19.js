/** When to use event delegation in JS ? */

/** Use event delegation if an element that we want to listen for events on may not exist at page load.
 * Instead, put event handler on a parent element and look at event.target
 * 
 */

document.querySelector("div").addEventListener("click", (event) => {
  const target = event.target;

  switch (target.class) {
    case 1:
      console.log(1);
      break;
    case 2:
      console.log(2);
      break;
    case 3:
      console.log(3);
      break;
    case 4:
      console.log(4);
      break;
    case 5:
      console.log(5);
      break;
    case 6:
      console.log(6);
      break;
  }
})
//html
  `
  <div>
    <button class="1"></button>
    <button class="2"></button>
    <button class="3"></button>
    <button class="4"></button>
    <button class="5"></button>
    <button class="6"></button>
  </div>
`;