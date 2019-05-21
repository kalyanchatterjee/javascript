function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {
    /*Do nothing */
  }
  console.log("finished waitThreeSeconds");
}

function clickHandler() {
  console.log("click event!");
}

document.addEventListener("click", clickHandler);

waitThreeSeconds();

console.log("finished execution");

// Refresh the page and click!
