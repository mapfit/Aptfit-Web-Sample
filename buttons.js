styleBtn.addEventListener("click", function(){

        if(document.getElementById("style-type").innerHTML == "List View") { 
            document.getElementById('view-type').classList.remove("d-lg-none");
            document.getElementById('view-type').classList.remove("d-md-none");
            document.getElementById('view-type').classList.remove("d-sm-none");
            document.getElementById('view-type').classList.remove("d-xs-none");
            document.getElementById('view-type').classList.add("col-lg-6");
            document.getElementById('view-type').classList.add("col-md-6");
            document.getElementById('view-type').classList.add("col-sm-12");
            document.getElementById('view-type').classList.add("col-xs-12");
            document.getElementById('mapfit').classList.remove("col-lg-12");
            document.getElementById('mapfit').classList.remove("col-md-12");
            document.getElementById('mapfit').classList.remove("col-sm-12");
            document.getElementById('mapfit').classList.remove("col-xs-12");
            document.getElementById('mapfit').classList.add("col-lg-6")
            document.getElementById('mapfit').classList.add("col-md-6")
            document.getElementById('mapfit').classList.add("d-none")
            document.getElementById('mapfit').classList.add("d-md-flex")
            document.getElementById("style-type").innerHTML = "Map View" 
            map.invalidateSize();
            map.setCenter([40.714997, -73.985367], 0)
            map.setLatLngBounds(currentBounds,80,80);
        }else{ 
            document.getElementById('view-type').classList.add("d-lg-none");
            document.getElementById('view-type').classList.add("d-md-none");
            document.getElementById('view-type').classList.add("d-sm-none");
            document.getElementById('view-type').classList.add("d-xs-none");
            document.getElementById('view-type').classList.remove("col-lg-6");
            document.getElementById('view-type').classList.remove("col-md-6");
            document.getElementById('view-type').classList.remove("col-sm-12");
            document.getElementById('view-type').classList.remove("col-xs-12");
            document.getElementById('mapfit').classList.add("col-lg-12");
            document.getElementById('mapfit').classList.add("col-md-12");
            document.getElementById('mapfit').classList.add("col-sm-12");
            document.getElementById('mapfit').classList.add("col-xs-12");
            document.getElementById('mapfit').classList.remove("col-lg-6")
            document.getElementById('mapfit').classList.remove("d-md-flex")
            document.getElementById('mapfit').classList.remove("col-md-6")
            document.getElementById('mapfit').classList.remove("d-none")
            document.getElementById("style-type").innerHTML = "List View"
            listOpen = false;
            map.invalidateSize();
        };

        if(document.getElementById("style-img").src.includes("pngs/listBtn.png")){ 
            document.getElementById("style-img").src = "./images/pngs/mapviewBtn.png" 
        }else{ 
            document.getElementById("style-img").src = "./images/pngs/listBtn.png"
        };


})

gitLogo.addEventListener("mouseover", function(){
    this.src = "./images/pngs/git-logo-hover.png"
})
gitLogo.addEventListener("mouseout", function(){
    this.src = "./images/pngs/git-logo.png"
})

// appHeader.addEventListener("click",function(){
//     detailPage.style.display = "none"
//     app.style.display = "flex"
//     listingLocation.innerHTML = ""
// })

backBtn.addEventListener("click",function(){
    detailPage.style.display = "none"
    app.style.display = "flex"
    listingLocation.innerHTML = ""
    document.getElementById("second-bar").style.display = "block";
    map.invalidateSize();
})