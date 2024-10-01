const width = 500;
const height = 500;

let global_size;

function createSketchGrid(size = 16) {

    if(size > 100)
        size = 100;
    if(size < 1)
        size = 1;

    deleteChildren();

    let container =  document.querySelector("#container");
    let pixelSize = width/size;

    for(let i = 0; i < size; i++) {
        let div = document.createElement("div");
        div.setAttribute("style", "display: flex; flex-direction: column;");

        for(let j = 0; j < size; j++) {
            let rowDiv = document.createElement("div");
            rowDiv.setAttribute("style", "width: " + pixelSize + "px; height: " + pixelSize + "px; opacity: 0.0;");
            rowDiv.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
            rowDiv.addEventListener("mouseover", () => {
                rowDiv.style.opacity = parseFloat(rowDiv.style.opacity) + 0.1;
            });
            div.appendChild(rowDiv);
        }

        container.appendChild(div);
    }

    global_size = size;
}

function deleteChildren() {
    document.querySelector("#container").innerHTML = "";
}

function initContainer() {
    let container = document.querySelector("#container");
    container.setAttribute("style", "width: " + width + "px; height: " + height + "px;");
}

const size_button = document.querySelector("#set_grid_size");
size_button.addEventListener("click", () => {
    let size = prompt("Please enter a grid size (no greater than 100):", "16");
    createSketchGrid(size);
});

const clear_button = document.querySelector("#clear_button");
clear_button.addEventListener("click", () => {
    deleteChildren();
    createSketchGrid(global_size);
});

initContainer();

createSketchGrid();

