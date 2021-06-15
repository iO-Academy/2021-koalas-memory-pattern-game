const modal = document.querySelector(".modal");

document.querySelector(".trigger").addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});

document.querySelector(".close-button").addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});


function modalEndGame () {
    let modalEndGame = document.querySelector('#endModal')
        modalEndGame.classList.toggle("blockEndGame")
}

let colorPattern = []
let timesRun = 1
function lightUpSquare() {
    let colours = ["blue", "green", "yellow", "red"]
    let random_colour = (colours[Math.floor(Math.random()*colours.length)])
    colorPattern.push(random_colour)
    document.querySelector('#' + random_colour).classList.add('activated')
    setTimeout(() => {
        removeLight(random_colour)
    }, 500)

    if (timesRun < 4) {
        timesRun++
        setTimeout(lightUpSquare, 2000)
    } else {
        playerTurn()
    }
}

function removeLight(random_colour) {
    document.querySelector('#' + random_colour).classList.remove('activated')
}

const startGame = document.querySelector('.start-button');

startGame.addEventListener('click', e => {
    lightUpSquare()
})


function playerTurn() {
    document.querySelectorAll('.box').forEach(element => {
        element.addEventListener('click', e => {
            e.stopPropagation()
            if (e.target.id !== colorPattern[0]) {
                modalEndGame()
            } else {
                console.log('correct')
                colorPattern.shift()
                if (colorPattern.length === 0) {
                    console.log('you have reach lvl 2')
                }
            }
        })
    })
}


