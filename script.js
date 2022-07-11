// # of divs per row and per column (5 = 5x5, or 25 divs)
const rowColumn = 5;

const container = document.createElement("div");
const gridItem = document.querySelectorAll(".grid-element");
const colorPicker = document.querySelector("#colorPicker");
const clearGridButton = document.querySelector(".clear-grid");

clearGridButton.addEventListener("click", clearGrid);

function setupGrid() {
  container.style.gridTemplateColumns = `repeat(${rowColumn}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${rowColumn}, 1fr)`;

  for (let i = 0; i < rowColumn * rowColumn; i++) {
    const containerElement = document.createElement("div");
    containerElement.classList.add("grid-element");
    containerElement.addEventListener("mouseover", colorDiv);
    container.appendChild(containerElement);
  }

  container.classList.add("container");
  document.body.append(container);
}
setupGrid();

function colorDiv(e) {
  // Color picker to be mouseover color
  e.target.style.backgroundColor = `${colorPicker.value}`;
}

function clearGrid() {
  container.innerHTML = "";
  setupGrid();
}
