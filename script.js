// create a function that will generate etchasketch squares inside of container div
// Initialize a variable for squares across
// For (num of squares) create (num of squares) divs
// Divs ought to be flex-wrapped to fill entire container
// Function needs to align the new divs in a grid layout using flexbox

let initialSquares = 16;

function makeGrids(size) {
    const containerDiv = document.getElementById("etchasketch");
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 1; j <= size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.border = "1px solid red";
            column.appendChild(row);
        }
        containerDiv.appendChild(column);
    }
}

makeGrids(initialSquares);