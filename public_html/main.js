let map = null
let latLng = { lat: 52.4796992, lng: -1.9026911 }
let placeType = "tourist_attraction"
let locationsData;
$.getJSON('./locations.json', function (data) {
    locationsData = data;
});

window.onload = () => {
    new google.maps.places.Autocomplete(start)
    new google.maps.places.Autocomplete(end)
    let services_centre_location = { lat: 52.4796992, lng: -1.9026911 }
    let zoom = 15;
    let CONTENT = 0,
        LATITUDE = 1,
        LONGITUDE = 2

        let locations = [];
        locationsData.locations.map((location) => {
            locations.push([`<div id=container>
                                <img class=size src=${location.imgUrl}>
                                <div id=text>
                                    <h3>${location.title}</h3>
                                    <h6>${location.description1}</h6>
                                    <h6>${location.description2}</h6>
                                </div>
                            </div>`, location.lat, location.long]);
        });

        let shops = [];
        locationsData.shops.map((location) => {
            shops.push([`<div id=container>
                                <img class=size src=${location.imgUrl}>
                                <div id=text>
                                    <h3>${location.title}</h3>
                                    <h6>${location.description1}</h6>
                                    <h6>${location.description2}</h6>
                                </div>
                            </div>`, location.lat, location.long]);
        });

        let hotels = [];
        locationsData.hotels.map((location) => {
            hotels.push([`<div id=container>
                                <img class=size src=${location.imgUrl}>
                                <div id=text>
                                    <h3>${location.title}</h3>
                                    <h6>${location.description1}</h6>
                                    <h6>${location.description2}</h6>
                                </div>
                            </div>`, location.lat, location.long]);
        });


    map = new google.maps.Map(document.getElementById("map"), {
        zoom: zoom,
        center: new google.maps.LatLng(locations[0][LATITUDE], locations[0][LONGITUDE]),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: ["roadmap", "hide_poi", "satellite", "terrain", "silver", "night", "retro"]
        }
    })

    //locations
    let infoWindow = new google.maps.InfoWindow();
    locations.map(location => {
        let marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(location[LATITUDE], location[LONGITUDE]),
            icon: "data:image/png;base64,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",
            map: map
        });
        google.maps.event.addListener(marker, "click", () => {
            infoWindow.setContent(location[CONTENT])
            infoWindow.open(map, marker)
        });
    });

    //shops
    let infoWindow2 = new google.maps.InfoWindow();
    shops.map(shop => {
        let marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(shop[LATITUDE], shop[LONGITUDE]),
            icon: "data:image/png;base64,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",
            map: map
        });
        google.maps.event.addListener(marker, "click", () => {
            infoWindow2.setContent(shop[CONTENT])
            infoWindow2.open(map, marker)
        });
    });

    //hotels
    let infoWindow3 = new google.maps.InfoWindow();
    hotels.map(hotel => {
        let marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(hotel[LATITUDE], hotel[LONGITUDE]),
            icon: "data:image/png;base64,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",
            map: map
        });
        google.maps.event.addListener(marker, "click", () => {
            infoWindow3.setContent(hotel[CONTENT])
            infoWindow3.open(map, marker)
        });
    });

    hidePointsOfInterest(map)
    silver(map)
    night(map)
    retro(map)
    displayMap()

    map.addListener("click", (mapsMouseEvent) => {
        latLng = mapsMouseEvent.latLng.toJSON();
        displayMap();
    });
    map.addListener("dragend", () => {
        latLng = map.getCenter().toJSON();
        displayMap();
    });

    directionsRenderer = new google.maps.DirectionsRenderer()
    directionsRenderer.setMap(map)

    directionsRenderer.setPanel(document.getElementById("directions"))

    calculateRoute("DRIVING")

}

function displayType(elem, type) {
    elem.classList.add("active");

    if (type != null) {
        placeType = type;
        displayMap();
    }
}

function displayMap() {
    let service = new google.maps.places.PlacesService(map)

    service.nearbySearch({
        location: latLng, // centre of the search
        radius: 5000, // radius (in metres) of the search
        type: placeType
    }, getNearbyServicesMarkers)

    map.setZoom(map.getZoom());
    map.panTo(new google.maps.LatLng(latLng.lat, latLng.lng))
}

function displaySearchMap() {
    let search = document.getElementById("search").value;

    let service = new google.maps.places.PlacesService(map)

    service.textSearch({
        location: latLng, // centre of the search
        radius: 5000, // radius (in metres) of the search
        query: search
    }, getNearbyServicesMarkers)

    map.setZoom(map.getZoom());
    map.panTo(new google.maps.LatLng(latLng.lat, latLng.lng))
}

let markers = []
async function getNearbyServicesMarkers(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        await results.map(result => {
            createMarker(result)
        })
        markers.map(marker => {
            marker.setVisible(true)
        });
    }
}


let infoWindow = new google.maps.InfoWindow()
function createMarker(place) {
    /*If you want icon for each*/
    let icontest = {
        url: place.icon, // url
        // url
        scaledSize: new google.maps.Size(30, 30) // scale the image to an icon size
    }

    if (place.types.includes("tourist_attraction")) {
        icontest.url = "data:image/png;base64,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";
        icontest.scaledSize = new google.maps.Size(40, 40);
    } else if (place.types.includes("cafe")) {
        icontest.url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAFACAYAAADNkKWqAAALWklEQVR4nO3dXYjm113A8W+ny7IOyxLKWtJtDDGUGEIJtUqRKrWGKlVCqaX1DSlFpBa8sV6UXHhTSvEiF6WI1CJaahWVWmsJqKWGCG3VpbGhpjUvTUhMddOXvG6T7WazO+vFmWHfZib7MjP/55nn84EfszPP8+yc+T/Mb875n3N+pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgklxbLU/dCGbH0tQNgB2yVP1StXfqhjA7JEAWxU3Vj1fPTd0QZocEyKJ4f/VIdXLqhgDspJur56ufmbohADvtc9X/VAenbgjATnpr9UL1iWrPxG0B2DHL1eHqdCMRAiyEper3qlPVvdX+aZsDsHNuqr7T6P39flY8AAtif2Pi43T1f9VV0zYHYGfs6czQ91T1gWmbA7Bz3lI93ej9PZDeH7AgbqzuayS/H1TvnLY5ADvjUHVXI/mdrj41bXMAdsaB6rOdSX73Vq+ctEUAO+Bg5ya/x6ufnLRFADvg+uqLnUl+Tzdq/gHsam/pzITH6erJ6jez4BnYxa6qPtSZpS6nq2819voqdgDsSgeqX6u+0ljgvJb8DldvSM8P2GWWquuq91RfbpS1Wkt8z1cfr66ZqG3Agtvb6JmtxZWeuLavsZ7v5kbS++vq4erFziS+U9U91dtzwBFX6GVTN4CZt7+xpu7axk6LH20kqVc0EtbZSe9kdXT13yeqI9VK4yCi723yPV5dXX1WXNNIqGdbqR6sPlb9TfXdy/2BADazr3pd9eHqzsbaurPvu+1kPNu4z/feLG4GttHe6pbGwuIfNE3Ce7Exw/u16vbGQUaGumwLQ2DWXFN9sLGWbqOEs9IY2p5c/fcTjSHvSvXYec/d2xjOLq3G1Y2e5dJZ0er/dawxvL27kfjuru7PEZZsMwmQGpMOn1r9eL6V6tHqXxpD0Qcbye5Il56glhpb15Y7M3v7WPW/q98HYEdd27k7Ks6Ow40FxtbYAbvO3uozrZ/87mwMWWHXsnVosd3S+sdFnqz+uDq+hd9rqTHsfU1jcfM11Y80trbtbwyNj1ZPVc9UjzTuA369eihDZLaBBLjY3tXGi5evdOZ1X3VDozTVzza2q63d/1ubDHkpJxprCO+v/rb6u8a9R4ArdkcbL0f5fGPm9qUsNRZF39zoTd7W2MHxQGPx81atHzzV2BXyvq58xwlUZoEX3Serd2/y+EPVlxpLU77dGJoeaiSgVzWGsdc1Fii/ojGc3e41eyerf6je35g9Brgs72gUFZhiwfP58UL1/Ut4/hdTCIErpAe42PZVH6l+u+29H3yy0Xt8pjHJ8VCj9/ZIo2d5fDVONCZE9jV6lj/RuHd4XevPSP959btt7WQNsEAONAqMPt7WbWV7spHc7mjsLnlH9frGUPlS1xQebNQBvGed7/X9RoEGuCx6gNRISjdWv17d2hhaLjfu553fM1xp9OhOnBVPNHp1X2/cL3x09fNntrCNh6rPdeGBRz/f2KUCl0wC5HxLjd0h1zd6bFed9/hawntm9eORtjbRbeaWxgLtNY9WP52lMcACWGoMr083ymS9Pdv0gAWx1Fhb+MXGPUWAhbFcvTG9PgAA4LKYBZ4va8dE2gs7jeONmWeVqncJCXC+HKg+3TiwiJ13f/XLjd0s7ALKYc2XtZLyTkebxhOZgNlVvJnzZSWFQWfB2h8iHYg55w2cLycz/JrS2h+gg42ah89Vd1X/3Djc6dh0TYPdb1+bFzEV2xuHG52G6xtFH9a+/mxjn/LbMkE1VwyB58vaubxMY60QxL7OHT0daCS/zzaOF70xv1tzwZs0X9YKETCN765+PLTB40uN0l9faBRuYMZJgPPHPcDprFW92SgBrrmmcY9QEpxxEuD8eXzqBiywtTNIXioB1pgo+aOLfC4TefnUDeCSvbr61akbsaD+ovpqY/b3gcas76va+AD5H26cufKvO9E4WASva/rZ0EWN8w+R39sY7n6ojQ90urcLi8oCl+lg9YOmTwaLFk+3cQ3CpeqdjeUw673uDRu8jom5Bzh/TuQ83Ck81cYTUCvV3zeGyOc7kPuAM0sCnD/HqwenbsQC+m6bL0Faqf6pC4/oXMqOq5klAc6fE42qJOyshxqTH5s5kb3ac0UCnE9fm7oBC+hirvlNXTgjfLw6uvXNYStIgPPp7qkbsGBWeulrvqd6Vxf+Th3NsZ0zSwKcTw91ZlsW2+9Io9rLZt7ahYe215lD4plBEuB8Oll9aepGLJAHq29v8viB6g9bf0H0HV04McKMkADn00rjbFx2xn+0ca2/vdUnq9eu89iRxvIYYIvdVJ1q+gXCixAbFTVYbpTA2uh1t23wOmALPND0yWG3x33V1etc++savfCNXvf5bIGDbfXRpk8Quz0+2bm3ipaqN1Xf2OQ1DzSKogLb6E3VC02fJHZzvO2s632g+kD1vU2e/3D1U7m/DttuT2OINnWS2K3xzcYRpMuNRHhXm//BuS/JD3bUH2QyZLvio41k9qFGXb/Nnntnhr2w425slFyaOlnstnihUcbqYJtPNj1ffWT1ecAEPt30CWO3xRcaQ99bW7/+4qnGRMjbM+SFSf1CG1ckFpcepxqJrerj6zz+ner21PmDmbCnUYtu6sSxW+KeRu/vqsas7trXn26c9rbenl9gQm9NL3Ar4lT1G6vX9J2Ne4HPNhKfGV6YUXvafFuWuLg43JkKzrevxk1JfDDz3tDmi3TF5vFi9eZLvejA7Phw0yeSeY0/vYzrDcyQV1b/3vTJZN7i4dYvegDMmVuqJ5s+qcxLPN+ZZS8skJdP3QC2xbcaVaPfnPf4pZxsbHn7k5zoBrvG/sY9ral7V7Men2lUeQF2mVc2zqSYOsnMany5uvayry4w867NpMh68ZXq5iu4rsCcuL7R25k66cxK/GeSHyyUVzT2Cy9y7cBTjbp9N1zhtQTm0HL1sdYv77Tb48XqE437osACe3ejpNPUSWmn4snqfZ3Z4wssuOsbxRNebPoEtZ1xZ6OYAcA5lhpltA43faLa6vhG9Stbd6mA3Wq5kSzuar4nSU41kvl7Vn8mgIu2XL2xMVHyzaZPaBcbD1d/1jgnef+WXxV2rZdN3QBm0p7GspnXVr/YqDN4Q2MGdRYKgz5RPVjdXX2++urq105O2SjmjwTIxTjQSIiHGknxx6rrVr92oNHrOtDoQV7pvtrnqmPV0dU41khujzWOp/yv6kj1VPXMFX4vFpwEyJVYrvatflyu9q5+PNhIhFevfv5DnVtrb6WR1J6vjjcS2tHVrx2vTjQS37HVz5/b/h8FABaIHuDsek31O41eFbNrpfpU4z4kc8bK+Nl1pPH+vLcxzGT2nKj+svrvqRsCu9Hexhaux5t+qYk4N56sbksPHbbda6u/ahx8Ps8Llec9Tq2+B5+pXr/pO8ZccA9wvlxfvaX6ucY9wqsu4bWHsjtizdrM88WeAXKsMcw9XP1jYw0iMEdubfcXPriYeKH6rSu8lsCcWao+mCH07blvxypD4MWyt7Fn9papGzKRf2ssLXpq6oYwGyTAxbPc4hYMOJZdJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABb7f8Bjj2xIq5TfHQAAAAASUVORK5CYII=";
        icontest.scaledSize = new google.maps.Size(70, 70);
    } else if (place.types.includes("restaurant")) {
        icontest.url = "data:image/png;base64,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";
    }


    let marker = new google.maps.Marker({
        map: map,
        icon: icontest,
        position: place.geometry.location
    })

    markers.push(marker)

    google.maps.event.addListener(marker, "click", () => {
        infoWindow.setContent(place.name)
        infoWindow.open(map, marker)
    })
}


function hidePointsOfInterest(map) {
    let styles = [
        {
            "featureType": "poi",
            "stylers": [{ "visibility": "off" }]
        }
    ]

    let styledMapType = new google.maps.StyledMapType(styles, { name: "POI Hidden", alt: "Hide Points of Interest" })
    map.mapTypes.set("hide_poi", styledMapType)

    map.setMapTypeId("hide_poi")
}

function silver(map) {
    let styles = [
        {
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }],
        },
        {
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
        },
        {
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }],
        },
        {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#f5f5f5" }],
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [{ color: "#bdbdbd" }],
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#eeeeee" }],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#e5e5e5" }],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }],
        },
        {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#dadada" }],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }],
        },
        {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [{ color: "#e5e5e5" }],
        },
        {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [{ color: "#eeeeee" }],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#c9c9c9" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }],
        },
    ]

    let styledMapType = new google.maps.StyledMapType(styles, { name: "Silver", alt: "Show map as silver" })
    map.mapTypes.set("silver", styledMapType)

    map.setMapTypeId("silver")
}

function night(map) {
    let styles = [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
        },
        {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
        },
        {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
        },
        {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
        },
    ]

    let styledMapType = new google.maps.StyledMapType(styles, { name: "Night", alt: "Show map as night" })
    map.mapTypes.set("night", styledMapType)

    map.setMapTypeId("night")
}

function retro(map) {
    let styles = [
        { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
        {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#c9b2a6" }],
        }, {
            featureType: "administrative.land_parcel",
            elementType: "geometry.stroke",
            stylers: [{ color: "#dcd2be" }],
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ae9e90" }],
        },
        {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [{ color: "#dfd2ae" }],
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#dfd2ae" }],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#93817c" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#a5b076" }],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#447530" }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#f5f1e6" }],
        },
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#fdfcf8" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#f8c967" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#e9bc62" }],
        },
        {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [{ color: "#e98d58" }],
        },
        {
            featureType: "road.highway.controlled_access",
            elementType: "geometry.stroke",
            stylers: [{ color: "#db8555" }],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ color: "#806b63" }],
        },
        {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [{ color: "#dfd2ae" }],
        },
        {
            featureType: "transit.line",
            elementType: "labels.text.fill",
            stylers: [{ color: "#8f7d77" }],
        },
        {
            featureType: "transit.line",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ebe3cd" }],
        },
        {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [{ color: "#dfd2ae" }],
        },
        {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#b9d3c2" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#92998d" }],
        }
    ]

    let styledMapType = new google.maps.StyledMapType(styles, { name: "Retro", alt: "Show map as Retro" })
    map.mapTypes.set("retro", styledMapType)

    map.setMapTypeId("retro")
}

function generateMidPointFields() {
    let count = document.getElementById("count").value
    document.getElementById("midpointcontainer").innerHTML = "";
    for (let i = 0; i < count; i++) {
        document.getElementById("midpointcontainer").innerHTML += `<div class='form-label text-start'>Midpoint ${i + 1}:</div><input class='form-control' id='midpoint${i + 1}' type='text'>`
        setTimeout(() => {
            new google.maps.places.Autocomplete(document.getElementById(`midpoint${i + 1}`))
        }, 50);
    }
}

function calculateRoute(travelMode = "DRIVING") {
    document.getElementById("transport-mode").innerHTML = travelMode
    let start = document.getElementById("start").value
    // let midpoint = document.getElementById("midpoint").value

    let end = document.getElementById("end").value

    if (start === "" || end === "") {
        return
    }

    let request = {
        origin: start,
        destination: end,
        travelMode: travelMode
    }

    let waypoints = [];
    let count = document.getElementById("count").value
    for (let i = 0; i < count; i++) {
        let midpoint = document.getElementById(`midpoint${i + 1}`).value


        if (midpoint != "") {

            waypoints.push({
                location: midpoint,
                stopover: true,
            });
        }
    }
    request.waypoints = waypoints;
    request.optimizeWaypoints = true;

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
        draggable: true,
        map,
        panel: document.getElementById("directions"),
    });

    directionsRenderer.addListener("directions_changed", () => {
        const directions = directionsRenderer.getDirections();

        if (directions) {
            computeTotalDistance(directions);
        }
    });

    directionsService.route(request, (route, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(route)
        }
    })
}
function displayRoute(origin, destination, service, display) {
    service
        .route({
            origin: origin,
            destination: destination,
            waypoints: [
                { location: "Adelaide, SA" },
                { location: "Broken Hill, NSW" },
            ],
            travelMode: google.maps.TravelMode.DRIVING,
            avoidTolls: true,
        })
        .then((result) => {
            display.setDirections(result);
        })
        .catch((e) => {
            alert("Could not display directions due to: " + e);
        });
}
function computeTotalDistance(result) {
    let total = 0;
    const myroute = result.routes[0];

    if (!myroute) {
        return;
    }

    for (let i = 0; i < myroute.legs.length; i++) {
        total += myroute.legs[i].distance.value;
    }

    total = total / 1000;
    document.getElementById("total").innerHTML = total + " km";
}

function reset() {
    document.querySelectorAll('.radio').forEach(elem=>{
        elem.classList.remove("active");
    });

    markers.map(marker => marker.setVisible(false))
    markers = []
    
    placeType = "tourist_attraction";

    zoom = 15;
    map.setZoom(zoom);

    latLng = { lat: 52.4796992, lng: -1.9026911 };
    map.panTo(new google.maps.LatLng(latLng.lat, latLng.lng));

    displayMap();
}

function goCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            latLng = { lat: position.coords.latitude, lng: position.coords.longitude };
            map.panTo(new google.maps.LatLng(latLng.lat, latLng.lng));
            displayMap();

            new google.maps.Marker({
                position: latLng,
                map,
                title: "Your Position",
              });
        });
    } else {
        alert("Getting current location is not supported.")
    }
}

