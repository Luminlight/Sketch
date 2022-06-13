// Create a 16x16 grid of square divs
// Create divs in JS

// Load div on page load
document.body.onload = containerDiv;

// Create container div
function containerDiv() {
  const div = document.createElement("div");
  div.setAttribute("id", "container");
  div.style.border = "1px solid black";
  div.style.height = "100px";
  div.style.width = "100px";
  document.body.append(div);
}

// Create a grid
function addGridDiv() {
  const div = document.createElement("div");
  div.style.border = "1px solid red";
  div.style.height = "10px";
  div.style.width = "10px";

  document.getElementById("container").append(div);
}
