const container = document.getElementById("container");
container.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; align-items: center;");

const title = document.createElement("h1");
title.innerText = "Sarah's Etch A Sketch Project"
title.setAttribute("style", "margin-top: 36px;");
container.appendChild(title);

const text = document.createElement("p");
text.setAttribute("style", "font-size: 24px; margin: -10px;");
text.innerText = "Click the button below to reset the Etch A Sketch and enter your desired number of columns and rows."
container.appendChild(text);

const buttonDiv = document.createElement("div");
container.appendChild(buttonDiv);

const initialGrid = createGrid();
createCell(initialGrid, 10, 10);
gridDetect(initialGrid, 10, 10); 

const button = document.createElement("button");
button.innerText = "Reset Grid";
button.setAttribute("style", "margin-top: 24px; margin-bottom: -8px; height: 50px; width: 125px; font-size: 18px;");
button.onclick = function () {

    let columns = prompt("How many columns?");
    let rows = prompt("How many rows?");

    if ((100 > columns) & (100 > rows)) {

         if ((columns > 0) & (rows > 0)) {

            container.lastChild.remove();
            const newGrid = createGrid();
            createCell(newGrid, rows, columns);
            gridDetect(newGrid, rows, columns); 
         }

         else {
            alert("Error! Must be between 0 and 100. Please try again.");
        }

    }
    else {
        alert("Error! Must be between 0 and 100. Please try again.");
    }
}

buttonDiv.appendChild(button);


function setTemplate (grid, num) {
    string = "";

    for (let i = 0; i < num; i ++) {
        string = string + "1fr ";
    }

    string = string.slice(0, -1); 
    grid.style.gridTemplateColumns = string;

}

function setCellWidthHeight(cell, columns, rows) {
    let width = (600/columns);
    let height = (600/rows);
    let widthStr = width + "px";
    let heightStr = height + "px";
    cell.style.width = widthStr;
 

    cell.style.height = heightStr;
    cell.style.minHeight = widthStr;
    cell.style.maxHeight = heightStr;
    cell.style.minWidth = widthStr;
    cell.style.maxWidth = heightStr;

}

function createGrid () {

    const grid = document.createElement('div');
    container.appendChild(grid);
    grid.setAttribute("style", "display: grid; width: 600px; height: 600px; min-height: 600px; max-height: 600px; max-width: 600px; min-width: 600px; grid-template-columns: auto auto auto; margin: 24px;")
    /*"style", "display: flex; flex: 0; margin: 16px;")*/

      return grid;

}


function gridDetect(grid, columns, rows) {
    grid.addEventListener("mouseover", function(event) {
        let cells = this.children;
        for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        let rect = cell.getBoundingClientRect();
        let elementDetected = event.clientX >= rect.left
            && event.clientX <= rect.right
            && event.clientY >= rect.top
            && event.clientY <= rect.bottom;
        if (elementDetected) {
            cell.setAttribute("style", "font-size: 1px; box-sizing: border-box; background-color: black; color: black; border: 1px solid black;");
            /*; box-sizing: border-box*/
            setCellWidthHeight(cell, columns, rows);
            return;
        }

        }
        
        console.log("no element detected!");
    });
}

/*creates a number of cells per number of rows and columns*/
function createCell (grid, columns, rows) {

    setTemplate(grid, columns);

     for (let i = 0; i < (columns * rows); i++){

            const cell = document.createElement('div');
            cell.classList.add("cell");
            cell.setAttribute("style", "font-size: 1px; box-sizing: border-box; border: 1px solid black; align-text: center; display: grid; background-color: red; color: red;")
            /*; box-sizing: border-box*/
            cell.textContent = (i + 1);
            setCellWidthHeight(cell, columns, rows);
            grid.appendChild(cell);
     }
    
}

const footer = document.createElement("div");
container.appendChild.footer;

/*column.setAttribute("style", "display: flex; flex: 0; flex-wrap: wrap;")*/
/*cell.setAttribute("style", "font-size: 16px; display: flex; flex: 0; border: thin black solid;  aspect-ratio:1/1;")*/


/*function gridReset (grid, columns, rows) {
    let newCellCount = columns * rows;
    let cells = grid.children;
    let currentCellCount = cells.length;
    console.log(newCellCount);
    console.log(currentCellCount);

    if (newCellCount > currentCellCount) {
        console.log("in first if statement");

        createCell(columns, rows);

        console.log("cell created");

        }
    

    else {
        for (let i = newCellCount; i < currentCellCount; i++) {
            console.log("i is " + i);
            let cell = cells[i];
            cell.remove();
        }
    }  
}*/