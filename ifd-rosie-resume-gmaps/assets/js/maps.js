function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: {
            lat: 51.750193,
            lng: -0.313919
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        {
            lat: 51.750193,
            lng: -0.313919
        }, //home
        {
            lat: 51.751440,
            lng: -0.312594
        }, //morrisons
        {
            lat: 51.752606,
            lng: -0.316641
        }, //mosque
        {
            lat: 51.751855,
            lng: -0.321807
        }, //chicken shop
        {
            lat: 51.770489,
            lng: -0.346667
        }, //adnans parents
        {
            lat: 51.791297,
            lng: -0.191359
        }, //adnans flat
        {
            lat: 51.897292,
            lng: -0.414414
        }, //irams parents
        {
            lat: 51.886000,
            lng: -0.429288
        }, //bury park
        {
            lat: 51.890724,
            lng: -0.444969
        } //krispy lemon chicken
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
