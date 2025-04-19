// Create timeline markers for significant events
function createTimelineMarkers() {
    timelineKeyYears.forEach(marker => {
        const percent = (marker.year - 1200) / (2024 - 1200) * 100;
        const markerElement = document.createElement('div');
        markerElement.className = 'marker';
        markerElement.style.left = `${percent}%`;
        markerElement.setAttribute('data-year', marker.year);
        markerElement.setAttribute('title', marker.label);
        markerElement.addEventListener('click', () => {
            yearSlider.value = marker.year;
            updateForYear(marker.year);
        });
        timelineMarkers.appendChild(markerElement);
    });
}

// Handle play/pause functionality
function togglePlayPause() {
    if (isPlaying) {
        clearInterval(playInterval);
        playPauseButton.innerHTML = '<i class="fas fa-play"></i> <span>Play</span>';
    } else {
        const speed = parseInt(playbackSpeedSelect.value);
        playInterval = setInterval(() => {
            const newYear = parseInt(yearSlider.value) + speed;
            if (newYear <= parseInt(yearSlider.max)) {
                yearSlider.value = newYear;
                updateForYear(newYear);
            } else {
                clearInterval(playInterval);
                isPlaying = false;
                playPauseButton.innerHTML = '<i class="fas fa-play"></i> <span>Play</span>';
            }
        }, 200);
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i> <span>Pause</span>';
    }
    isPlaying = !isPlaying;
}

// Update quiz for current year
function updateQuiz(year) {
    const quizData = historicalData[year]?.quiz;
    if (!quizData) return;
    
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptionsContainer = document.querySelector('.quiz-options');
    
    quizQuestion.textContent = quizData.question;
    
    // Clear existing options
    quizOptionsContainer.innerHTML = '';
    
    // Add new options
    quizData.options.forEach((option) => {
        const button = document.createElement('button');
        button.className = 'quiz-option';
        button.textContent = option.text;
        
        if (option.correct) {
            button.setAttribute('data-correct', 'true');
        }
        
        button.addEventListener('click', function() {
            // Remove selected class from all options
            document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Check if answer is correct
            const isCorrect = this.hasAttribute('data-correct');
            
            // Display feedback
            quizFeedback.classList.remove('hidden', 'correct', 'incorrect');
            quizFeedback.classList.add(isCorrect ? 'correct' : 'incorrect');
            
            if (isCorrect) {
                quizFeedback.innerHTML = `<strong>Correct!</strong> ${quizData.explanation}`;
            } else {
                quizFeedback.innerHTML = `<strong>Incorrect.</strong> ${quizData.explanation}`;
            }
        });
        
        quizOptionsContainer.appendChild(button);
    });
    
    // Reset feedback
    quizFeedback.classList.add('hidden');
    quizFeedback.classList.remove('correct', 'incorrect');
}

// Initialize quiz functionality
function initQuiz() {
    quizOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            quizOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Check if answer is correct
            const isCorrect = this.getAttribute('data-correct') === 'true';
            
            // Display feedback
            quizFeedback.classList.remove('hidden', 'correct', 'incorrect');
            quizFeedback.classList.add(isCorrect ? 'correct' : 'incorrect');
            
            if (isCorrect) {
                quizFeedback.innerHTML = '<strong>Correct!</strong> Well done! The Ayyubid Dynasty, founded by Saladin, ruled Egypt and parts of the Levant in 1200 CE.';
            } else {
                quizFeedback.innerHTML = '<strong>Incorrect.</strong> The Ayyubid Dynasty, founded by Saladin, ruled Egypt and parts of the Levant in 1200 CE.';
            }
        });
    });
}

// Update global context tab
function updateGlobalContextTab(year, data) {
    let globalHTML = '<h3>Global Context</h3><div class="global-context">';
    
    // Add content for each region except the current one
    const regions = ['middle-east', 'europe', 'asia', 'africa', 'americas'];
    regions.forEach(region => {
        if (region !== currentRegion && data[region]) {
            globalHTML += `<p><strong>${formatRegionName(region)}:</strong> ${data[region].description}</p>`;
        }
    });
    
    globalHTML += '</div>';
    document.getElementById('global-tab').innerHTML = globalHTML;
}

// Update region information panel
function updateRegionInfo(year) {
    const data = historicalData[year];
    
    if (!data) {
        // No data for this specific year
        return;
    }
    
    const regionData = data[currentRegion];
    
    if (regionData) {
        // Update political tab
        document.getElementById('region-info').innerHTML = `
            <h3>${formatRegionName(currentRegion)}</h3>
            <div id="region-details">
                <p><strong>Political Status:</strong> ${regionData.rulers}</p>
                <p><strong>Key Events:</strong> ${regionData.events}</p>
                <p><strong>Economy:</strong> ${regionData.economy}</p>
            </div>
        `;
        
        // Update events list
        let eventsHTML = '';
        if (data.events) {
            const regionEvents = data.events.filter(event => event.region === currentRegion || !event.region);
            regionEvents.forEach(event => {
                eventsHTML += `
                    <div class="event">
                        <h4>${event.year} CE ${event.title}</h4>
                        <p>${event.description}</p>
                    </div>
                `;
            });
        }
        
        if (eventsHTML === '') {
            eventsHTML = `
                <div class="event">
                    <h4>${year} CE</h4>
                    <p>No specific events recorded for this year.</p>
                </div>
            `;
        }
        
        document.getElementById('events-list').innerHTML = eventsHTML;
        
        // Update cultural tab if data exists
        if (regionData.cultural) {
            document.getElementById('cultural-developments').innerHTML = `
                <p><strong>Arts and Architecture:</strong> ${regionData.cultural.arts}</p>
                <p><strong>Science and Learning:</strong> ${regionData.cultural.science}</p>
                <p><strong>Religion:</strong> ${regionData.cultural.religion}</p>
                <p><strong>Literature:</strong> ${regionData.cultural.literature || 'Information not available'}</p>
                
                <div class="figure">
                    <div class="flex items-center justify-center bg-gray-200 h-40">
                        <i class="fas fa-image text-4xl text-gray-400"></i>
                    </div>
                    <div class="figure-caption">Example of ${formatRegionName(currentRegion)} art and architecture from the ${Math.floor(year/100)}th century</div>
                </div>
            `;
        }
        
        // Update economic tab if data exists
        if (regionData.economic) {
            document.getElementById('economic-data').innerHTML = `
                <p><strong>Trade Routes:</strong> ${regionData.economic.trade}</p>
                <p><strong>Key Resources:</strong> ${regionData.economic.resources}</p>
                <p><strong>Economic Centers:</strong> ${regionData.economic.centers}</p>
                <p><strong>Currency/Finance:</strong> ${regionData.economic.currency || 'Information not available'}</p>
                
                <div class="figure">
                    <div class="flex items-center justify-center bg-gray-200 h-40">
                        <i class="fas fa-image text-4xl text-gray-400"></i>
                    </div>
                    <div class="figure-caption">Economic activity in ${formatRegionName(currentRegion)} during the ${Math.floor(year/100)}th century</div>
                </div>
            `;
        }
        
        // Update key figures if available
        if (regionData.keyFigures) {
            let figuresHTML = '<h3>Key Figures</h3>';
            regionData.keyFigures.forEach(figure => {
                figuresHTML += `
                    <div class="key-figure">
                        <div class="key-figure-image">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="key-figure-info">
                            <h4>${figure.name}</h4>
                            <p><strong>Title:</strong> ${figure.title}</p>
                            <p><strong>Significance:</strong> ${figure.significance}</p>
                        </div>
                    </div>
                `;
            });
            document.getElementById('key-figures').innerHTML = figuresHTML;
        }
        
        // Update global context tab
        updateGlobalContextTab(year, data);
    } else {
        // No data for this specific region in this year
        document.getElementById('region-info').innerHTML = `
            <h3>${formatRegionName(currentRegion)}</h3>
            <p>Detailed information not available for this region in this specific year.</p>
        `;
        
        document.getElementById('events-list').innerHTML = `
            <div class="event">
                <h4>${year} CE</h4>
                <p>No specific events recorded for this region in this year.</p>
            </div>
        `;
    }
}