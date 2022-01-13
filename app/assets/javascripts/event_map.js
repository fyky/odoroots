function initMap() {

    var latitude = document.getElementById('latitude').value
    var longitude = document.getElementById('longitude').value
    var full_address = document.getElementById('full_address').value

    var test = new google.maps.LatLng(latitude, longitude)
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: test
    });
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);

    var contentString = "住所："+full_address;
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: test,
        map: map,
        title: contentString
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}