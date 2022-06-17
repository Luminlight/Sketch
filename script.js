// Create a 16x16 grid of square divs
// Create divs in JS

// Total number of divs
let totalDivs = 16;
// The column & row amount
let totalDivRoot = Math.sqrt(totalDivs);

// Load div on page load
document.body.onload = containerDiv;

// Create container div
function containerDiv() {
  const divForContainer = document.createElement("div");
  // Add class, method 1
  divForContainer.className = "container";
  divForContainer.setAttribute(
    "style",
    `grid-template-columns: repeat(${totalDivRoot}, 1fr);`
  );
  document.body.append(divForContainer);

  addGridDiv();
}

// Create # of grid square divs
function addGridDiv() {
  // Append divs to container div
  for (let i = 0; i < totalDivs; i++) {
    const gridDiv = document.createElement("div");
    // Add class, method 2
    gridDiv.classList.add("grid-item");
    document.querySelector(".container").append(gridDiv);
  }
}
