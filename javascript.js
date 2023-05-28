
let dimension = 32

const sketchBox = document.getElementById("sketchBox")

for (i = 0; i < dimension; i++) {
    let newRow = document.createElement("div")
    newRow.className = "row"
    sketchBox.appendChild(newRow)

    for (j = 0; j < dimension; j++) {
        let newSquare = document.createElement("div")
        newSquare.className = "off square"
        newRow.appendChild(newSquare)
    }
    
}