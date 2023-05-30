function generateSquares(dimension) {
    let mode = document.querySelector('input[name="mode"]:checked')
    for (i = 0; i < dimension; i++) {
        let newRow = document.createElement("div")
        newRow.className = "row"
        sketchBox.appendChild(newRow)
    
        for (j = 0; j < dimension; j++) {
            let newSquare = document.createElement("div")
            newSquare.className = "square"
            newSquare.dataset.darkness = 1.1

            newSquare.addEventListener("mouseover", function() {
                if (mode.value == "bonus"){
                    newSquare.dataset.darkness = parseFloat(newSquare.dataset.darkness) - .1 
                    if (newSquare.dataset.darkness < 0) {newSquare.dataset.darkness = 0}
                    newSquare.style.backgroundColor = colorGen(parseFloat(newSquare.dataset.darkness))
                } else {
                    newSquare.style.backgroundColor = "black"
                }
            })
            newRow.appendChild(newSquare)
    
        }
        
    }
}

function colorGen(darkness) {
    let r = Math.random() * 255
    let g = Math.random() * 255
    let b = Math.random() * 255
    let dif = 0
    if(r >= b && r >= g) {
        dif = 255 - r
    } else if(b >= g) {
        dif = 255 - b
    } else {dif = 255 - g}
    r += dif
    b += dif
    g += dif
    r = Math.floor(darkness * (r))
    g = Math.floor(darkness * (g))
    b = Math.floor(darkness * (b))
    return `rgb(${r}, ${g}, ${b})`
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


