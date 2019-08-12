'use strict'


//GLOBAL VARIABLES
let userScore = 0;
let questionCount = 0;



//HOME PAGE 
function startQuiz(){
    $('main').on('click', 'button.landing-button', function(event){
        $(this).parent('section').addClass('hidden');
        $('.question-content').addClass('show');
        $('.question-count').text(1);
    });
}

function changeQuestionCount(){
    questionCount ++;
    $('.question-count').text(questionCount+1);
}

function updateScore(){
    userScore ++;
    $('.correct-count').text(userScore);
}


//QUESTION FORM

//generate html for question
function generateQuestionElement(){
    if (questionCount < QUESTIONS.length){
        return `
        <div>
        <form class="question-form"> 
        <h2><span class="question-text">${QUESTIONS[questionCount].question}</span></h2>
        <fieldset>
        <label class="option-choice">
            <input type="radio" class="radio-button" value="${QUESTIONS[questionCount].answers[0]}" name="question" value="Answer A" required">${QUESTIONS[questionCount].answers[0]}
        </label>
        <label class="option-choice">
            <input type="radio" class="radio-button" value="${QUESTIONS[questionCount].answers[1]}" name="question" value="Answer B" required>${QUESTIONS[questionCount].answers[1]}
        </label>
        <label class="option-choice">
            <input type="radio" class="radio-button" value="${QUESTIONS[questionCount].answers[2]}" name="question" value="Answer C" required>${QUESTIONS[questionCount].answers[2]}
        </label>
        <label class="option-choice">
            <input type="radio" class="radio-button" value="${QUESTIONS[questionCount].answers[3]}" name="question" value="Answer D" required>${QUESTIONS[questionCount].answers[3]}
         </label>
        <button class="submit-content-button"type="submit">Submit</button>
        </fieldset>
        </form>
        </div>`;
    } else {
        renderResults();
        $('.question-count').text(10);
    }
}

//render page
function renderForm(){
    $('.question-content').html(generateQuestionElement());  
    selectAnswer();
}



//CORRECT/INCORRECT LOGIC
function selectAnswer(){
    $('form').on('submit', function(event){
      event.preventDefault();
      let selected = $('input:checked').val();
      let correctAnswer = `${QUESTIONS[questionCount].correctAnswer}`;
      if (selected === correctAnswer) {
          ifAnswerIsCorrect();
          updateScore();
      } else {
          ifAnswerIsIncorrect();
      }
    });
  }



//DISPLAY CORRECT/INCORRECT PAGE

//correct
function ifAnswerIsCorrect(){
    $('.question-content').html(`<div class="quiz-feedback"><h3>Correct!</h3><button class="next-button">Next</button></div>`);
}

//incorrect
function ifAnswerIsIncorrect(){
    $('.question-content').html(`<div class="quiz-feedback"><h3>Incorrect.</h3><p>The correct answer is ${QUESTIONS[questionCount].correctAnswer}.</p><p id="explanation">${QUESTIONS[questionCount].explanation}</p><button class="next-button">Next</button></div>`);
}



//NEW QUESTION
function renderNewForm(){
    $('main').on('click', '.next-button', function(event){
        changeQuestionCount();
        renderForm();
    });
}



//RESULTS PAGE

//display results on homepage along with 'health score'
function renderResults(){
    if (userScore > 4){
        $('.question-content').html(`<div class="quiz-feedback"><h3>You got ${userScore}/10 correct</h3><p>Great job!</p><button class="retake-quiz">Retake Quiz</button></div>`)
    } else if (userScore <= 4 && userScore >= 2){
        $('.question-content').html(`<div class="quiz-feedback"><h3>You got ${userScore}/10 correct</h3><p>You did okay...</p><button class="retake-quiz">Retake Quiz</button></div>`)
    } else {
        $('.question-content').html(`<div class="quiz-feedback"><h3>You got ${userScore}/10 correct</h3><p>You probably need some help.</p><button class="retake-quiz">Retake Quiz</button></div>`)
    }
}

//give option to retake quiz
function retakeQuiz(){
    $('main').on('click', '.retake-quiz', function(){
        location.reload();
    });
}


//CALL ALL FUNCTIONS
function callAllFunctions(){
    startQuiz();
    renderForm();
    renderNewForm();
    retakeQuiz();
}

$(callAllFunctions);


