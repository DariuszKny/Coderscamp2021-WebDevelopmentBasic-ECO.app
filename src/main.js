import './style.css';

document.querySelector('#app').innerHTML =  `  
<header class="header">
  <h1><a href="/">ECO APP </a></h1>
</header>
<div class="container">
    <div class="item" id="game"><button class="button"><img class="img" src='resource/18966195.jpg'> <p class="menudescript"> Gra sorter </p></button></div> 
    <div class="item" id="signs"><button class="button"><img class="img" src="resource/pet.jpg"><p class="menudescript">Oznaczenia na opakowaniach</p></button></div>
    <div class="item" id="quiz"><button class="button"><img class="img" src="resource/49455.jpg"><p class="menudescript">Quiz </p></button></div>
    <div class="item" id="air"><button class="button"><img class="img" src="resource/41284.jpg"><p class="menudescript">Jakość powietrza</p> </button></div>
    <div class="item" id="base"><button class="button"><img class="img" src="resource/2451014.jpg"> <p class="menudescript">Baza wiedzy</p></button></div>
    <div class="item" id="ranking"><button class="button"><img class="img" src="resource/puchar.png"><p class="menudescript">Ranking</p></button></div>
</div>
<footer class="footer">
  <p class="flex-item"> Projekt realizowany w ramach <a href="https://www.coderscamp.edu.pl/"><img class="logo"
        src="resource/logocoders.png"></a></p>
  <p class="flex-item"><a href="https://github.com/DariuszKny/Coderscamp2021-WebDevelopmentBasic-EcoSchool.git"> <img
        class="logo" src="resource/GitHub-Emblem.png" /></a></p>
</footer>`
;

