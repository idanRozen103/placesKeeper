'use strict';

const KEY = 'locations';

var gCurrLocation = null;
var gCurrId = null;
const LABELS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let labelIndex = 0;


function getPefs() {
    let prefs = loadFromStorage('userData')
    return prefs

}

function getLocations() {
    var locations = loadFromStorage(KEY)
    return locations;
}

function getName() {
    return document.querySelector('.input-modal input').value
}

function createLocation(name) {
    var location = {
        id: gCurrId,
        name: name,
        lat: gCurrLocation.lat,
        lng: gCurrLocation.lng
    }
    LOCATIONS.push(location);
    saveToStorage(KEY, LOCATIONS)
    return location
}

function deleteLocation(locationId) {
    var locationIdx = findIdxById(locationId, LOCATIONS);
    LOCATIONS.splice(locationIdx, 1)
    saveToStorage(KEY, LOCATIONS)
}

function emptyTemp() {
    gCurrLocation = null;
    gCurrId = null
    document.querySelector('.place-input').value = null
}

