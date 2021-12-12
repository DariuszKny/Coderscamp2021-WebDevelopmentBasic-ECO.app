export function  showRankingMenu() {
    document.querySelector('#app').innerHTML = `  
    <div class="rankingcontainer">
    <h1 class="tabtitle"> Tabela wyników </h1>
        <div class="quizbox">
        <h2> Quiz</h2>
        <div class="qplayer> </div>
         <div class="qscore> </div>
        </div>
                 
        <div class="gamebox"> 
        <h2> Gra sorter </h2>
         <div class="gplayer"> </div>
         <div class="gscore"> </div>   </div> 
        
    </div>`;
}




// const user= {
//     name='',
//     points: ,
// }

// window.localStorage.setItem('user', JSON.stringify(user));
//window.localStorage.setItem('wynik',JSON.stringify(score));