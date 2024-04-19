let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")


let turnO = true

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 5, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"
            turnO = false
        } else {
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true
        checkWinner()
    });
})

const resetGame = ()=>{
    turnO = true
    enableBoxes()
}

reset.addEventListener("click", resetGame)

// resetbtn
const enableBoxes = ()=>{
    turnO = true
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""
    }
}

// to disable buttons so that Game discontinue

const disableBoxes = ()=>{
    turnO = true
    for(let box of boxes){
        box.disabled = true
    }
}



// to check the winner

const checkWinner = () => {
    for (pattern of winPattern) {
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
        let pos1val = boxes[pattern[0]].innerText
        let pos2val = boxes[pattern[1]].innerText
        let pos3val = boxes[pattern[2]].innerText

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {

                alert("winner",pos1val)
                disableBoxes()
            }
        }
    }
}

