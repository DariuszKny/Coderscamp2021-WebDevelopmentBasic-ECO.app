import { showQuizEndWindow } from './end.js';
import { makeReferenceLinks } from './makeReferenceLinks.js';
import { removeReferenceLinks } from './removeReferenceLinks.js';

export function  showQuizMenu() {

  removeReferenceLinks();
  let LinksHrefArray = ['./src/quiz.css',
                        './assets/fontawesome-free-6.0.0-beta3-web/css/solid.css',
                        './assets/fontawesome-free-6.0.0-beta3-web/css/fontawesome.css',
                        'https://fonts.googleapis.com/css2?family=Nunito:wght@500&family=Quicksand&display=swap'];

  LinksHrefArray.forEach(makeReferenceLinks);

  document.querySelector('#app').innerHTML = `  
  <div class=".quiz-container">       
    <div id="quiz-bar" class="hide">
      <div id="hud">
        <div class="hud-item">
          <p id="progressText" class="hud-prefix">
            Pytanie
          </p>
          <div id="progressBar">
            <div id="progressBarFull"></div>
          </div>
        </div>
        <div class="hud-item">
          <p class="hud-prefix">
            Wynik
          </p>
          <h1 class="hud-main-text" id="score">
            0
          </h1>
        </div>
      </div>
    </div>
    <div id="question-container">
      <div id="question"></div>
      <div class="question-frame hide">
        <div id="question-image"></div>
        <div id="answer-buttons">
          <button class="btn btn-answer">Answer 1</button>
          <button class="btn btn-answer">Answer 2</button>
          <button class="btn btn-answer">Answer 3</button>
          <button class="btn btn-answer">Answer 4</button>
        </div>
      </div>
      <div id="quiz-info-container">
        <h1>Quiz wiedzy</h1>

        <p class="intro">Przed Tobą 20 pytań dotyczących tematyki sortowania odpadów oraz szeroko pojętego ekologicznego stylu życia.

          Pytania są jednokrotnego wyboru. Rozwiązanie całego testu zajmie Ci kilka minut.<br>Jesteś gotowy?</p>
      </div>
      <div class="controls">
        <button id="start-btn" class="start-btn btn"><i class="fas fa-play"></i> Start</button>
        <button id="next-btn" class="next-btn btn hide">Następne pytanie</button>
      </div>
    </div>
  </div>`
  
  const quizInfoContainerElement = document.getElementById('quiz-info-container');
  const quizBarElement = document.getElementById('quiz-bar');
  const startButton = document.getElementById('start-btn');
  const nextButton = document.getElementById('next-btn');
  const questionContainerElement = document.getElementById('question-container');
  const questionElement = document.getElementById('question');
  const questionImage = document.getElementById('question-image')
  const questionFrameElement = document.querySelector('.question-frame');
  const answerButtonsElement = document.getElementById('answer-buttons');
  const imageElement = document.getElementById('question-image');
  const progressText = document.querySelector('#progressText');
  const scoreText = document.querySelector('#score');
  const progressBarFull = document.querySelector('#progressBarFull');

  let shuffledQuestions, currentQuestionIndex;
  let score =0;
  let questionCounter =0;
  let SCORE_POINTS = 100;
  let MAX_QUESTIONS = 20;

  startButton.addEventListener('click', startGame);
  nextButton.addEventListener('click', () => {
      currentQuestionIndex++;
      setNextQuestion();
    });

  let questions = [];

  fetch('src/quiz.json')
      .then((res) => {
          return res.json();
      })
      .then((loadedQuestions) => {
          questions = loadedQuestions;
      })
      .catch((err) => {
          console.error(err);
      });

  function startGame(){
      questionCounter = 0;
      score = 0;
      scoreText.innerText = 0;
      
      startButton.classList.add('hide');
      quizInfoContainerElement.classList.add('hide');
      questionFrameElement.classList.remove('hide');
      quizBarElement.classList.remove('hide');

      shuffledQuestions = questions.sort(() => Math.random() - .5);
      shuffledQuestions = shuffledQuestions.slice(0,20);
      currentQuestionIndex = 0;

      questionContainerElement.classList.remove('hide');
      
      if(questionCounter<20){
        setNextQuestion();
      }
    
  };

  function setNextQuestion(){
      questionCounter++;
      progressText.innerText = `Pytanie ${questionCounter}/${MAX_QUESTIONS}`;
      progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`;
      resetState();
      showQuestion(shuffledQuestions[currentQuestionIndex]);
  };

  function selectAnswer(e) {
      const selectedButton = e.target;
      const correct = selectedButton.dataset.correct;
      setStatusClass(document.body, correct);
      Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        button.disabled = true;
      });

      if (correct) {
          score +=SCORE_POINTS;
          scoreText.innerText = score;
          selectedButton.classList.add('correctAnswer');
      } else {
          selectedButton.classList.add('wrongAnswer');
      }

      if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
      } else {
          localStorage.setItem('mostRecentScore', score);
          const myScore= setTimeout(showQuizEndWindow(),800);
          return  myScore;
      }
    }

    function setStatusClass(element, correct) {
      clearStatusClass(element);
      if (correct) {
        element.classList.add('correct');
      } else {
        element.classList.add('wrong');
      }
    }
    
    function clearStatusClass(element) {
      element.classList.remove('correct');
      element.classList.remove('wrong');
    }
    

  function showQuestion(question){
      questionElement.innerText = question.question;
      questionImage.innerHTML = `<img src="/assets/img/quiz-test/${question.image}" alt="">`;
      question.answers.forEach(answer => {
          const button = document.createElement('button');
          button.innerText = answer.text;
          button.classList.add('btn');
          if (answer.correct) {
            button.dataset.correct = answer.correct;
          }
          button.addEventListener('click', selectAnswer);
          
          answerButtonsElement.appendChild(button);
        });
  };

  function resetState(){
      
      nextButton.classList.add('hide');
      while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
      };
    };
 };

