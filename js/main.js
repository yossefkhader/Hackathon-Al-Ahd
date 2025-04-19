// Main application initialization

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initialize);

// Initialize the application
function initialize() {
    initMap();
    createTimelineDots();
    updateEventDisplay(currentEventIndex);
    setupEventListeners();
}