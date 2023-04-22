let zoomFactor = 1;
const scrnWidth = screen.width;
const scrnHeight = window.innerHeight;
const myElement = document.getElementById("my-element");
let xPos = 0;

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
  myElement.style.transform = `scaleX(${zoomFactor})`;
}, { passive: false }); // Add the { passive: false } option

window.addEventListener("keydown", function (e){
  console.log(`You pressed ${e.key}`);
  if(e.key == "ArrowLeft"){
    xPos += -10
  };
  if(e.key == "ArrowRight"){
    xPos += 10
  };
  if(xPos < 0){
    myElement.style.marginRight = -(xPos + "%");
  };
  if(xPos > 0){
    myElement.style.marginLeft = (xPos + "%");
  };
}, false);

window.addEventListener("load", function() {
  console.log("Page has finished loading");
  // Do something else here
  myElement.style.width = scrnWidth;
  console.log(scrnHeight/2);
  myElement.style.marginTop = (scrnHeight/2) + "px";
  myElement.style.marginBottom = 0;
});