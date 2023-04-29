let zoomFactor = 1;
const scrnWidth = screen.width;
const scrnHeight = window.innerHeight;
const myElement = document.getElementById("my-element");
const hi = document.getElementById("Hi");
let rect = myElement.getBoundingClientRect();
let distanceFromRight = document.documentElement.clientWidth - rect.right;
let xPos = 0;
let date1 = new Date("Jan 01 2000 00:00:00");
let date2 = new Date();
let dates = [];
let items;
var dif = Math.abs(date1 - date2) / 1000;
//var percen = (((dif2-dif)/dif) * 100) + 100;
var pix;

function clamp(min, num){
  if(num < min){
    num = min;
  }
  return(num);
}

function refresh(){
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
}); // Add the { passive: false } option

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
  for(var i=0; i < dates.length; i++){
    (dates[i]["element"]).style.left = ((xPos + (dates[i].percentage)) + "%");
  }
  console.log("Distance from right" + distanceFromRight)
}, false);

window.addEventListener("load", function() {
  console.log("Page has finished loading");

  items = document.getElementsByClassName("item");
  // Do something else here
  myElement.style.position = "relative";
  myElement.width = scrnWidth;
  myElement.height = 3;
  console.log(scrnHeight/2);
  myElement.style.marginTop = (scrnHeight/2) + "px";
  myElement.style.marginBottom = 0;
  myElement.style.margin = "20,20";
  myElement.style.left = (0 + "%");
  myElement.style.right = (0 + "%");
  myElement.style.top = (0 + "%");
  console.log("Distance from right: " + distanceFromRight);

  let temp;
  let temp2;
  for (var i = 0; i < items.length; i++) {
    temp = Math.abs(date1 - new Date(items[i].id)) / 1000
    temp2 = (((temp-dif)/dif) * 100) + 100;

    dates.push({"date":new Date(items[i].id), "element":items[i], "percentage":temp2});
    console.log(`Item ${i}'s date is: ${dates[i].date}, it's percentage is: ${dates[i].percentage}`);
  };

  //prepare items
  for(var i=0; i < dates.length; i++){
    (dates[i]["element"]).style.position = "relative";
  }
  //for(let i = 0;)

  console.log("diffrence: " + dif);
  console.log("diffrence 2: " + dif2);
  console.log("percentage: " + percen);
  console.log("Width" + myElement.offsetWidth);
  console.log("pixels: " + pix);
  refresh();
});