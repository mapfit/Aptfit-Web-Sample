let map;
let detailMap;
let gitLogo = document.getElementById("git-link");
let styleBtn = document.getElementById("style-btn");
let listings = document.getElementById("listings");
let placesToLive = {"Chelsea" : [{location: "410 W 24th St,New York, NY 10011", price: "$2040"} ,
                    {location: "353 W 20th St, New York , NY 10011", price:"$5000"}, 
                    {location: "305 W 18th St, New York, NY", price:"$7900"}, 
                    {location: "261 W 22nd St APT 33, New York , NY 10011", price:"$5990"}],
                    "East Village" : [{location: "222A E 11th St New York, NY 10003", price: "$2,400"} ,
                    {location: "309 E 5th St, New York, NY 10003", price:"$3,200"}, 
                    {location: "709 E 6th St New York, NY 10009", price:"$7900"}],
                    "Tribeca" : [{location: "60 Vestry St, New York, NY 10013", price: "$2,400"} ,
                    {location: "110 Chambers St New York, NY 10007", price:"$3,200"}, 
                    {location: "65 Worth St, New York, NY 10013", price:"$5,300"}],
                    "Chinatown" : [{location: "25 Allen St, New York, NY 10002", price: "$3,200"} ,
                    {location: "110 Centre St, New York, NY 10013", price:"$2,400"}],
                    "Murray Hill" : [{location: "248 E 35th St, New York, NY 10016", price: "$3,200"} ,
                    {location: "139 E 36th St New York, NY 10016", price:"$3,200"}, 
                    {location: "593 3rd Ave, New York, NY 10016", price:"$2,400"}],
                    "Stuyvesant Town" : [{location: "510 E 20th St New York, NY 10009", price: "$2,400"} ,
                    {location: "451 E 14th St, New York, NY 10009", price:"$3,200"}, 
                    {location: "285 Avenue C Loop New York, NY 10009", price:"$5,300"}],
                    "Washington Heights" : [{location: "720 W 173rd St New York, NY 10032" , price: "$2,400"} ,
                    {location: "521 W 157th St New York, NY 10032", price:"$3,200"}, 
                    {location: "643 W 172nd St New York, NY 10032", price:"$2,400"},
                    {location: "120 Cabrini Blvd New York, NY 10033", price:"$2,300"},
                    {location: "615 W 184th St New York, NY 10033", price:"$2,300"}],
                    "Central Harlem" : [{location: "2538 Adam Clayton Powell Jr Blvd New York, NY 10039", price: "$2,400"} ,
                    {location: "300 W 135th St New York, NY 10027", price:"$3,200"}, 
                    {location: "8 Mt Morris Park W New York, NY 10027", price:"$5,300"}],
                    "SoHo" : [{location: "34 Macdougal St New York, NY 10012", price: "$2,400"} ,
                    {location: "55 Vandam St, New York, NY 10013", price:"$3,200"}, 
                    {location: "463 Broome St New York, NY 10013", price:"$5,300"}],
                    "Spanish Harlem" : [{location: "102 E 125th St New York, NY 10035", price: "$3,200"} ,
                    {location:  "315 103rd St New York, NY 10029", price:"$3,200"}, 
                    {location: "168 E 104th St New York, NY 10029", price:"$2,300"},
                    {location: "351 E 119th St, New York, NY 10035", price:"$2,800"}],
                    "Morningside Heights" : [{location: "3133 Broadway New York, NY 10027", price: "$2,400"} ,
                    {location:  "536 W 113th St New York, NY 10025", price:"$3,200"}, 
                    {location: "380 Riverside Dr New York, NY 10025", price:"$5,300"}],
                    "Hell's Kitchen" : [{location: "519 W 36th St New York, NY 10018", price: "$2,400"} ,
                    {location:  "365 W 36th St, New York, NY 10018", price:"$3,200"}, 
                    {location: "353 W 39th St, New York, NY 10018", price:"$5,300"}],
                    "Flatiron District" : [{location: "44 W 24th St, New York, NY 10010", price: "$2,400"} ,
                    {location:  "21 E 22nd St New York, NY 10010", price:"$3,200"}, 
                    {location: "48 W 21st St, New York, NY 10010", price:"$5,300"}],
                    "Midtown West" : [{location: "532 W 43rd St New York, NY 10036", price: "$2,400"} ,
                    {location:  "428 W 44th St, New York, NY 10036", price:"$3,200"}, 
                    {location: "353 W 48th St, New York, NY 10036", price:"$5,300"},
                    {location:  "1023 6th Ave, New York, NY 10018", price:"$4,200"}, 
                    {location: "145 W 46th St New York, NY 10036", price:"$4,500"},
                    {location:"145 W 46th St New York, NY 10036", price:"$4,100"}],
                    "Midtown East" : [{location: "253 E 50th St, New York, NY 10022", price: "$2,400"} ,
                    {location:  "120 E 47th St New York, NY 10017", price:"$3,200"}, 
                    {location: "111 E 56th St, New York, NY 10022", price:"$5,300"}],
                    "Lower East Side" : [{location:"74-100 Ridge St New York, NY 10002", price: "$2,400"} ,
                    {location:  "67-1 Norfolk St New York, NY 10002", price:"$3,200"}, 
                    {location: "350 Grand St New York, NY 10002", price:"$5,300"},
                    {location:  "219-229 Clinton St New York, NY 10002", price:"$5,300"}],
                    "Gramercy" : [{location: "179 3rd Ave, New York, NY 10003", price: "$2,400"} ,
                    {location:  "152 E 21st St, New York, NY 10010", price:"$3,200"}],
                    "West Side" : [{location: "215 W 106th St New York, NY 10025", price: "$2,400"} ,
                    {location:  "328 W 86th St New York, NY 10024", price:"$3,200"}, 
                    {location: "835 Columbus Ave New York, NY 10025", price:"$5,300"},
                    {location: "59 W 88th St New York, NY 10024", price: "$4,200"} ,
                    {location:  "261 W 70th St New York, NY 10023", price:"$4,500"}, 
                    {location: "216 W 62nd St New York, NY 10023", price:"$4,100"},
                    {location:"433 W 66th St New York, NY 10069", price:"$3,600"}],
                    "Upper East Side" : [{location: "179 E 94th St New York, NY 10128", price: "$2,400"} ,
                    {location:  "47 E 90th St New York, NY 10128", price:"$3,200"}, 
                    {location: "121 E 81st St New York, NY 10028", price:"$5,300"},
                    {location: "307 E 87th St New York, NY 10128", price: "$4,200"} ,
                    {location:  "9 E 77th St, New York, NY 10075", price:"$4,500"}, 
                    {location: "405 E 72nd St New York, NY 10021", price:"$4,100"},
                    {location:"167 E 64th St New York, NY 10065", price:"$3,600"}],
                    "City Hall Area" : [{location: "49 Chambers St New York, NY 10007", price: "$2,400"} ,
                    {location:  "141 Worth St, New York, NY 10013", price:"$3,200"}],
                    "Roosevelt Island": [{location:"625 Main St, New York, NY 10044", price: "$2,400"} ,
                    {location:  "501 Main St, New York, NY 10044", price:"$3,200"}, 
                    {location: "30 River Rd, New York, NY 10044", price:"$5,300"}],
                    "Kips Bay": [{location:"229 E 29th St New York, NY 10016", price: "$2,400"} ,
                    {location:  "238 E 24th St, New York, NY 10010", price:"$3,200"}, 
                    {location:"522 1st Avenue New York, NY 10016", price:"$5,300"}],
                    "Nolita": [{location:"31 Prince St New York, NY 10012", price: "$2,400"} ,
                    {location:  "85 Kenmare St, New York, NY 10012", price:"$3,200"}, 
                    {location: "6 Spring St, New York, NY 10012", price:"$5,300"}],
                    "Two Bridges": [{location:"34 Monroe St, New York, NY 10002", price: "$2,400"} ,
                    {location:  "51 Monroe St, New York, NY 10002", price:"$3,200"}, 
                    {location: "89 Catherine St, New York, NY 10038", price:"$5,300"}],
                    "NoHo": [{location:"430 Lafayette St, New York, NY 10003", price: "$2,400"} ,
                    {location:  "9 Great Jones St, New York, NY 10003", price:"$3,200"}, 
                    {location: "7 Bleecker St, New York, NY 10012", price:"$5,300"}],
                    "Hamilton Heights": [{location:"610 W 145th St, New York, NY 10031", price: "$2,400"} ,
                    {location:  "501 W 138th St, New York, NY 10031", price:"$3,200"}, 
                    {location: "618 W 143rd St, New York, NY 10031", price:"$5,300"}],
                    "Inwood": [{location:"639 W 204th St, New York, NY 10034", price: "$2,400"} ,
                    {location:  "112 Sherman Ave, New York, NY 10034", price:"$3,200"}, 
                    {location: "585 W 214th St, New York, NY 10034", price:"$5,300"}],
                    "West Village": [{location:"173 Christopher St New York, NY 10014", price: "$2,400"} ,
                    {location:"55 Bethune St New York, NY 10014", price:"$3,200"}, 
                    {location: "220 W 13th St New York, NY 10011", price:"$5,300"}],
                    "Financial District" : [{location: "65 Broadway, New York, NY 10006", price: "$2,400"} ,
                    {location: "124 Fulton St, New York, NY 10038", price:"$3,200"}, 
                    {location: "48 Wall St New York, NY 10005", price:"$5,300"}, 
                    {location: "16 Beaver St New York, NY 10004", price:"$5300"}],
                    "Battery City Park" : [{location: "98 Battery Pl New York, NY 10280", price: "$2,400"} ,
                    {location: "380 Rector Pl New York, NY 10280", price:"$3,200"}, 
                    {location: "211 North End Ave New York, NY 10282", price:"$5,300"}],
                    "Little Italy" : [{location: "199 Hester St, New York, NY 10013", price: "$2,400"} ,
                    {location: "197 Grand St, New York, NY 10013", price:"$3,200"}, 
                    {location: "225 Canal St New York, NY 10013", price:"$3,200"}],
                    "Greenwich Village" : [{location: "23 E 9th St, New York, NY 10003", price: "$2,400"} ,
                    {location: "566 LaGuardia Pl New York, NY 10012", price:"$3,200"}]
                }
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
let detailMapLoaded = false;
let backBtn = document.getElementById('back-btn')

let cityHoods = [ "little italy", "east village","murray hill", "stuyvesant town", "washington heights", "central harlem", "soho", "spanish harlem", "financial district", "tribeca", "morningside heights", "hell's kitchen", "flatiron district",
"midtown west","midtown east","central park","greenwich village","battery park city", "chinatown", "lower east side","gramercy","west side", "west village","inwood", "hamilton heights", "noho", "two bridges","nolita","kips bay","upper east side","chelsea","city hall area","roosevelt island"]