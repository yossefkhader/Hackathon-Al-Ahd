function showQuestions() {
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.style.display = 'flex';
    
    currentScore = 0;
    answeredQuestions = 0;
    updateQuizScore();
    
    generateQuizQuestions();
}

function hideQuestions() {
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.style.display = 'none';
}

function generateQuizQuestions() {
    const questionsContent = document.getElementById('questions-content');
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
    
    document.querySelectorAll('.answer-option').forEach(button => {
        button.addEventListener('click', handleAnswerSelection);
    });
    
    const totalQuestionsDisplay = document.getElementById('total-questions');
    totalQuestionsDisplay.textContent = quizQuestions.length;
}

function handleAnswerSelection(event) {
    const selectedIndex = parseInt(event.target.dataset.index);
    const questionDiv = event.target.closest('.quiz-question');
    const questionIndex = parseInt(questionDiv.dataset.questionIndex);
    const correctIndex = quizQuestions[questionIndex].correctIndex;
    
    if (questionDiv.classList.contains('answered')) {
        return;
    }
    
    questionDiv.classList.add('answered');
    answeredQuestions++;
    
    const options = questionDiv.querySelectorAll('.answer-option');
    if (selectedIndex === correctIndex) {
        event.target.classList.add('correct');
        currentScore++;
    } else {
        event.target.classList.add('incorrect');
        options[correctIndex].classList.add('correct');
    }
    
    options.forEach(option => {
        option.disabled = true;
    });
    
    updateQuizScore();
}

function updateQuizScore() {
    const scoreDisplay = document.getElementById('score');
    const progressFill = document.getElementById('progress-fill');
    scoreDisplay.textContent = currentScore;
    const percentage = quizQuestions.length > 0 ? (answeredQuestions / quizQuestions.length) * 100 : 0;
    progressFill.style.width = `${percentage}%`;
}