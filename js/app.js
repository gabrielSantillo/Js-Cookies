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

function delete_cookie(details) {
    Cookies.remove(`button_clicked`);
}

let delete_button = document.getElementById(`delete_button`);
delete_button.addEventListener(`click`, delete_cookie);


function change_cookie(details) {
    Cookies.set(`button_clicked`, `no`);
}

let change_button = document.getElementById(`for_change`);
change_button.addEventListener(`click`, change_cookie);