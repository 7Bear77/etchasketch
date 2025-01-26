// create a function that will generate etchasketch squares inside of container div
// Initialize a variable for squares across
// For (num of squares) create (num of squares) divs
// Divs ought to be flex-wrapped to fill entire container
// Function needs to align the new divs in a grid layout using flexbox

let initialSquares = 40;
const containerDiv = document.getElementById("etchasketch");
const gridArray = [];

function makeGrids(size) {
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

console.log(gridArray);
makeGrids(initialSquares);

// create a function that will color the background of divs that are hovered over

const gridBox = document.querySelectorAll(".row");
gridBox.forEach(div => div.addEventListener('mouseover', (e) => e.target.style.background = "black")); // took too much googling
