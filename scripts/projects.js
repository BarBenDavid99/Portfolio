
function openModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

function closeModal(modalId) {
    let modal = document.getElementById(modalId)
    if (modal) {
        modal.style.display = "none";
    }
}


let buttons = document.querySelectorAll(".modalBtn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let modalId = button.getAttribute("data-modal");
        openModal(modalId);
    });
});

let closeButtons = document.querySelectorAll(".close");

closeButtons.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
        let modal = closeButton.closest(".modal");
        if (modal) {
            modal.style.display = "none";
        }
    });
});

window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
};