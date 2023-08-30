
import throttle from 'lodash.throttle';

let userData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

const form = document.querySelector('.feedback-form');
const userEmail = form.querySelector('input[type="email"]');
const userMessage = form.querySelector('textarea[name="message"]');



userEmail.value = userData.email || '';
userMessage.value = userData.message || '';


// ? відправка даних на локалку з затримкою в 500мс
form.addEventListener('input', throttle(function () {
    userData = {
        email: userEmail.value,
        message: userMessage.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}, 500));

// ? відміна оновлення сторінки і вивід даних інпуту в консоль
form.addEventListener('submit', noSubForm)
function noSubForm(evt) {
    evt.preventDefault();

    console.log(userData);
    localStorage.removeItem('feedback-form-state');
    userEmail.value = '';
    userMessage.value = '';
    userData = {};
};

