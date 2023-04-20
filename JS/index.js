let zoomFactor = 1;
const bar = document.getElementById("my-bar");
const text = document.getElementById("my-element");

document.addEventListener("wheel", function(event) {
  event.preventDefault(); // Prevents the default scrolling behavior

  // Increase zoom factor when scrolling up (zoom in)
  if (event.deltaY < 0) {
    zoomFactor += 0.1;
  } 
  // Decrease zoom factor when scrolling down (zoom out)
  else if (event.deltaY > 0) {
    zoomFactor -= 0.1;
  }

  // Set the scale transform on the element
  bar.style.transform = `scaleX(${zoomFactor})`;
  text.style.transform = `scaleX(${zoomFactor})`;
});

window.addEventListener("load", function() {
  bar.style.maxWidth = `${bar.offsetWidth}px`;
});