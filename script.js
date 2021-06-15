const modal = document.querySelector(".modal");

document.querySelector(".trigger").addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});

document.querySelector(".close-button").addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});

function modalEndGame () {
    let modalEndGame = document.querySelector('#endModal')
    let tile = document.querySelectorAll('.box')

    tile.forEach(element =>
        element.addEventListener('click', handleClick)
    )

    function handleClick(e) {
        e.stopPropagation();
        modalEndGame.classList.toggle("blockEndGame")
    }
}

modalEndGame();