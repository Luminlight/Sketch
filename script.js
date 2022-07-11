// Elements to be selected
const container = document.createElement("div");
const gridItem = document.querySelectorAll(".grid-element");
const colorPicker = document.querySelector("#colorPicker");
const clearGridButton = document.querySelector(".clear-grid");
const gridSizeChoice = document.querySelector("#grid-size");

// Number of rows and columns, should default to 5x5
let rowColumn = gridSizeChoice.value;

// Event listeners
clearGridButton.addEventListener("click", clearGrid);
gridSizeChoice.addEventListener("change", changeGridSize);

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
  e.target.style.backgroundColor = `${colorPicker.value}`;
}

function clearGrid() {
  container.innerHTML = "";
  setupGrid();
}

function changeGridSize() {
  rowColumn = gridSizeChoice.value;
  clearGrid();
}
