let computerArray = ['green', 'yellow', 'red', 'blue'];
let lvlCount = 1;

function playerTurn(computerArray) {
    document.querySelectorAll('.box').forEach(element => {
        element.addEventListener('click', e => {
            if (e.target.id !== computerArray[0]) {
                console.log('error') // function error message
            } else {
                computerArray.shift();
                if (computerArray.length === 0) {
                    lvlCount++;
                    console.log('you have reach lvl ' + lvlCount);
                }
            }
        })
    })
}

playerTurn(computerArray)

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
