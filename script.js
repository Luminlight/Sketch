// Load div on page load
document.body.onload = containerDiv;

// Displayed number of squares in grid (use squared number)
let totalDivs = 1600;
// The column & row amount
let totalDivRoot = Math.sqrt(totalDivs);

// Create container div
function containerDiv() {
  const divForContainer = document.createElement("div");
  divForContainer.classList.add("container");
  //divForContainer.dataset.gridContainer = "container";
  divForContainer.setAttribute(
    "style",
    `grid-template-columns: repeat(${totalDivRoot}, 1fr);`
  );
  document.body.append(divForContainer);
  addGridDiv();
  colorDiv();
}

// Append divs to container div
function addGridDiv() {
  for (let i = 0; i < totalDivs; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid-item");
    //gridDiv.dataset.gridItem = "grid-item";
    document.querySelector(".container").append(gridDiv);
  }
}

function colorDiv() {
  // Very basic hover effect
  const gridOne = document.querySelectorAll(".grid-item");

  for (let i = 0; i < gridOne.length; i++) {
    gridOne[i].addEventListener("mouseover", () => {
      gridOne[i].style.backgroundColor = "black";
    });
  }
}
