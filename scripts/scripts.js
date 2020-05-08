$(function () {
    // Pause and play Carousel Button
    $(".carousel").carousel({ interval: 3000 });

    $('.collapse').collapse('hide');

    // Adding jQuery for the search
    $("#searchIcon").click(function () {
        $("#searchModal").modal("show");
    });

    // Get the current year for the copyright
    $('#year').text(new Date().getFullYear());
    
});

// Brands Slider



// Google Map - Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = { lat: 18.535299, lng: -72.341660 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 4, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}