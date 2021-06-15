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
