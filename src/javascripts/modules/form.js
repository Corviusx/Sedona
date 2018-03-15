const formEmailError = document.querySelector('#form__email-error');
const formPhoneError = document.querySelector('#form__phone-error');
const formPhone = document.querySelector('#form__phone');
const formEmail = document.querySelector('#form__email');
console.log(`form has loaded!`)

formEmail.addEventListener('focusout', function(e) {
    if(formEmail.validity.valueMissing){
        formEmailError.style.display="inline";
        console.log(`missing`)
    } else if(!formEmail.checkValidity()) {
        formEmailError.style.display="inline";
        console.log(`invalid`)
    } else {
        formEmailError.style.display="none";
        console.log(`valid`)
    }
}, false);

formPhone.addEventListener('focusout', function(e) {
    if(formPhone.validity.valueMissing){
        formPhoneError.style.display="inline";
        console.log(`missing`)
    } else if(!formPhone.checkValidity()) {
        formPhoneError.style.display="inline";
        console.log(`invalid`)
    } else {
        formPhoneError.style.display="none";
        console.log(`valid`)
    }
}, false);
