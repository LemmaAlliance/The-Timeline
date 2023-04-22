let zoomFactor = 1;
const scrnWidth = screen.width;
const scrnHeight = window.innerHeight;
const myElement = document.getElementById("my-element");
let rect = myElement.getBoundingClientRect();
let distanceFromRight = document.documentElement.clientWidth - rect.right;
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

  rect = myElement.getBoundingClientRect();
  distanceFromRight = document.documentElement.clientWidth - rect.right;

  if(e.key == "ArrowLeft"){
    xPos += -10
  };
  if(e.key == "ArrowRight"){
    xPos += 10
  };
  if(xPos < 0){
    myElement.style.marginRight = (-xPos + "%");
    myElement.style.marginLeft = 0;
  };
  if(xPos > 0){
    myElement.style.marginLeft = (xPos + "%");
    myElement.style.marginRight = 0;
  };
  if(xPos == 0){
    myElement.style.marginRight = 0;
    myElement.style.marginLeft = 0;
  }
  
  console.log(xPos);
  rect = myElement.getBoundingClientRect();
  distanceFromRight = document.documentElement.clientWidth - rect.right;
  console.log("Distance from right" + distanceFromRight)
}, false);

window.addEventListener("load", function() {
  console.log("Page has finished loading");
  // Do something else here
  myElement.style.width = scrnWidth;
  console.log(scrnHeight/2);
  myElement.style.marginTop = (scrnHeight/2) + "px";
  myElement.style.marginBottom = 0;
  myElement.style.left = (0 + "%");
  myElement.style.top = (0 + "%");
  console.log("Distance from right: " + distanceFromRight);
});