import { showRankingMenu,saveHighScore} from './ranking.js';

export function  showQuizEndWindow() {
    document.querySelector('footer').id = '';
    document.querySelector('#app').innerHTML = `  
        <div class="quiz-container">
        <div id="end">
                <h1 id="finalScore">0</h1>
                <form class="end-form-container">
                    <h2 id="end-text">Podaj swój nick, aby zapisać wynik!</h2>
                    <input type="text" name="name" id="username" placeholder="Podaj swój nick">
                    <button class="btn" id="saveScoreBtn" type="submit">Zapisz</button>
                </form>
                <a href="/index.html" class="btn back-btn"><i class="fas fa-arrow-left"></i>Strona Główna</a>
            </div>
        </div>`;
        const finalScore = document.querySelector('#finalScore');
        const mostRecentScore = localStorage.getItem('mostRecentScore');
        const saveUsernameInput = document.querySelector('#username');
        const saveScoreBtn = document.querySelector('#saveScoreBtn');

        saveScoreBtn.disabled = false;
        finalScore.innerText =mostRecentScore;

        saveUsernameInput.addEventListener('keyup',() => {
            saveScoreBtn.disabled = !saveUsernameInput.value;
            
        });

    saveScoreBtn.addEventListener("click", saveScoreToRanking);
    
    function saveScoreToRanking (event){
            event.preventDefault();
            saveHighScore(mostRecentScore,saveUsernameInput.value,'quizRanking');
            showRankingMenu();
        };
}

