function updateEventImage() {
    const event = timelineData[currentEventIndex];
    const eventImage = document.getElementById('event-image');
    eventImage.src = event.images[currentImageIndex];
}

function setupSliderListeners() {
    const prevImageBtn = document.getElementById('prev-image');
    const nextImageBtn = document.getElementById('next-image');
    
    prevImageBtn.addEventListener('click', () => {
        const event = timelineData[currentEventIndex];
        currentImageIndex = (currentImageIndex - 1 + event.images.length) % event.images.length;
        updateEventImage();
    });
    
    nextImageBtn.addEventListener('click', () => {
        const event = timelineData[currentEventIndex];
        currentImageIndex = (currentImageIndex + 1) % event.images.length;
        updateEventImage();
    });
}