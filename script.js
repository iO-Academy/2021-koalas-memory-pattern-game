const modal = document.querySelector(".modal");

document.querySelector(".trigger").addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});

document.querySelector(".close-button").addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});

let timesRun = 1
function lightUpSquare() {
    let colours = ["blue", "green", "yellow", "red"]
    let random_colour = (colours[Math.floor(Math.random()*colours.length)])
    document.querySelector('#' + random_colour).classList.add('activated')
    setTimeout(() => {
        removeLight(random_colour)
    }, 500)
    if (timesRun < 4) {
        timesRun++
        setTimeout(lightUpSquare, 2000)
    }
}
function removeLight(random_colour) {
    document.querySelector('#' + random_colour).classList.remove('activated')
}

const startGame = document.querySelector('.start-button');

startGame.addEventListener('click', e => {
    lightUpSquare()
});