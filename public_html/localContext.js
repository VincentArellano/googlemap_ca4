let map = null
            function displayMap()
            {
                const hotelLocation = {lat: 52.51386265, lng: -1.9759166633141625}
                displayLocalContextMap(hotelLocation, 3000)
                hidePointsOfInterest(map)
                silver(map)
                night(map)
                retro(map)
            }
            
            function hidePointsOfInterest(map) {
                let styles = [
                    {
                        "featureType": "poi",
                        "stylers": [{"visibility": "off"}]
                    }
                ]

                let styledMapType = new google.maps.StyledMapType(styles, {name: "POI Hidden", alt: "Hide Points of Interest"})
                map.mapTypes.set("hide_poi", styledMapType)

                map.setMapTypeId("hide_poi")
            }

            function silver(map) {
                let styles = [
                    {
                        elementType: "geometry",
                        stylers: [{color: "#f5f5f5"}],
                    },
                    {
                        elementType: "labels.icon",
                        stylers: [{visibility: "off"}],
                    },
                    {
                        elementType: "labels.text.fill",
                        stylers: [{color: "#616161"}],
                    },
                    {
                        elementType: "labels.text.stroke",
                        stylers: [{color: "#f5f5f5"}],
                    },
                    {
                        featureType: "administrative.land_parcel",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#bdbdbd"}],
                    },
                    {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{color: "#eeeeee"}],
                    },
                    {
                        featureType: "poi",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#757575"}],
                    },
                    {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{color: "#e5e5e5"}],
                    },
                    {
                        featureType: "poi.park",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#9e9e9e"}],
                    },
                    {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [{color: "#ffffff"}],
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#757575"}],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry",
                        stylers: [{color: "#dadada"}],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#616161"}],
                    },
                    {
                        featureType: "road.local",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#9e9e9e"}],
                    },
                    {
                        featureType: "transit.line",
                        elementType: "geometry",
                        stylers: [{color: "#e5e5e5"}],
                    },
                    {
                        featureType: "transit.station",
                        elementType: "geometry",
                        stylers: [{color: "#eeeeee"}],
                    },
                    {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{color: "#c9c9c9"}],
                    },
                    {
                        featureType: "water",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#9e9e9e"}],
                    },
                ]

                let styledMapType = new google.maps.StyledMapType(styles, {name: "Silver", alt: "Show map as silver"})
                map.mapTypes.set("silver", styledMapType)

                map.setMapTypeId("silver")
            }

            function night(map) {
                let styles = [
                    {elementType: "geometry", stylers: [{color: "#242f3e"}]},
                    {elementType: "labels.text.stroke", stylers: [{color: "#242f3e"}]},
                    {elementType: "labels.text.fill", stylers: [{color: "#746855"}]},
                    {
                        featureType: "administrative.locality",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#d59563"}],
                    },
                    {
                        featureType: "poi",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#d59563"}],
                    },
                    {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{color: "#263c3f"}],
                    },
                    {
                        featureType: "poi.park",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#6b9a76"}],
                    },
                    {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [{color: "#38414e"}],
                    },
                    {
                        featureType: "road",
                        elementType: "geometry.stroke",
                        stylers: [{color: "#212a37"}],
                    },
                    {
                        featureType: "road",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#9ca5b3"}],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry",
                        stylers: [{color: "#746855"}],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{color: "#1f2835"}],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#f3d19c"}],
                    },
                    {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{color: "#2f3948"}],
                    },
                    {
                        featureType: "transit.station",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#d59563"}],
                    },
                    {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{color: "#17263c"}],
                    },
                    {
                        featureType: "water",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#515c6d"}],
                    },
                    {
                        featureType: "water",
                        elementType: "labels.text.stroke",
                        stylers: [{color: "#17263c"}],
                    },
                ]

                let styledMapType = new google.maps.StyledMapType(styles, {name: "Night", alt: "Show map as night"})
                map.mapTypes.set("night", styledMapType)

                map.setMapTypeId("night")
            }

            function retro(map) {
                let styles = [
                    {elementType: "geometry", stylers: [{color: "#ebe3cd"}]},
                    {elementType: "labels.text.fill", stylers: [{color: "#523735"}]},
                    {elementType: "labels.text.stroke", stylers: [{color: "#f5f1e6"}]},
                    {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{color: "#c9b2a6"}],
                    }, {
                        featureType: "administrative.land_parcel",
                        elementType: "geometry.stroke",
                        stylers: [{color: "#dcd2be"}],
                    },
                    {
                        featureType: "administrative.land_parcel",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#ae9e90"}],
                    },
                    {
                        featureType: "landscape.natural",
                        elementType: "geometry",
                        stylers: [{color: "#dfd2ae"}],
                    },
                    {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{color: "#dfd2ae"}],
                    },
                    {
                        featureType: "poi",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#93817c"}],
                    },
                    {
                        featureType: "poi.park",
                        elementType: "geometry.fill",
                        stylers: [{color: "#a5b076"}],
                    },
                    {
                        featureType: "poi.park",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#447530"}],
                    },
                    {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [{color: "#f5f1e6"}],
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{color: "#fdfcf8"}],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry",
                        stylers: [{color: "#f8c967"}],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{color: "#e9bc62"}],
                    },
                    {
                        featureType: "road.highway.controlled_access",
                        elementType: "geometry",
                        stylers: [{color: "#e98d58"}],
                    },
                    {
                        featureType: "road.highway.controlled_access",
                        elementType: "geometry.stroke",
                        stylers: [{color: "#db8555"}],
                    },
                    {
                        featureType: "road.local",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#806b63"}],
                    },
                    {
                        featureType: "transit.line",
                        elementType: "geometry",
                        stylers: [{color: "#dfd2ae"}],
                    },
                    {
                        featureType: "transit.line",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#8f7d77"}],
                    },
                    {
                        featureType: "transit.line",
                        elementType: "labels.text.stroke",
                        stylers: [{color: "#ebe3cd"}],
                    },
                    {
                        featureType: "transit.station",
                        elementType: "geometry",
                        stylers: [{color: "#dfd2ae"}],
                    },
                    {
                        featureType: "water",
                        elementType: "geometry.fill",
                        stylers: [{color: "#b9d3c2"}],
                    },
                    {
                        featureType: "water",
                        elementType: "labels.text.fill",
                        stylers: [{color: "#92998d"}],
                    }
                ]

                let styledMapType = new google.maps.StyledMapType(styles, {name: "Retro", alt: "Show map as Retro"})
                map.mapTypes.set("retro", styledMapType)

                map.setMapTypeId("retro")
            }
            
    
            function displayLocalContextMap(hotelLocation, metres)
            {
                const METRES_TO_DEGREES = 0.00000909091
                const degrees = metres * METRES_TO_DEGREES
                
                const bounds = {
                    north: hotelLocation.lat + degrees,
                    south: hotelLocation.lat - degrees,
                    west: hotelLocation.lng - degrees,
                    east: hotelLocation.lng + degrees                                        
                }

                const localContextMapView = new google.maps.localContext.LocalContextMapView({
                    element: document.getElementById("map"),
                    placeTypePreferences: [
                        {type: "cafe", weight:4}, 
                        {type: "tourist_attraction", weight:5},
                        {type: "airport", weight:1},
                        {type: "park", weight:2},
                        {type: "bank", weight:3},
                        {type: "store", weight:4},
                        {type: "church", weight:2},
                        {type: "hospital", weight:2}
                        
                    ],
                    maxPlaceCount: 24,
                    locationRestriction: bounds,
                    directionsOptions: {origin: hotelLocation}, // Walking route starts at hotelLocation
                })

                let localContextMap = localContextMapView.map

                localContextMap.setOptions({
                    center: hotelLocation,
                    zoom: 12,
                    mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                        mapTypeIds: ["roadmap", "hide_poi", "satellite", "terrain", "silver", "night", "retro"]
                    }
                })

                // add a hotel marker at the location of hotelLocation
                new google.maps.Marker({
                    position: hotelLocation,
                    map: localContextMap,
                    icon: "data:image/png;base64,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",
                    zIndex: 30,
                    title:"Your Hotel"
                })
                
                hidePointsOfInterest(localContextMap)
                silver(localContextMap)
                night(localContextMap)
                retro(localContextMap)
                
            }