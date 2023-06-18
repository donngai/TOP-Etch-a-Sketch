//Create initial grid
let border = true, input = 16;
createNewGrid(input);


//Create the boxes
function createNewGrid (numOfBox) {
    const container = document.querySelector(".container");

    for (let j = 0; j < numOfBox; j++) {
        var row = document.createElement("div");
        row.classList.add("row");

        for (let i = 0; i < numOfBox; i++) {
            var box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }

        container.appendChild(row);
    }

    
    //Determine box size
    let boxSize = 960;

    if (border)
        boxSize = (960 - numOfBox * 2)/ numOfBox;
    else
        boxSize = (960 - 2) / numOfBox;

    console.log(boxSize);

    //Create hover effect
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = randomClr();
            

            /*setTimeout(() => {
                event.target.style.backgroundColor = "";
            }, 1000);*/
        });

        box.style.width = boxSize + "px";
        box.style.height = boxSize + "px";
    });
}


//Color change function
function randomClr () {
    const clr = Math.floor(Math.random()*16777215).toString(16);
    return "#" + clr;
}


//Remove previous grid
function removeGrid () {
    const boxes = document.querySelectorAll(".box");
    
    boxes.forEach((box) => {
        box.remove();
    });
}


//New grid function
const newGrid = document.querySelector(".newLayout");

newGrid.addEventListener("click", () => {
    let msg = "Please enter the number of boxes per side (1-100): ";
    input = 16;
    do {
        input = prompt(msg);
        msg = "Please enter a number between 1 and 100: ";
    } while (input < 1 || input > 100);

    removeGrid();
    createNewGrid(input);
});


//Add/Remove border function
const borders = document.querySelector(".border");

borders.addEventListener("click", () => { 
    removeGrid()

    if (border)
        border = false;
    else
        border = true;

    createNewGrid(input);

    let boxes = document.querySelectorAll(".box");

    if (!border) {
        boxes.forEach((box) => {
            box.style.border = "none";
        })
    }
    else {
        boxes.forEach((box) => {
            box.style.border = "solid 1px";
        })
    }
});