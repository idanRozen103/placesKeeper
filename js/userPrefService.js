'use strict';
const KEY = 'userData'
var gUser = { bcgColor: null, birthDate: null, birthTime: null, email: '', age: null };


function setUserInfo() {
    var bgColor = document.getElementById('color').value;
    gUser.bcgColor = bgColor;
    var txtColor = document.getElementById('text-color').value;
    gUser.txtColor = txtColor;
    var birthDate = document.getElementById('birth-date-time').value;
    gUser.birthDate = birthDate;

    var email = document.getElementById('email-adress').value;
    gUser.email = email;
    var age = document.getElementById('age').value;
    gUser.age = age;
}

function checkValidAge() {
    var ageInput = document.getElementById('age').value;
    if (ageInput < 18 || ageInput > 120) {
        console.log('The value must be between 18 to 120');
        return false
    }
    return true
}


function setColor() {
    let prefs = loadFromStorage('userData')
    if (prefs) {
        document.querySelector('body').style.backgroundColor = prefs.bcgColor;
        document.querySelector('body').style.color = prefs.txtColor;
    }
}

function saveColor() {
    var bgColor = document.getElementById('color').value;
    gUser.bcgColor = bgColor;
    var txtColor = document.getElementById('text-color').value;
    gUser.txtColor = txtColor;
    saveToStorage(KEY, gUser)
}