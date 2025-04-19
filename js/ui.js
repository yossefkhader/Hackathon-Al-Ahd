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
    const timelineDots = document.getElementById('timeline-dots');
    timelineDots.className = 'era-boxes';
    timelineDots.innerHTML = '';
    
    erasData.forEach((era, index) => {
        if (!era.id || !era.title) return;
        
        const eraBox = document.createElement('div');
        eraBox.className = 'era-box';
        eraBox.innerHTML = `
            <div class="era-title">${era.title}</div>
            <div class="era-years">${era.startYear} - ${era.endYear}</div>
        `;
        
        eraBox.dataset.index = index;
        eraBox.addEventListener('click', function() {
            // Hide era selection
            timelineDots.style.display = 'none';
            // Update timeline with events
            updateEraTimeline(parseInt(this.dataset.index));
        });
        
        timelineDots.appendChild(eraBox);
    });
}

// Update event display
function updateEraTimeline(index) {
    const era = erasData[index];
    const eraEvents = timelineData[era.id] || [];
    
    let eventSelector = document.querySelector('.event-selector');
    if (!eventSelector) {
        eventSelector = document.createElement('div');
        eventSelector.className = 'event-selector';
        document.querySelector('.timeline-wrapper').appendChild(eventSelector);
    }
    
    eventSelector.innerHTML = `
        <div class="events-header">
            <button class="back-to-eras" onclick="showEraSelection()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 18l-6-6 6-6"/>
                </svg>
                Back to Eras
            </button>
            <span class="current-era">${era.title} (${era.startYear} - ${era.endYear})</span>
        </div>
        <div class="events-list"></div>
    `;
    
    const eventsList = eventSelector.querySelector('.events-list');
    
    eraEvents.forEach((event, idx) => {
        const eventBtn = document.createElement('button');
        eventBtn.className = 'event-item';
        eventBtn.innerHTML = `
            <span class="event-year">${event.year}</span>
            <span class="event-title">${event.title}</span>
        `;
        
        eventBtn.classList.add(`event-type-${event.eventType.toLowerCase()}`);
        
        eventBtn.addEventListener('click', () => {
            document.querySelectorAll('.event-item').forEach(btn => 
                btn.classList.remove('active')
            );
            eventBtn.classList.add('active');
            updateEventDisplay(event);
        });
        
        eventsList.appendChild(eventBtn);
    });
}

// Update event image based on current image index
function updateEventImage() {
    const event = erasData[currentEventIndex];
    eventImage.src = event.images[currentImageIndex];
}

// Setup event listeners
function setupEventListeners() {

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

// Add or update the updateEventDisplay function
function updateEventDisplay(event) {
    // Update event info in the side panel
    eventTitle.textContent = event.title;
    eventDescription.textContent = event.description;
    yearDisplay.textContent = event.year;
    
    // Update event image if available
    if (event.images && event.images.length > 0) {
        eventImage.src = event.images[currentImageIndex];
        prevImageBtn.style.display = event.images.length > 1 ? 'flex' : 'none';
        nextImageBtn.style.display = event.images.length > 1 ? 'flex' : 'none';
    }
}

function createEraSelector() {
    const timelineDots = document.getElementById('timeline-dots');
    timelineDots.className = 'era-selector';
    timelineDots.innerHTML = '';
    
    // Create back button
    const backButton = document.createElement('button');
    backButton.className = 'back-to-eras';
    backButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Eras
    `;
    document.querySelector('.timeline-container').appendChild(backButton);
    
    erasData.forEach((era, index) => {
        if (!era.id || !era.title) return; // Skip incomplete era data
        
        const eraBox = document.createElement('div');
        eraBox.className = 'era-box';
        eraBox.textContent = era.title;
        eraBox.dataset.eraId = era.id;
        
        eraBox.addEventListener('click', () => {
            // Hide era selector
            timelineDots.style.display = 'none';
            // Show back button
            backButton.style.display = 'flex';
            // Update timeline with selected era's events
            updateEraTimeline(index);
            currentEraIndex = index;
        });
        
        timelineDots.appendChild(eraBox);
    });
    
    // Back button click handler
    backButton.addEventListener('click', () => {
        // Show era selector
        timelineDots.style.display = 'flex';
        // Hide back button
        backButton.style.display = 'none';
        // Clear event selector
        const eventSelector = document.querySelector('.event-selector');
        if (eventSelector) {
            eventSelector.innerHTML = '';
        }
    });
}

function showEraSelection() {
    const timelineDots = document.getElementById('timeline-dots');
    const eventSelector = document.querySelector('.event-selector');
    
    timelineDots.style.display = 'flex';
    if (eventSelector) {
        eventSelector.innerHTML = '';
    }
}

// Add this to your initialization code
let currentEraIndex = 0;
createEraSelector();
updateEraTimeline(currentEraIndex);