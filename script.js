const modal = document.querySelector(".modal")
const display = document.querySelector('.display')
let colorPattern = []
let timesRun = 1
let level = 1
let counter = 0
let speedTime = 1000
let speedOfUnchanging = 500

document.querySelector(".trigger").addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});
document.querySelector(".close-button").addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});
document.querySelector('.start-button').addEventListener('click', e => {
    lightUpRandomSquare()
    display.classList.remove('unclickable');
})

function toggleEndGameModal() {
        document.querySelector('#endModal').classList.toggle("showEndGameModal")
}

function lightUpRandomSquare() {
    const colours = ["blue", "green", "yellow", "red"]
    const random_colour = (colours[Math.floor(Math.random()*colours.length)])
    colorPattern.push(random_colour)
    document.querySelector('#' + random_colour).classList.add('activated')
    display.classList.add('unclickable');
    setTimeout(() => {
        removeLight(random_colour)
    }, speedOfUnchanging)
    if (timesRun < 4) {
        timesRun++
        setTimeout(lightUpRandomSquare, speedTime)
    } else {
        display.classList.remove('unclickable');
        playerTurn()
    }
}

function removeLight(random_colour) {
    document.querySelector('#' + random_colour).classList.remove('activated')
}

function playerTurn() {
    document.querySelectorAll('.box').forEach(element => {
        element.addEventListener('click', boxClick)
    })
}

function removeEventListener() {
    document.querySelectorAll('.box').forEach(element => {
        element.removeEventListener('click', boxClick)
    })
}

function levelIncrease() {
    level++
    document.querySelector('.level').innerHTML = 'LVL ' + level
    if (level !== 1 && level % 2 !== 0) {
        counter++
    }
    speedIncrease()
    timesRun -= counter
}

function speedIncrease() {
    if (speedTime > 200 && level % 4 === 0 && speedOfUnchanging > 100) {
        speedOfUnchanging -= 50
        speedTime -= 100
    }
}

function boxClick(e) {
    if (e.target.id !== colorPattern[0]) {
        toggleEndGameModal()
    } else {
        colorPattern.shift()
        if (colorPattern.length === 0) {
            timesRun = 1
            levelIncrease()
            removeEventListener()
            setTimeout(lightUpRandomSquare, 2000)
        }
    }
}