'use strict';


function onSavePrefs(ev) {
    ev.preventDefault();
    if (!checkValidAge()) return;
    setUserInfo();
    saveToStorage(KEY, gUser)
}


function onSaveColor(){
    saveColor();
    setColor()
}

function setPrefs(){
    setColor()
}