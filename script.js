// create a function that will generate etchasketch squares inside of container div
// Initialize a variable for squares across
// For (num of squares) create (num of squares) divs
// Divs ought to be flex-wrapped to fill entire container
// Function needs to align the new divs in a grid layout using flexbox
// create a function that will color the background of divs that are hovered over
// Create button that will alow user to clear the screen and grid, and select a new grid size
// Create the button
// Create a function that can clear the current grid
// Create a function that will prompt the user to select a grid size
// Use the propmted input to create a grid of that size
// Attach both functions to the button
// Allow the user to have a color change effect
// Store values in an array
// Randomly select a value from the array to change the background

const initialSquares = 16;
const containerDiv = document.getElementById("etchasketch");
const resizeScreenBtn = document.getElementById("resizeScreenButton");
const clearRow = document.getElementById("etchasketch")
const colorBtn = document.getElementById("newColorButton");
const blackBtn = document.getElementById("backToBlack");

resizeScreenBtn.addEventListener("click", clearScreen);
blackBtn.addEventListener("click", () => {
    randomColors = false;
    clearScreen();
});

const colors = ["black", "red", "orange", "yellow", "green", "blue", "indigo", "magenta", "cyan", "lightred"];

let randomColors = false;

colorBtn.addEventListener("click", () => {
    randomColors = true;
    clearScreen();
})
makeGrids(initialSquares);

function makeGrids(size) {
    if (size > 100 || size <=0) {
        resize();
        } else {
            for (let i = 0; i < size; i++) {
            let column = document.createElement("div");
            column.classList.add("column");
            for (let j = 1; j <= size; j++) {
                let row = document.createElement("div");
                row.classList.add("row");
                column.appendChild(row);
            }
            containerDiv.appendChild(column);
        }
    }
    allowColorChange();
}

function allowColorChange() {
    if (randomColors) {
        let gridBox = document.querySelectorAll(".row");
        gridBox.forEach(div => div.addEventListener('mouseover',
            (e) => e.target.style.background = colors[Math.floor(Math.random() * colors.length)]));
        } else {
            let gridBox = document.querySelectorAll(".row");
            gridBox.forEach(div => div.addEventListener('mouseover',
                (e) => e.target.style.background = colors[0]));
            }
        }
function clearScreen() {
    while (clearRow.firstChild) {
        clearRow.removeChild(clearRow.firstChild);
    }
    resize();
}

function resize() {
    let newSize = prompt("Pick a grid size up to 100 squares");
    while (!/^[0-9]+$/.test(newSize)) {
        alert("Try again");
        newSize = prompt("Pick a grid size up to 100 squares");
    }
    makeGrids(newSize);
}