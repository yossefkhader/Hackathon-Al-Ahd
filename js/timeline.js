function createTimelineDots() {
    const timelineDots = document.getElementById('timeline-dots');
    timelineDots.innerHTML = '';
    
    timelineData.forEach((event, index) => {
        const dot = document.createElement('div');
        dot.className = `timeline-dot ${event.eventType.toLowerCase()}`;
        dot.style.backgroundColor = getEventTypeColor(event.eventType);
        if (index === currentEventIndex) {
            dot.classList.add('active');
        }
        dot.dataset.index = index;
        dot.addEventListener('click', function() {
            currentEventIndex = parseInt(this.dataset.index);
            updateEventDisplay(currentEventIndex);
        });
        timelineDots.appendChild(dot);
    });
}

function updateEventDisplay(index) {
    const event = timelineData[index];
    
    document.querySelectorAll('.timeline-dot').forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    const eventTitle = document.getElementById('event-title');
    const eventDescription = document.getElementById('event-description');
    const yearDisplay = document.getElementById('year-display');
    const rulingPower = document.getElementById('ruling-power');
    const eventType = document.getElementById('event-type');
    const significance = document.getElementById('significance');
    const beforeImage = document.getElementById('before-image');
    const afterImage = document.getElementById('after-image');
    const eventImage = document.getElementById('event-image');
    
    eventTitle.textContent = event.title;
    eventDescription.textContent = event.description;
    yearDisplay.textContent = event.year;
    rulingPower.textContent = event.ruler;
    eventType.textContent = event.eventType.charAt(0).toUpperCase() + event.eventType.slice(1);
    significance.textContent = event.significance;
    
    currentImageIndex = 0;
    updateEventImage();
    
    beforeImage.src = event.beforeAfter.before || 'https://placehold.co/600x400?text=Before+Image+Not+Available';
    afterImage.src = event.beforeAfter.after || 'https://placehold.co/600x400?text=After+Image+Not+Available';
    
    map.flyTo({
        center: [event.location.lng, event.location.lat],
        zoom: 17,
        pitch: 60,
        bearing: -30,
        duration: 1500
    });
    
    highlightMarker(index);
}