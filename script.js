const modal = document.querySelector(".modal");

document.querySelector(".trigger").addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});

document.querySelector(".close-button").addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});

function toggleEndGameModal () {
        document.querySelector('#endModal').classList.toggle("showEndGameModal")
}

const display = document.querySelector('.display')
let colorPattern = []
let timesRun = 1
function lightUpRandomSquare() {
    const colours = ["blue", "green", "yellow", "red"]
    const random_colour = (colours[Math.floor(Math.random()*colours.length)])
    colorPattern.push(random_colour)
    document.querySelector('#' + random_colour).classList.add('activated')
    display.classList.add('unclickable');
    setTimeout(() => {
        removeLight(random_colour)
    }, 500)
    if (timesRun < 4) {
        timesRun++
        setTimeout(lightUpRandomSquare, 1000)
    } else {
        display.classList.remove('unclickable');
        playerTurn()
    }
}

function removeLight(random_colour) {
    document.querySelector('#' + random_colour).classList.remove('activated')
}

document.querySelector('.start-button').addEventListener('click', e => {
    lightUpRandomSquare()
    display.classList.remove('unclickable');
})

function playerTurn() {
    document.querySelectorAll('.box').forEach(element => {
        element.addEventListener('click', boxClick)
    })
}

function removeEventListener () {
    if (colorPattern.length === 0) {
        timesRun = 1
        document.querySelectorAll('.box').forEach(element => {
            element.removeEventListener('click',  boxClick)
        })
        setTimeout(lightUpRandomSquare, 1000)
    }
}

function boxClick(e) {
    if (e.target.id !== colorPattern[0]) {
        toggleEndGameModal()
    } else {
        colorPattern.shift()
        removeEventListener()
    }
}