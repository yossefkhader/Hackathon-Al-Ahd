// Map initialization and management
let map;
let markers = [];

// Initialize the map
function initMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoieWs5IiwiYSI6ImNtOWx1dHNpajA2ZXEyanM5bWk4dHlqYmwifQ.UhU4D6Oh9ZOpis25a0-RuQ';

    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/yk9/cm9lvmphp005g01qs22s674h8',
        center: [35.2354, 31.7781],
        zoom: 16,
        bearing: -10,
        antialias: true
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.on('style.load', function() {
        // add3DBuildings();
        loadingOverlay.style.display = 'none';
        addEventMarkers();
    });

    map.on('error', function(e) {
        console.error('Map error:', e);
        document.getElementById('loading-overlay').style.display = 'none';
    });
}

// Add 3D building layer
function add3DBuildings() {
    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',
            'fill-extrusion-height': [
                'interpolate', ['linear'], ['zoom'],
                15, 0,
                15.05, ['get', 'height']
            ],
            'fill-extrusion-base': [
                'interpolate', ['linear'], ['zoom'],
                15, 0,
                15.05, ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
        }
    });
}

// Add event markers to the map
function addEventMarkers() {
    // Remove existing markers
    markers.forEach(marker => marker.remove());
    markers = [];
    
    // Add new markers
    timelineData.forEach((event, index) => {
        // Create marker element
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.width = '20px';
        el.style.height = '20px';
        el.style.borderRadius = '50%';
        el.style.backgroundColor = getEventTypeColor(event.eventType);
        el.style.border = '2px solid white';
        el.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.3)';
        el.style.cursor = 'pointer';
        
        // Create popup content
        const popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
                <div style="padding: 10px;">
                    <h3 style="margin-top: 0;">${event.title}</h3>
                    <p style="margin-bottom: 0;">${event.year} CE</p>
                </div>
            `);
        
        // Add marker to map
        const marker = new mapboxgl.Marker(el)
            .setLngLat([event.location.lng, event.location.lat])
            .setPopup(popup)
            .addTo(map);
        
        // Add click event
        el.addEventListener('click', () => {
            currentEventIndex = index;
            updateEventDisplay(currentEventIndex);
        });
        
        markers.push(marker);
    });
}

// Highlight the marker corresponding to the current event
function highlightMarker(index) {
    markers.forEach((marker, i) => {
        const el = marker.getElement();
        if (i === index) {
            el.style.width = '24px';
            el.style.height = '24px';
            el.style.zIndex = 10;
        } else {
            el.style.width = '20px';
            el.style.height = '20px';
            el.style.zIndex = 1;
        }
    });
}

// Get color for event type
function getEventTypeColor(type) {
    const t = type.toLowerCase();
    switch (t) {
        case 'construction':
            return '#3498db';
        case 'conflict':
            return '#e74c3c';
        case 'political':
            return '#f39c12';
        case 'cultural':
            return '#2ecc71';
        case 'expansion':
            return '#9b59b6'; // Purple
        case 'reconstruction':
            return '#e67e22'; // Orange
        case 'conquest':
            return '#1abc9c'; // Turquoise
        case 'war/administrative change':
            return '#d35400'; // Dark Orange
        case 'attack/destruction':
            return '#c0392b'; // Red
        case 'restoration':
            return '#27ae60'; // Green
        case 'reconstruction/cultural heritage':
            return '#8e44ad'; // Deep Purple
        case 'political/conflict':
            return '#f39c12'; // (Same as political)
        case 'political/security crisis':
            return '#16a085'; // Teal
        case 'contemporary status':
            return '#2ecc71'; // Green
        case 'reconquest/restoration':
            return '#2980b9'; // Blue
        default:
            return '#95a5a6'; // Default grey
    }
}