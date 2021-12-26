export function  showQuizEndWindow() {
    import { makeReferenceLinks } from './makeReferenceLinks.js';

    let LinksHrefArray = ['./src/quiz.css',
                      './assets/fontawesome-free-6.0.0-beta3-web/css/solid.css',
                      './assets/fontawesome-free-6.0.0-beta3-web/css/fontawesome.css',
                      'https://fonts.googleapis.com/css2?family=Nunito:wght@500&family=Quicksand&display=swap'];

    LinksHrefArray.forEach(makeReferenceLinks);

    document.querySelector('#app').innerHTML = `  
    <div class="container">
        <div id="end">
            <h1 id="finalScore">0</h1>
            <form class="end-form-container">
                <h2 id="end-text">Podaj swój nick, aby zapisać wynik!</h2>
                <input type="text" name="name" id="username" placeholder="Podaj swój nick">
                <button class="btn" id="saveScoreBtn" type="submit" onclick="saveHighScore(event)">Zapisz</button>
            </form>
            <a href="/index.html" class="btn back-btn"><i class="fas fa-arrow-left"></i>Strona Główna</a>
        </div>
    </div>`;

    const finalScore = document.querySelector('#finalScore');
    const mostRecentScore = localStorage.getItem('mostRecentScore');
    
    finalScore.innerText =mostRecentScore;
}








