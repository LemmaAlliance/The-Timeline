let zoomFactor = 1;
const scrnWidth = screen.width;
const scrnHeight = window.innerHeight;
const myElement = document.getElementById("my-element");
let rect = myElement.getBoundingClientRect();
let distanceFromRight = document.documentElement.clientWidth - rect.right;
let xPos = 0;
let date1 = new Date("Jan 01 2000 00:00:00");
let date2 = new Date();
let date3 = new Date("Jan 28 2010 00:00:00");
var dif = Math.abs(date1 - date2) / 1000;
var dif2 = Math.abs(date1 - date3) / 1000;
var percen = (((dif2-dif)/dif) * 100) + 100;
var pix;

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
  myElement.style.left = (xPos + "%");
  
  console.log(xPos);
  rect = myElement.getBoundingClientRect();
  distanceFromRight = document.documentElement.clientWidth - rect.right;
  console.log("Distance from right" + distanceFromRight)
}, false);

window.addEventListener("load", function() {
  console.log("Page has finished loading");

  // Do something else here
  myElement.style.position = "absolute";
  myElement.style.width = scrnWidth;
  console.log(scrnHeight/2);
  myElement.style.marginTop = (scrnHeight/2) + "px";
  myElement.style.marginBottom = 0;
  myElement.style.margin = "20,20";
  myElement.style.left = (0 + "%");
  myElement.style.right = (0 + "%");
  myElement.style.top = (0 + "%");
  console.log("Distance from right: " + distanceFromRight);

  pix = (percen/100) * myElement.offsetWidth;

  console.log("diffrence: " + dif);
  console.log("diffrence 2: " + dif2);
  console.log("percentage: " + percen);
  console.log("Width" + myElement.offsetWidth);
  console.log("pixels: " + pix);
});