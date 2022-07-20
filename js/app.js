function create_cookie(details) {
    Cookies.set(`button_clicked`, `yes`);
}

let button = document.querySelector(`button`);
button.addEventListener(`click`, create_cookie);

Cookies.set(`username`, `Gabriel`);

let username = Cookies.get(`nothing`);
if (typeof username === `string`) {
    document.querySelector(`button`).insertAdjacentHTML(`afterend`, `<h1>Congratulations for baking a cookie.</h1>`);
}