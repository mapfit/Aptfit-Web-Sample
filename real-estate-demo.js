document.addEventListener("DOMContentLoaded", function(){
    mapfit.apikey = "591dccc4e499ca0001a4c6a423229dd9f27f4b999d8353e974feb679"
    map = mapfit.MapView('mapfit', {theme: 'grayscale'});
    map.setRecenterButtonEnabled(true);
    map.setCenter([40.714997, -73.985367], 0)
    map.setZoom(13);
    let neighborhoods = []
    let filteredNeighborhoods = []
    data.features.forEach(function(element){
       neighborhoods.push(element.geometry.coordinates[0])
    })
    neighborhoods.forEach(function(element){
        let newArr = [];
        element.forEach(function(element){
            let arr = []
            arr.push(element[1],element[0])
            newArr.push(arr);
        })
        filteredNeighborhoods.push(newArr);
    })
    console.log(neighborhoods);
    filteredNeighborhoods.forEach(function(element){
        let poly = mapfit.Polygon(element);
        poly.on('click',function(){
            this.setStyle({color:"black", fillColor:"rgba(74, 74, 74, 0.15)"})
        })
        map.addPolygon(poly);
    })

    let marker = mapfit.Marker();
    marker.address = "312 W 23rd st, New York, NY 10011"
    map.addMarker(marker);
})