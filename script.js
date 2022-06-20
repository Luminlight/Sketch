const gridOne = document.querySelector("[data-grid-container]");
const gridTwo = document.querySelectorAll("[data-grid-item]");

// Displayed number of squares in grid (use squared number)
let totalDivs = 16;
// The column & row amount
let totalDivRoot = Math.sqrt(totalDivs);

// Load div on page load
// document.body.onload = containerDiv;

// Create container div
const divForContainer = document.createElement("div");
divForContainer.classList.add("container");
divForContainer.dataset.gridContainer = "container";
divForContainer.setAttribute(
  "style",
  `grid-template-columns: repeat(${totalDivRoot}, 1fr);`
);
document.body.append(divForContainer);

// Append divs to container div
for (let i = 0; i < totalDivs; i++) {
  const gridDiv = document.createElement("div");
  gridDiv.classList.add("grid-item");
  gridDiv.dataset.gridItem = "grid-item";
  document.querySelector(".container").append(gridDiv);
}

console.log(gridOne);
console.log(gridTwo);
