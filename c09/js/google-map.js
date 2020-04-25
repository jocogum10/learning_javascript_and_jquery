function init(){
    var mapOptions = {
        center: new google.maps.LatLng(40.782710, -73.965310),
        mapTypeId: google.maps.mapTypeId,
        zoom: 13
    };
    var venueMap;
    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript(){
    var script = document.getElementById('script');
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize';
    document.body.appendChild(script);
}

window.onload = loadScript;