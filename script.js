const modal = document.querySelector(".modal");
const display = document.querySelector('.display')
let colorPattern = []
let timesRun = 1
let level = 1
let counter = 0
let speedTime = 1000;

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
    }, 500)
    if (timesRun < 4) {
        timesRun++
        setTimeout(lightUpRandomSquare, 1000)
    } else {
        display.classList.remove('unclickable');
        console.log(colorPattern)
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

function speedLvl() {
    let minimumSpeed = 300;
    if (speedTime === 300) {
        speedTime = minimumSpeed;
    } else if (level % 4 === 0) {
        speedTime -= 100;
        console.log(speedTime)
    }
}

function boxClick(e) {
    if (e.target.id !== colorPattern[0]) {
        toggleEndGameModal()
    } else {
        colorPattern.shift()
        if (colorPattern.length === 0) {
            timesRun = 1
            level++
            if (level !== 1 && level %2 !== 0) {
                counter++
            }
            speedLvl()
            timesRun = timesRun - counter
            console.log(level)
            console.log(counter)
            removeEventListener()
            setTimeout(lightUpRandomSquare, 2000)
        }
    }
}