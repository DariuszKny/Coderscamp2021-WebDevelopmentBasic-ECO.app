export function  showRankingMenu() {
    document.querySelector('#app').innerHTML = `  
    <div class="rankingcontainer">
    <h1 class="tabtitle"> Tabela wyników </h1>

        <div class="quizbox">
        <h2 class="tabtitle"> Quiz</h2>
        <div class="qresult"> 
        <ol id="username"> 
        </ol>
           
         <ul id="score"> 
         </ul>
         </div>    
        </div>
                 
        <div class="gamebox"> 
        <h2 class="tabtitle"> Gra sorter </h2>
         <div class="gresult"> 
         <ol id="usernameg"> 
        </ol>
         
         <ul id="scoreg"> 
         </ul>
         </div>
         </div>  
         
    </div>`;

let username = document.getElementById('name');//nazwa użytkownika z quizu
let score = document.getElementById('points'); // ilość pkt z quizu
let usernameg = document.getElementById('nameg'); //nazwa użytwkownika z gry
let scoreg = document.getElementById('pointsg'); //ilość pkt z gry

const quizRanking= JSON.parse(localStorage.getItem('quizRanking')) || [];
const gameRanking = JSON.parse(localStorage.getItem('gameRanking')) || [];

const MAX_HIGH_SCORES = 20;
//funkcja wywoływana po zatwierdzeniu nazwy użytkownika quizu
document.getElementById('zatwierdz').addEventListener('click',saveHighScore);
function saveHighScore  (event) {
    event.preventDefault();

    let wynik = {
        score: score.value,
        name: username.value,
    };

    quizRanking.push(wynik);
    quizRanking.sort((a, b) => b.score - a.score);
    quizRanking.splice(MAX_HIGH_SCORES);

    localStorage.setItem('quizRanking', JSON.stringify(quizRanking));
};

let ol= document.querySelector('#username');
let ul2= document.querySelector('#score');

quizRanking.forEach(wynik => {
         let li=document.createElement("li"); 
         let li2=document.createElement("li2");    
         li.innerHTML= wynik.name;
         li2.innerHTML= wynik.score;

         ol.appendChild(li);
         ul2.appendChild(li2);
        });
//funkcja wywoływana po zatwierdzeniu nazwy użytkownika gry
    document.getElementById('zatwierdz2').addEventListener('click',saveHighScores);
    function saveHighScores  (event) {
         event.preventDefault()
        
            let wynikg={
                scoreg: scoreg.value,
                nameg: usernameg.value,
            }
        
            gameRanking.push(wynikg);
            gameRanking.sort((a, b) => b.scoreg - a.scoreg);
            gameRanking.splice(15);
        
            localStorage.setItem('gameRanking', JSON.stringify(gameRanking));

        };
        
     let olg= document.querySelector('#usernameg');
     let ul2g= document.querySelector('#scoreg');

     gameRanking.forEach(wynikg => {
                
                 let li3=document.createElement("li3"); 
                 let li4=document.createElement("li4");    
                
                 li3.innerHTML= wynikg.nameg;
                 li4.innerHTML= wynikg.scoreg;
        
                 console.log(li3,li4)
                
                 olg.appendChild(li3);
                 ul2g.appendChild(li4);
                 
                });
        }
