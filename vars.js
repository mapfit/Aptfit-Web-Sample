let map;
let detailMap;
let gitLogo = document.getElementById("git-link");
let styleBtn = document.getElementById("style-btn");
let listings = document.getElementById("listings");
let placesToLive = {"Chelsea" : [{location: "410 W 24th St,New York, NY 10011", price: "$2040"} ,
                    {location: "353 W 20th St, New York , NY 10011", price:"$5000"}, 
                    {location: "305 W 18th St, New York, NY", price:"$7900"}, 
                    {location: "261 W 22nd St APT 33, New York , NY 10011", price:"$5990"}]}
let lastListItem = []
let lastPoly;
let districts = [];
let districtMarkers = [];
let buildingArr = [];
let lastBuilding;
let lastMarker;
let listOpen = false;
let currentBounds;
let chelseaPoly;
let selectedDistrict =  document.getElementById('district');
let detailPage = document.getElementById('detail');
let app = document.getElementById('app');
let detailLocation = document.getElementById('detail-location');
let detailPrice = document.getElementById('detail-price');
let detailArea = document.getElementById('detail-neighborhood');
let detailBuildingArr = [];
let detailMarkerArr = [];
let detailPolyArr = [];
let listingLocation = document.getElementById('listing-location');
let appHeader = document.getElementById('app-header');

let cityHoods = [ "little italy", "east village","murray hill", "stuyvesant town", "washington heights", "central harlem", "soho", "spanish harlem", "financial district", "tribeca", "morningside heights", "hell's kitchen", "flatiron district",
"midtown west","midtown east","central park","greenwich village","battery park city", "chinatown", "lower east side","gramercy","west side", "west village","inwood", "hamilton heights", "noho", "two bridges","nolita","kips bay","upper east side","chelsea","city hall area","roosevelt island"]