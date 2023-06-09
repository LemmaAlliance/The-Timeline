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

function clamp(min, num) {
  if (num < min) {
    num = min;
  }
  return (num);
}

function refresh() {
}

document.addEventListener("wheel", function (event) {
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
  myElement.style.transform = `scaleX(${zoomFactor - 20})`;
}, {passive: false}); // Add the { passive: false } option

window.addEventListener("keydown", function (e) {
  console.log(`You pressed ${e.key}`);

  rect = myElement.getBoundingClientRect();
  distanceFromRight = document.documentElement.clientWidth - rect.right;

  if (e.key == "ArrowLeft") {
    xPos += -10
  };
  if (e.key == "ArrowRight") {
    xPos += 10
  };
  myElement.style.left = (xPos + "%");

  console.log(xPos);
  rect = myElement.getBoundingClientRect();
  distanceFromRight = document.documentElement.clientWidth - rect.right;
  for (var i = 0; i < dates.length; i++) {
    (dates[i]["element"]).style.left = ((xPos + (dates[i].percentage)) + "%");
  }
  console.log("Distance from right" + distanceFromRight)
}, false);

window.addEventListener("load", function () {
  console.log("Page has finished loading");

  fetch('data/posts.json')
    .then(response => response.json())
    .then(data => {
      items = data["posts"];
      console.log(items);

      let temp;
      let temp2;
      for (var i = 0; i < items.length; i++) {
        temp = Math.abs(date1 - new Date(items[i].date)) / 1000
        temp2 = (((temp - dif) / dif) * 100) + 100;
        Object.assign(items[i], { 'element': document.createElement("div") });

        dates.push({ "date": new Date(items[i].date), "element": items[i].element, "percentage": temp2 });
        console.log(`Item ${i}'s date is: ${dates[i].date}, it's percentage is: ${dates[i].percentage}`);

        if (i != 0) {
          if (dates[i].percentage - (dates[i - 1].percentage) < 1) {
            dates[i]["element"].style.visibility = "hidden";
          }
        };
      };

      //prepare items
      for (var i = 0; i < dates.length; i++) {
        (dates[i]["element"]).style.position = "relative";
        (dates[i]["element"]).style.top = (-(15)) + "px";
        (dates[i]["element"]).style.display = "inline";
        myElement.appendChild(dates[i].element);
      }
      //for(let i = 0;)

      for (var i = 0; i < dates.length; i++) {
        (dates[i]["element"]).style.left = ((xPos + (dates[i].percentage)) + "%");
        console.log("put them where they're supposed to be")
      }

      console.log("diffrence: " + dif);
      console.log("Width" + myElement.offsetWidth);
      console.log("pixels: " + pix);
      refresh();
    })
    .catch(error => console.error(error));

  // Do something else here
  myElement.style.position = "relative";
  myElement.width = scrnWidth - 20;
  myElement.height = 3;
  console.log(scrnHeight / 2);
  myElement.style.marginTop = (scrnHeight / 2) + "px";
  myElement.style.marginBottom = 0;
  myElement.style.margin = "20,20";
  myElement.style.left = (0 + "%");
  myElement.style.right = (0 + "%");
  myElement.style.top = (0 + "%");
  console.log("Distance from right: " + distanceFromRight);

});