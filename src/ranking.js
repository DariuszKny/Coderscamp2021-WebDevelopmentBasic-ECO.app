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
    
    const rankingquiz= JSON.parse(localStorage.getItem('quizRanking')) || [];
    const rankinggame= JSON.parse(localStorage.getItem('gameRanking')) || [];

    let ol= document.querySelector('#username');
    let ul2= document.querySelector('#score');

    rankingquiz.forEach (wynik => {
        let li=document.createElement("li"); 
        let li2=document.createElement("li2");    
        li.innerHTML= wynik.name;
        li2.innerHTML= wynik.score;

        ol.appendChild(li);
        ul2.appendChild(li2);
       });

       let olg= document.querySelector('#usernameg');
       let ul2g= document.querySelector('#scoreg');

     rankinggame.forEach(wynik => {
        let li3=document.createElement("li3"); 
        let li4=document.createElement("li4");    
                
         li3.innerHTML= wynik.name;
         li4.innerHTML= wynik.score;
                     
         olg.appendChild(li3);
         ul2g.appendChild(li4);
                 
        });
}  
        
     
    export function saveHighScore  (score, name, ranking) {
        const rankingprint= JSON.parse(localStorage.getItem(ranking)) || [];
        const MAX_HIGH_SCORES = 15;

            let wynik={
                score: score,
                name: name,
            }

            rankingprint.push(wynik);
              rankingprint.sort((a, b) => b.score - a.score);
              rankingprint.splice(MAX_HIGH_SCORES);
    
            localStorage.setItem(ranking, JSON.stringify(rankingprint));
        }
            

        
        

