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
// lightUpSquare() <-- add to start button event listener