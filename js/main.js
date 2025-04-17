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

// Variables
let currentEventIndex = 0;
let currentImageIndex = 0;
let isPlaying = false;
let playInterval;
let currentScore = 0;
let answeredQuestions = 0;

// Initialize the application
function initialize() {
    initMap();
    createTimelineDots();
    updateEventDisplay(currentEventIndex);
    setupEventListeners();
    setupSliderListeners();
}

function setupEventListeners() {
    prevEventBtn.addEventListener('click', () => {
        if (currentEventIndex > 0) {
            currentEventIndex--;
            updateEventDisplay(currentEventIndex);
        }
    });
    
    nextEventBtn.addEventListener('click', () => {
        if (currentEventIndex < timelineData.length - 1) {
            currentEventIndex++;
            updateEventDisplay(currentEventIndex);
        }
    });
    
    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            stopPlayback();
        } else {
            startPlayback();
        }
    });
    
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    testKnowledgeBtn.addEventListener('click', showQuestions);
    
    backToTimelineBtn.addEventListener('click', hideQuestions);
    
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

function stopPlayback() {
    isPlaying = false;
    playPauseIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
    clearInterval(playInterval);
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

document.addEventListener('DOMContentLoaded', initialize);