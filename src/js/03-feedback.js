
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');


const userEmail = form.querySelector('input[type="email"]');
const userMessage = form.querySelector('textarea[name="message"]');

console.log(userMessage);
console.log(userEmail);

// ! присутність даних в локальному сховищі 
const availabilityOfData = localStorage.getItem('feedback-form-state');
if (availabilityOfData !== null) {
    const data = JSON.parse(availabilityOfData);
    const { email, message } = data;
    userEmail.value = email;
    userMessage.value = message;
}

console.log(availabilityOfData);

// ? відправка даних на локалку з затримкою в 500мс
form.addEventListener("input", throttle(function () {
    const data = {
        email: userEmail.value,
        message: userMessage.value
    };
    localStorage.setItem("feedback-form-state",JSON.stringify(data))
},500));






// ? відміна оновлення сторінки і вивід даних інпуту в консоль
form.addEventListener("submit", noSubForm)
function noSubForm(evt) {
    evt.preventDefault();

    console.log(JSON.parse(availabilityOfData));

    localStorage.removeItem('feedback-form-state')
    userEmail.value = "";
    userMessage.value = "";
}
