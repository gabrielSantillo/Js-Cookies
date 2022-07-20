function create_cookie(details) {
    Cookies.set(`button_clicked`, `yes`);
}

let button = document.querySelector(`button`);
button.addEventListener(`click`, create_cookie);