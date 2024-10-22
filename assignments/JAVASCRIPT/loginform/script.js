const email = document.querySelector('#email')
const pass = document.querySelector('#pass')
const loginBtn = document.querySelector('#loginBtn')
const message = document.querySelector('#message')

let Username = 'dijarismajlicom';
let passUser = 'Dijari2010';

loginBtn.addEventListener('click', function () {
    if (email.value == emailUser && pass.value == passUser) {

        alert("Correct");
    }
    else {
        alert("Incorrect");
    }
});