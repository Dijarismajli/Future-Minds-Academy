const email = document.querySelector('#email')
const pass = document.querySelector('#pass')
const loginBtn = document.querySelector('#loginBtn')

let emailUser = 'dijari';
let passUser = 'Dijari2010';

loginBtn.addEventListener('click', function () {
    if (email.value == emailUser && pass.value == passUser) {
        alert('Correct ')
    }
    else {
        alert('Incorrect')
    }
});