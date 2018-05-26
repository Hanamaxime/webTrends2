"use strict";
var map;
var addresses;
var mapMarkers = [];
var MapMarker = /** @class */ (function () {
    function MapMarker(address) {
        this.Address = address;
    }
    ;
    return MapMarker;
}());
var Toronto = { lat: 43, lng: -79.38 };
$.ajax({
    url: './AClocations.json',
    dataType: 'json',
    success: function (data) {
        addresses = data;
        for (var _i = 0, addresses_1 = addresses; _i < addresses_1.length; _i++) {
            var i = addresses_1[_i];
            var newMapMarker = new MapMarker(i.address);
            mapMarkers.push(newMapMarker);
        }
    }
});
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: Toronto,
        zoom: 8
    });
}
