let trigger = document.querySelector('.trigger');
let modal = document.querySelector('.modal')
let closeBtn = document.querySelector('.close-button')

trigger.addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});

closeBtn.addEventListener("click", e => {
    modal.classList.toggle("show-modal")
});





let modalEndGame = document.querySelector('#endModal')
let tile = document.querySelectorAll('.tile')

tile.forEach(element =>
    element.addEventListener('click', handleClick)
)

function handleClick (e) {
    e.stopPropagation();
    modalEndGame.classList.toggle("blockEndGame")
}

window.onclick = function(e) {
    if (e.target === modalEndGame) {
        modalEndGame.classList.toggle("blockEndGame");
    }
}