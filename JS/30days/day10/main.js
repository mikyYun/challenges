const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

// pointing lastChecked element
let lastChecked;


/** HANDLECHECK FLOWS
 * 1. checkbox Click => assign to lastChecked
 * 2. if checkbox clicked with shiftkey => filter with isBetween => then checkbox checked 
 */
function handleCheck(e) {
  let isBetween = false;
  
  // shiftkey detect
  // and check they are checking it
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        isBetween = !isBetween;
      }      
      if (isBetween) {
        checkbox.checked = true
      }
    })
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck))