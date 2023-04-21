let zoomFactor = 1;
const scrnWidth = screen.width;
const scrnHeight = window.innerHeight;

function clamp(min, num){
  if(num < min){
    num = min;
  }
  return(num);
}

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

  zoomFactor = clamp(1, zoomFactor);

  // Set the scale transform on the element
  document.getElementById("my-element").style.transform = `scaleX(${zoomFactor})`;
}, { passive: false }); // Add the { passive: false } option
window.addEventListener("load", function() {
  console.log("Page has finished loading");
  // Do something else here
  document.getElementById("my-element").style.width = scrnWidth;
  console.log(scrnHeight/2);
  document.getElementById("my-element").style.marginTop = (scrnHeight/2) + "px";
  document.getElementById("my-element").style.marginBottom = 0;
});