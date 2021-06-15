const modal = document.querySelector(".modal");

document.querySelector(".trigger").addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});

document.querySelector(".close-button").addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});