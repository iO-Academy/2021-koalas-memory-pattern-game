const modal = document.querySelector(".modal");

document.querySelector(".trigger").addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});

document.querySelector(".close-button").addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});

// Make game start when button is clicked
// const startGame = document.querySelector('.start-button');
//
// startGame.addEventListener('click', e => {
//     // insert code for randomize pattern sequence
//     console.log('hello')
// });