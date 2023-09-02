// Открыть модальное окно
document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});



// Открыть модальное окно
document.getElementById("open-modal-btn2").addEventListener("click", function() {
    document.getElementById("my-modal2").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn2").addEventListener("click", function() {
    document.getElementById("my-modal2").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal2").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal2 .modal__box2").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal2").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});


// Открыть модальное окно
document.getElementById("open-modal-btn3").addEventListener("click", function() {
    document.getElementById("my-modal3").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn3").addEventListener("click", function() {
    document.getElementById("my-modal3").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal3").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal3 .modal__box3").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal3").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});


// Открыть модальное окно
document.getElementById("open-modal-btn4").addEventListener("click", function() {
    document.getElementById("my-modal4").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn4").addEventListener("click", function() {
    document.getElementById("my-modal4").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal4").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal4 .modal__box4").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal4").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});


// Открыть модальное окно
document.getElementById("open-modal-btn5").addEventListener("click", function() {
    document.getElementById("my-modal5").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn5").addEventListener("click", function() {
    document.getElementById("my-modal5").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal5").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal5 .modal__box5").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal5").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
