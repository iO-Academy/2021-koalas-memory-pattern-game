const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");



trigger.addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});

closeButton.addEventListener("click", e => {
    modal.classList.toggle("show-modal");
});