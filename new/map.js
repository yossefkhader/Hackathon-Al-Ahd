// Initialize map
function initMap() {
    map = L.map('map').setView([35.2354, 31.7781], 4); // Centered on Middle East
    
    // Add base tile layer (map background)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Hide loading overlay
    loadingOverlay.style.display = 'none';
    
    // Update map for current year
    updateForYear(currentYear);
    
    // Setup map style switcher
    setupMapStyleSwitcher();
}

// Update map style based on time period
function updateMapStyle(year) {
    const mapElement = document.getElementById('map');
    
    if (year < 1500) {
        // Ancient/Medieval period style
        mapElement.classList.add('ancient-style');
        mapElement.classList.remove('modern-style', 'contemporary-style');
    } else if (year < 1900) {
        // Early modern style
        mapElement.classList.add('modern-style');
        mapElement.classList.remove('ancient-style', 'contemporary-style');
    } else {
        // Contemporary style
        mapElement.classList.add('contemporary-style');
        mapElement.classList.remove('ancient-style', 'modern-style');
    }
}

// Set up map style switcher
function setupMapStyleSwitcher() {
    mapStyleSelect.addEventListener('change', function() {
        map.eachLayer(function(layer) {
            if (layer instanceof L.TileLayer) {
                map.removeLayer(layer);
            }
        });
        
        let tileLayer;
        switch(mapStyleSelect.value) {
            case 'satellite':
                tileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                });
                break;
            case 'terrain':
                tileLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
                    attribution: 'Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap (CC-BY-SA)'
                });
                break;
            default: // standard
                tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                });
        }
        
        tileLayer.addTo(map);
        
        // Re-apply time period styling
        updateMapStyle(currentYear);
    });
}

// Update map markers for events
function updateMapMarkers(year) {
    // Clear existing markers
    clearMapMarkers();
    
    // Find closest year with data
    const data = historicalData[year];
    
    if (data && data.events) {
        data.events.forEach(event => {
            // Skip events from other regions if a region is selected
            if (event.region && event.region !== currentRegion) {
                return;
            }
            
            // Create custom icon based on importance
            const iconSize = event.importance === 'major' ? [30, 30] : [20, 20];
            const icon = L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color: #e74c3c; width: ${iconSize[0]}px; height: ${iconSize[1]}px; border-radius: 50%; border: 2px solid white;"></div>`,
                iconSize: iconSize
            });
            
            // Create marker
            const marker = L.marker(event.location, {icon: icon}).addTo(map);
            
            // Add popup
            marker.bindPopup(`
                <div class="marker-popup">
                    <h3>${event.title} (${event.year})</h3>
                    <p>${event.description}</p>
                </div>
            `);
            
            // Store marker for later removal
            markers.push(marker);
        });
    }
}

// Clear all markers from the map
function clearMapMarkers() {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
}

// Update historical boundaries based on year
function updateHistoricalBoundaries(year) {
    // Remove previous boundary layer if it exists
    if (boundaryLayer) {
        map.removeLayer(boundaryLayer);
    }
    
    let boundaryFeatures = [];
    
    // In a real application, you would load appropriate GeoJSON files based on the year
    // For this example, we'll use simplified polygon data
    
    if (year >= 1300 && year < 1520) {
        // Ottoman early period
        boundaryFeatures.push({
            type: "Feature",
            properties: { name: "Ottoman Empire", empire: "Ottoman Empire" },
            geometry: {
                type: "Polygon",
                coordinates: [historicalBoundaries["ottoman-1500"].map(coord => [coord[1], coord[0]])]
            }
        });
        
        // Mamluk Sultanate
        boundaryFeatures.push({
            type: "Feature",
            properties: { name: "Mamluk Sultanate", empire: "Mamluk Sultanate" },
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [31.2357, 30.0444], // Cairo
                    [35.2137, 31.7683], // Jerusalem
                    [35.5018, 33.8938], // Beirut
                    [36.7520, 34.7324], // Homs
                    [38.9968, 35.2356], // Eastern border
                    [34.0000, 28.0000], // Sinai
                    [31.2357, 30.0444]  // Cairo (close polygon)
                ]]
            }
        });
    } else if (year >= 1520 && year < 1700) {
        // Ottoman height
        boundaryFeatures.push({
            type: "Feature",
            properties: { name: "Ottoman Empire", empire: "Ottoman Empire" },
            geometry: {
                type: "Polygon",
                coordinates: [historicalBoundaries["ottoman-1683"].map(coord => [coord[1], coord[0]])]
            }
        });
        
        // Safavid Empire
        boundaryFeatures.push({
            type: "Feature",
            properties: { name: "Safavid Empire", empire: "Safavid Empire" },
            geometry: {
                type: "Polygon",
                coordinates: [historicalBoundaries["safavid-1600"].map(coord => [coord[1], coord[0]])]
            }
        });
    } else if (year >= 1700 && year < 1920) {
        // Ottoman later period
        boundaryFeatures.push({
            type: "Feature",
            properties: { name: "Ottoman Empire", empire: "Ottoman Empire" },
            geometry: {
                type: "Polygon",
                coordinates: [historicalBoundaries["ottoman-1900"].map(coord => [coord[1], coord[0]])]
            }
        });
    } else if (year >= 1920 && year < 1950) {
        // British and French Mandates
        boundaryFeatures.push({
            type: "Feature",
            properties: { name: "British Mandate of Palestine", empire: "British/French Mandate" },
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [34.2654, 31.2165], // Gaza
                    [35.2137, 31.7683], // Jerusalem
                    [35.5018, 33.8938], // Beirut
                    [34.9746, 29.5267], // Aqaba
                    [34.2654, 31.2165]  // Gaza (close polygon)
                ]]
            }
        });
        
        boundaryFeatures.push({
            type: "Feature",
            properties: { name: "French Mandate of Syria", empire: "British/French Mandate" },
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [35.5018, 33.8938], // Beirut
                    [36.2765, 33.5138], // Damascus
                    [37.9550, 36.1901], // Northern border
                    [38.7864, 35.1939], // Eastern border
                    [36.1151, 34.4346], // Western border
                    [35.5018, 33.8938]  // Beirut (close polygon)
                ]]
            }
        });
        
        boundaryFeatures.push({
            type: "Feature",
            properties: { name: "British Mandate of Iraq", empire: "British/French Mandate" },
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [38.7864, 35.1939], // Northern border
                    [44.3661, 33.3152], // Baghdad
                    [47.8153, 30.4936], // Basra
                    [44.0000, 29.0000], // Southwest border
                    [38.7864, 35.1939]  // Northern border (close polygon)
                ]]
            }
        });
    } else if (year >= 1950) {
        // Modern states simplified
        boundaryFeatures.push({
            type: "Feature",
            properties: { name: "Turkey", empire: "Modern States" },
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [28.9784, 41.0082], // Istanbul
                    [32.8597, 39.9334], // Ankara
                    [37.0000, 38.0000], // Southeast
                    [43.0000, 39.0000], // East
                    [41.0000, 41.5000], // Northeast
                    [27.0000, 40.5000], // West
                    [28.9784, 41.0082]  // Istanbul (close polygon)
                ]]
            }
        });
        
        boundaryFeatures.push({
            type: "Feature",
            properties: { name: "Egypt", empire: "Modern States" },
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [31.2357, 30.0444], // Cairo
                    [32.8598, 24.0889], // Aswan
                    [25.0000, 22.0000], // Southwest
                    [25.0000, 31.5000], // Northwest
                    [34.0000, 31.0000], // Northeast
                    [34.0000, 24.0000], // Southeast
                    [31.2357, 30.0444]  // Cairo (close polygon)
                ]]
            }
        });
        
        // Add more modern states as needed
    }
    
    // Create GeoJSON feature collection
    const geoJsonData = {
        type: "FeatureCollection",
        features: boundaryFeatures
    };
    
    // Add the boundary layer to the map
    boundaryLayer = L.geoJSON(geoJsonData, {
        style: function(feature) {
            return {
                fillColor: empireColors[feature.properties.empire] || '#3388ff',
                weight: 2,
                opacity: 0.7,
                color: '#555',
                dashArray: '3',
                fillOpacity: 0.7
            };
        },
        onEachFeature: function(feature, layer) {
            layer.bindPopup(`<b>${feature.properties.name}</b>`);
        }
    }).addTo(map);
}

// Show trade routes based on year
function showTradeRoutes(year) {
    // Remove previous trade routes layer if it exists
    if (tradeRoutesLayer) {
        map.removeLayer(tradeRoutesLayer);
    }
    
    const tradeRoutes = [];
    
    // Define which trade routes to show based on the year
    if (year >= 1200 && year < 1450) {
        // Silk Road and Spice Routes active
        tradeRoutes.push({
            name: "Silk Road",
            path: tradeRoutesData.silk_road,
            color: "#9b59b6",
            active: true
        });
        tradeRoutes.push({
            name: "Spice Route",
            path: tradeRoutesData.spice_route,
            color: "#e67e22",
            active: true
        });
        tradeRoutes.push({
            name: "Mediterranean Trade",
            path: tradeRoutesData.mediterranean_route,
            color: "#3498db",
            active: true
        });
    } else if (year >= 1450 && year < 1650) {
        // Traditional routes still active but beginning to be challenged by maritime routes
        tradeRoutes.push({
            name: "Silk Road",
            path: tradeRoutesData.silk_road,
            color: "#9b59b6",
            active: true
        });
        tradeRoutes.push({
            name: "Spice Route",
            path: tradeRoutesData.spice_route,
            color: "#e67e22",
            active: true
        });
        tradeRoutes.push({
            name: "Mediterranean Trade",
            path: tradeRoutesData.mediterranean_route,
            color: "#3498db",
            active: true
        });
    } else if (year >= 1650) {
        // Traditional overland routes declining, maritime routes dominant
        tradeRoutes.push({
            name: "Silk Road (declining)",
            path: tradeRoutesData.silk_road,
            color: "#9b59b6",
            active: false
        });
        tradeRoutes.push({
            name: "Mediterranean Trade",
            path: tradeRoutesData.mediterranean_route,
            color: "#3498db",
            active: true
        });
    }
    
    // Create layer group for all trade routes
    const routeLayers = [];
    
    tradeRoutes.forEach(route => {
        const routeLine = L.polyline(route.path, {
            color: route.color,
            weight: 3,
            opacity: route.active ? 0.8 : 0.4,
            dashArray: route.active ? '' : '5, 5'
        });
        
        routeLine.bindPopup(`<b>${route.name}</b>${route.active ? '' : ' (declining)'}`);
        routeLayers.push(routeLine);
    });
    
    tradeRoutesLayer = L.layerGroup(routeLayers).addTo(map);
}