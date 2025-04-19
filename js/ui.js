// UI related functionality
let currentEventIndex = 0;
let currentImageIndex = 0;
let isPlaying = false;
let playInterval;
let currentScore = 0;
let answeredQuestions = 0;

// DOM elements
const loadingOverlay = document.getElementById('loading-overlay');
const eventTitle = document.getElementById('event-title');
const eventImage = document.getElementById('event-image');
const eventDescription = document.getElementById('event-description');
const beforeImage = document.getElementById('before-image');
const afterImage = document.getElementById('after-image');
const rulingPower = document.getElementById('ruling-power');
const eventType = document.getElementById('event-type');
const significance = document.getElementById('significance');
const yearDisplay = document.getElementById('year-display');
const timelineDots = document.getElementById('timeline-dots');
const prevEventBtn = document.getElementById('prev-event');
const nextEventBtn = document.getElementById('next-event');
const playPauseBtn = document.getElementById('play-pause');
const playPauseIcon = document.getElementById('play-pause-icon');
const fullscreenBtn = document.getElementById('fullscreen-button');
const prevImageBtn = document.getElementById('prev-image');
const nextImageBtn = document.getElementById('next-image');
const testKnowledgeBtn = document.getElementById('test-knowledge-btn');
const questionsContainer = document.getElementById('questions-container');
const questionsContent = document.getElementById('questions-content');
const backToTimelineBtn = document.getElementById('back-to-timeline');
const scoreDisplay = document.getElementById('score');
const totalQuestionsDisplay = document.getElementById('total-questions');
const progressFill = document.getElementById('progress-fill');

// Create timeline dots
function createTimelineDots() {
    timelineDots.innerHTML = '';
    
    timelineData.forEach((event, index) => {
        const dot = document.createElement('div');
        // Set CSS classes (convert event type to lowercase for consistency in class naming)
        dot.className = `timeline-dot ${event.eventType.toLowerCase()}`;
        // Set dot background color inline to ensure visibility
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

// Update event display
function updateEventDisplay(index) {
    const event = timelineData[index];
    
    // Update active dot
    document.querySelectorAll('.timeline-dot').forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Update text content
    eventTitle.textContent = event.title;
    eventDescription.textContent = event.description;
    yearDisplay.textContent = event.year;
    rulingPower.textContent = event.ruler;
    eventType.textContent = event.eventType.charAt(0).toUpperCase() + event.eventType.slice(1);
    significance.textContent = event.significance;
    
    // Update images
    currentImageIndex = 0;
    updateEventImage();
    
    // Update before/after images
    beforeImage.src = event.beforeAfter.before || 'https://placehold.co/600x400?text=Before+Image+Not+Available';
    afterImage.src = event.beforeAfter.after || 'https://placehold.co/600x400?text=After+Image+Not+Available';
    
    // Center map on event location
    map.flyTo({
        center: [event.location.lng, event.location.lat],
        duration: 1500
    });
    
    // Highlight corresponding marker
    highlightMarker(index);
}

// Update event image based on current image index
function updateEventImage() {
    const event = timelineData[currentEventIndex];
    eventImage.src = event.images[currentImageIndex];
}

// Setup event listeners
function setupEventListeners() {
    // Previous event button
    prevEventBtn.addEventListener('click', () => {
        if (currentEventIndex > 0) {
            currentEventIndex--;
            updateEventDisplay(currentEventIndex);
        }
    });
    
    // Next event button
    nextEventBtn.addEventListener('click', () => {
        if (currentEventIndex < timelineData.length - 1) {
            currentEventIndex++;
            updateEventDisplay(currentEventIndex);
        }
    });
    
    // Play/pause button
    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            stopPlayback();
        } else {
            startPlayback();
        }
    });
    
    // Previous image button
    prevImageBtn.addEventListener('click', () => {
        const event = timelineData[currentEventIndex];
        currentImageIndex = (currentImageIndex - 1 + event.images.length) % event.images.length;
        updateEventImage();
    });
    
    // Next image button
    nextImageBtn.addEventListener('click', () => {
        const event = timelineData[currentEventIndex];
        currentImageIndex = (currentImageIndex + 1) % event.images.length;
        updateEventImage();
    });
    
    // Fullscreen button
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // Test knowledge button
    testKnowledgeBtn.addEventListener('click', showQuestions);
    
    // Back to timeline button
    backToTimelineBtn.addEventListener('click', hideQuestions);
    
    // Handle image load errors
    eventImage.addEventListener('error', () => {
        eventImage.src = 'https://placehold.co/600x400?text=Image+Not+Available';
    });
    
    beforeImage.addEventListener('error', () => {
        beforeImage.src = 'https://placehold.co/600x400?text=Before+Image+Not+Available';
    });
    
    afterImage.addEventListener('error', () => {
        afterImage.src = 'https://placehold.co/600x400?text=After+Image+Not+Available';
    });
}

// Start timeline playback
function startPlayback() {
    isPlaying = true;
    playPauseIcon.innerHTML = `
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
    `;
    
    playInterval = setInterval(() => {
        if (currentEventIndex < timelineData.length - 1) {
            currentEventIndex++;
            updateEventDisplay(currentEventIndex);
        } else {
            stopPlayback();
        }
    }, 3000);
}

// Stop timeline playback
function stopPlayback() {
    isPlaying = false;
    playPauseIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
    clearInterval(playInterval);
}

// Toggle fullscreen
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Quiz functionality

// Show questions panel
function showQuestions() {
    questionsContainer.style.display = 'flex';
    
    // Reset quiz state
    currentScore = 0;
    answeredQuestions = 0;
    updateQuizScore();
    
    // Generate questions
    generateQuizQuestions();
}

// Hide questions panel
function hideQuestions() {
    questionsContainer.style.display = 'none';
}

// Generate quiz questions
function generateQuizQuestions() {
    questionsContent.innerHTML = '';
    
    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.setAttribute('data-question-index', index);
        
        questionDiv.innerHTML = `
            <div class="question-text">${index + 1}. ${q.question}</div>
            <div class="answer-options">
                ${q.options.map((option, i) => `
                    <button class="answer-option" data-index="${i}">${option}</button>
                `).join('')}
            </div>
        `;
        
        questionsContent.appendChild(questionDiv);
    });
    
    // Add event listeners to answer options
    document.querySelectorAll('.answer-option').forEach(button => {
        button.addEventListener('click', handleAnswerSelection);
    });
    
    // Update total questions display
    totalQuestionsDisplay.textContent = quizQuestions.length;
}

// Handle answer selection
function handleAnswerSelection(event) {
    const selectedIndex = parseInt(event.target.dataset.index);
    const questionDiv = event.target.closest('.quiz-question');
    const questionIndex = parseInt(questionDiv.dataset.questionIndex);
    const correctIndex = quizQuestions[questionIndex].correctIndex;
    
    // Prevent multiple answers
    if (questionDiv.classList.contains('answered')) {
        return;
    }
    
    // Mark question as answered
    questionDiv.classList.add('answered');
    answeredQuestions++;
    
    // Check if answer is correct
    const options = questionDiv.querySelectorAll('.answer-option');
    if (selectedIndex === correctIndex) {
        event.target.classList.add('correct');
        currentScore++;
    } else {
        event.target.classList.add('incorrect');
        options[correctIndex].classList.add('correct');
    }
    
    // Disable further selections for this question
    options.forEach(option => {
        option.disabled = true;
    });
    
    // Update score display
    updateQuizScore();
}

// Update quiz score display
function updateQuizScore() {
    scoreDisplay.textContent = currentScore;
    const percentage = quizQuestions.length > 0 ? (answeredQuestions / quizQuestions.length) * 100 : 0;
    progressFill.style.width = `${percentage}%`;
}