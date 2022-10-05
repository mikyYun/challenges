const keyHistory = [];
const secretCode = "wesbos";

window.addEventListener("keyup", (e) => {
  // console.log(e.key);
  keyHistory.push(e.key);
  // splice keyHistory with secretCode length
  keyHistory.splice(-secretCode.length - 1, keyHistory.length - secretCode.length);
  console.log(keyHistory);
  if (keyHistory.join("").includes(secretCode)) {
    console.log("Gotcha");
    // image
    cornify_add();
  }
});