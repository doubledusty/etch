function generateSquares(dimension) {
    for (i = 0; i < dimension; i++) {
        let newRow = document.createElement("div")
        newRow.className = "row"
        sketchBox.appendChild(newRow)
    
        for (j = 0; j < dimension; j++) {
            let newSquare = document.createElement("div")
            newSquare.className = "square"
            newSquare.addEventListener("mouseover", function() {
                newSquare.style.backgroundColor = "black"
            })
            newRow.appendChild(newSquare)
    
        }
        
    }
}

const slider = document.getElementById("slider")
const sketchBox = document.getElementById("sketchBox")
const select = document.getElementById("select")
const label = document.getElementById("label")
label.innerHTML = slider.value
generateSquares(slider.value)
//update text with current slider position
slider.addEventListener("input", function(){
    label.textContent = this.value
})

select.addEventListener("click", function(){
    sketchBox.textContent = ""
    generateSquares(slider.value)
})


