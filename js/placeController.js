'use strict';

let map;
const LOCATIONS = []

function initMap(lat = 29.55805, lng = 34.94821, zoom = 15) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lat, lng: lng },
        zoom: zoom
    });
    renderLocation();
    if (LOCATIONS) {
        LOCATIONS.map(function (pos) {
            placeMarker(pos.name, { lat: pos.lat, lng: pos.lng })
        })
    }
    google.maps.event.addListener(map, 'click', function (event) {
        gCurrLocation = { lat: event.latLng.lat(), lng: event.latLng.lng() }
        document.querySelector('.input-modal').hidden = false;;
    });
}

function renderLocation() {
    var locations = getLocations();
    if (!locations || locations.length === 0) {
        document.querySelector('.saved-list').innerHTML = 'No items to display'
        return
    }

    var strHtml = locations.map(function (pos) {
        return `<li class="flex column">
                    <h4 class="location-name">${pos.id} - ${pos.name} </h4>
                    <p class="location-position" data-lat="${pos.lat}" data-lng="${pos.lng}" > lat:${pos.lat}, lng:${pos.lng}</p>
                    <button class="delete-location" onclick="onDeleteLocation('${pos.id}')">X</button>
                    </li>`
    })
    document.querySelector('.saved-list').innerHTML = strHtml.join('')
}

function placeMarker(name, pos) {//---------> ADDING RED LOCATION ICON
    var marker = new google.maps.Marker({

        position: pos,
        map: map,
        label: LABELS[labelIndex++ % LABELS.length],

    });
    var infowindow = new google.maps.InfoWindow({
        content: name
    });
    infowindow.open(map, marker);
    return marker.label
}

function onCloseModal() {
    var elInput = document.querySelector('.input-modal');
    elInput.hidden = true;
    emptyTemp()
}

function enableSaveBtn() {
    var elSaveBtn = document.querySelector('.save-place-btn')
    var elInput = document.querySelector('.place-input')
    if (!elInput.value.trim()) elSaveBtn.disabled = true
    else elSaveBtn.disabled = false
}

function onSaveLocation() {
    var name = getName();
    gCurrId = placeMarker(name, gCurrLocation) + '';
    createLocation(name)
    renderLocation()
    onCloseModal()
    emptyTemp()
}

function onDeleteLocation(locationId) {
    deleteLocation(locationId)
    renderLocation()
}

function getMyPosition() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return;
    }
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
}

function showLocation(position) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: position.coords.latitude, lng: position.coords.longitude },
        zoom: 15
    });
    initMap(position.coords.latitude, position.coords.longitude)
}

function handleLocationError(error) {
    var locationError = document.getElementById("locationError");
    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message;
            break;
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location.";
            break;
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message;
            break;
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location.";
            break;
    }
}

function setPefs() {
    var prefs = getPefs()
    if (prefs) {
        if (prefs.bcgColor) document.querySelector('body').style.backgroundColor = prefs.bcgColor;
        if (prefs.txtColor) document.querySelector('body').style.color = prefs.txtColor;
    }
}
function onGetPos() {
    getMyPosition()
}

