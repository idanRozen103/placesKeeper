'use strict';

const gForecast = [`You have the opportunity to learn some valuable lessons today, but you'll have to talk with the authority figures in your life—parents, teachers, bosses, whoever it might be. When it comes to getting the training, advice, or education you need, you can't let anything stop you. Think of yourself and then do what is best for you!`,
    ` It's time to take another look at your calendar. Does it have too many holes in it? You can't always wait for others to initiate something. Sure, it's nice to always be at the top of everyone's invite list, but that isn't always possible or feasible. If you want people to think of you the next time they're organizing a gathering, you need to invite them to ones that you put together. Even if they have to be online or outside, be more proactive about creating your own fun.`,
    `Try to take a casual attitude toward any drama that pops up today. Not only will it help you persevere and get through it more quickly, but it will also keep you happier and healthier. Some people just love running around in a panic, but all that does is get them a lot of negative attention and generate a lot of stress. If you can learn how to take things in stride, you will be much better off. Be careful not to blow things out of proportion.`]

function setColor() {
    if (gPrefs.bcgColor) document.querySelector('body').style.backgroundColor = gPrefs.bcgColor;
    if (gPrefs.txtColor) document.querySelector('body').style.color = gPrefs.txtColor;
}



function setForecast() {
    document.querySelector('aside p').innerText = gForecast[getRandomIntInclusive(0, 2)]
}

function loadPrefs() {
    gPrefs = loadFromStorage('userData')
}