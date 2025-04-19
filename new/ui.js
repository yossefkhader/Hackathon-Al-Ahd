// Initialize all event listeners
function initEventListeners() {
    // Create timeline markers
    createTimelineMarkers();
    
    // Year slider event
    yearSlider.addEventListener('input', function() {
        updateForYear(parseInt(this.value));
    });
    
    // Play/pause button
    playPauseButton.addEventListener('click', togglePlayPause);
    
    // Region buttons
    regionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active class
            regionButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update current region
            currentRegion = this.getAttribute('data-region');
            
            // Update information for the new region
            updateForYear(currentYear);
        });
    });

    // Key event buttons
    keyEventButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetYear = parseInt(this.getAttribute('data-year'));
            yearSlider.value = targetYear;
            updateForYear(targetYear);
        });
    });

    // Toggle panel on mobile
    togglePanelBtn.addEventListener('click', function() {
        infoPanel.classList.toggle('active');
    });

    // Layer toggle handlers
    boundariesToggle.addEventListener('change', function() {
        if (this.checked) {
            updateHistoricalBoundaries(currentYear);
        } else if (boundaryLayer) {
            map.removeLayer(boundaryLayer);
        }
    });

    eventsToggle.addEventListener('change', function() {
        if (this.checked) {
            updateMapMarkers(currentYear);
        } else {
            clearMapMarkers();
        }
    });

    tradeRoutesToggle.addEventListener('change', function() {
        if (this.checked) {
            showTradeRoutes(currentYear);
        } else if (tradeRoutesLayer) {
            map.removeLayer(tradeRoutesLayer);
        }
    });

    // Playback speed changes
    playbackSpeedSelect.addEventListener('change', function() {
        if (isPlaying) {
            // Restart the interval with the new speed
            clearInterval(playInterval);
            togglePlayPause();
        }
    });
}

// Initialize tabs functionality
function initTabs() {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const tabId = button.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
        });
    });
}