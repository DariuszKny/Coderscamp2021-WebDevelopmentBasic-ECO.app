import { showQuizMenu } from './quiz.js';
import { showWeatherMenu } from './apiwether.js';
import { showBazaWiedzy } from './bazawiedzy.js';
import { showOznaczeniaMenu } from './oznaczenia.js';
import { showRankingMenu } from './ranking.js';
import { showSorterMenu } from './sorter.js';
import { makeReferenceLinks } from './makeReferenceLinks.js';
import { removeReferenceLinks } from './removeReferenceLinks.js';


export function showMainMenu() {
    removeReferenceLinks();
    makeReferenceLinks('./src/mainMenu.css');
    document.querySelector('#app').innerHTML = `  
    <div class="container">
        <div class="item" id="game"><button class="button"><img class="img" src='resource/18966195.png'> <p class="menudescript"> Gra sorter </p></button></div> 
        <div class="item" id="signs"><button class="button"><img class="img" src="resource/pet.png"><p class="menudescript">Oznaczenia na opakowaniach</p></button></div>
        <div class="item" id="quiz"><button class="button"><img class="img" src="resource/49455.png"><p class="menudescript">Quiz </p></button></div>
        <div class="item" id="air"><button class="button"><img class="img" src="resource/41284.jpg"><p class="menudescript">Jakość powietrza</p> </button></div>
        <div class="item" id="base"><button class="button"><img class="img" src="resource/2451014.png"> <p class="menudescript">Baza wiedzy</p></button></div>
        <div class="item" id="ranking"><button class="button"><img class="img" src="resource/puchar.png"><p class="menudescript">Ranking</p></button></div>
    </div>`;

    const game = document.getElementById('game');
    const signs = document.getElementById('signs');
    const quiz = document.getElementById('quiz');
    const air = document.getElementById('air');
    const base = document.getElementById('base');
    const ranking = document.getElementById('ranking');

    game.addEventListener('click', () => {
        showSorterMenu();
    })

    signs.addEventListener('click', () => {
        showOznaczeniaMenu();
    })

    quiz.addEventListener('click', () => {
        showQuizMenu();
    })

    air.addEventListener('click', () => {
        showWeatherMenu();
    })

    base.addEventListener('click', () => {
        showBazaWiedzy();
    })

    ranking.addEventListener('click', () => {
        showRankingMenu();
    })

}






