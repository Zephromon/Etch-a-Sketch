canvasCreation(prompt("What would you like the resolution of the canvas to be?"));

function canvasCreation(resolution) {
    while (resolution > 100) {
        resolution = prompt("Please do not choose a value greater than 100.")
    }
    const canvas = document.createElement("div");
    canvas.setAttribute("id", "canvas");

    for (let i = 0; i < resolution; i++) {
        const row = document.createElement("div");
        row.style.display = "flex";
        for (let j = 0; j < resolution; j++) {
            //console.log(`${i}, ${j}`)
            const cell = document.createElement('div');
            cell.style.height = `${(90/resolution)}vh`;
            cell.style.width = `${(90/resolution)}vh`;
            cell.style.display = "flex";
            //cell.style.border = "2px solid black";
            cell.classList.add("cell");
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = "black";
            });
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }

    const body = document.querySelector("body");
    body.appendChild(canvas);

} 

function changeResolution (resolution) {
    let current_canvas = document.getElementById("canvas");
    if (current_canvas.parentNode) {
        current_canvas.parentNode.removeChild(current_canvas)
    }
    canvasCreation(resolution);
}

document.querySelector("button").addEventListener("click", () => changeResolution(prompt("What would you like the resolution of the canvas to be?")));

