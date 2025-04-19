// Global variables
let currentYear = 1200;
let currentRegion = 'middle-east';
let isPlaying = false;
let playInterval;
let map;
let markers = [];
let boundaryLayer;
let tradeRoutesLayer;

// DOM elements
const yearSlider = document.getElementById('year-slider');
const yearDisplay = document.getElementById('year-display');
const yearTitle = document.getElementById('year-title');
const playPauseButton = document.getElementById('play-pause');
const loadingOverlay = document.getElementById('loading-overlay');
const togglePanelBtn = document.getElementById('toggle-panel');
const infoPanel = document.getElementById('info-panel');
const regionButtons = document.querySelectorAll('.region-buttons .button');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');
const keyEventButtons = document.querySelectorAll('.key-event-btn');
const playbackSpeedSelect = document.getElementById('playback-speed');
const timelineMarkers = document.getElementById('timeline-markers');
const boundariesToggle = document.getElementById('boundaries-toggle');
const eventsToggle = document.getElementById('events-toggle');
const tradeRoutesToggle = document.getElementById('trade-routes-toggle');
const mapStyleSelect = document.getElementById('map-style');
const quizOptions = document.querySelectorAll('.quiz-option');
const quizFeedback = document.getElementById('quiz-feedback');

// Find the closest year in our data
function findClosestYear(year) {
    return Object.keys(historicalData)
        .map(Number)
        .reduce((prev, curr) => 
            Math.abs(curr - year) < Math.abs(prev - year) ? curr : prev
        );
}

// Update the display for the current year
function updateForYear(year) {
    currentYear = year;
    yearDisplay.textContent = `${year} CE`;
    yearTitle.textContent = year;
    
    // Find the closest year in our data
    let closestYear = findClosestYear(year);
    
    // Update region information based on selected region
    updateRegionInfo(closestYear);
    
    // Update map markers
    if (eventsToggle.checked) {
        updateMapMarkers(closestYear);
    } else {
        clearMapMarkers();
    }
    
    // Update historical boundaries
    if (boundariesToggle.checked) {
        updateHistoricalBoundaries(year);
    } else if (boundaryLayer) {
        map.removeLayer(boundaryLayer);
    }
    
    // Update trade routes
    if (tradeRoutesToggle.checked) {
        showTradeRoutes(year);
    } else if (tradeRoutesLayer) {
        map.removeLayer(tradeRoutesLayer);
    }
    
    // Update map style based on time period
    updateMapStyle(year);
    
    // Update quiz
    updateQuiz(closestYear);
}

// Format region name for display
function formatRegionName(region) {
    switch(region) {
        case 'middle-east': return 'Middle East';
        case 'europe': return 'Europe';
        case 'asia': return 'Asia';
        case 'africa': return 'Africa';
        case 'americas': return 'Americas';
        default: return region.charAt(0).toUpperCase() + region.slice(1);
    }
}

// Initialize the application when the page loads
window.addEventListener('load', function() {
    // Initialize map
    initMap();
    
    // Initialize event listeners
    initEventListeners();
    
    // Initialize tabs
    initTabs();
    
    // Initialize quiz
    initQuiz();
});

// Handle window resizing
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        infoPanel.classList.remove('active');
    }
});