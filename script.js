
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
const display = document.querySelector('.display')
let colorPattern = []
let timesRun = 1
let level = 1
let counter = 0
function lightUpSquare() {
    let colours = ["blue", "green", "yellow", "red"]
    let random_colour = (colours[Math.floor(Math.random()*colours.length)])
    colorPattern.push(random_colour)
    document.querySelector('#' + random_colour).classList.add('activated')
    // display.classList.add('unclickable');
    setTimeout(() => {
        removeLight(random_colour)
    }, 500)
    if (timesRun < 4) {
        timesRun++
        setTimeout(lightUpSquare, 1000)
    } else {
        // display.classList.remove('unclickable');
        console.log(colorPattern)
        playerTurn()
    }
}
function removeLight(random_colour) {
    document.querySelector('#' + random_colour).classList.remove('activated')
}
const startGame = document.querySelector('.start-button');
startGame.addEventListener('click', e => {
    lightUpSquare()
    // display.classList.remove('unclickable');
})
function playerTurn() {
    document.querySelectorAll('.box').forEach(element => {
        element.addEventListener('click', boxClick)
    })
}
function boxClick(e) {
    if (e.target.id !== colorPattern[0]) {
        modalEndGame()
    } else {
        colorPattern.shift()
        if (colorPattern.length === 0) {
            timesRun = 1
            level++
            if (level !== 1 && level %2 !== 0) {
                counter++
            }
            timesRun = timesRun - counter
            console.log(level)
            console.log(counter)
            document.querySelectorAll('.box').forEach(element => {
                element.removeEventListener('click',  boxClick)
            })
            setTimeout(lightUpSquare, 2000)
        }
    }
}

