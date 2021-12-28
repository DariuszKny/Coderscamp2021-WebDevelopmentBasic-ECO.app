import { makeReferenceLinks } from './makeReferenceLinks.js';

export function  showQuizEndWindow() {
    document.querySelector('#app').innerHTML = `  
    <div class="quiz-container">
    <div id="end">
            <h1 id="finalScore">0</h1>
            <form class="end-form-container">
                <h2 id="end-text">Podaj swój nick, aby zapisać wynik!</h2>
                <input type="text" name="name" id="username" placeholder="Podaj swój nick">
                <button class="btn" id="saveScoreBtn" type="submit" onclick="saveHighScore(event)">Zapisz</button>
            </form>
            <a href="/index.html" class="btn back-btn"><i class="fas fa-arrow-left"></i>Strona Główna</a>
        </div>
    </div>
    <script type="module" src="./src/end.js"></script>`;

    const finalScore = document.querySelector('#finalScore');
    const mostRecentScore = localStorage.getItem('mostRecentScore');

    finalScore.innerText =mostRecentScore;
}

