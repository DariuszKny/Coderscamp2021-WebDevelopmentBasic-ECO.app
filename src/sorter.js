export function  showSorterMenu() {
    document.querySelector('#app').innerHTML = `  
    <div class="container"></div>`;

    removeReferenceLinks();
    makeReferenceLinks('./src/oznaczenia.css');

    // const head = document.querySelector('head');
    // let link = document.createElement('link');
    // link.setAttribute('rel', 'stylesheet');
    // link.setAttribute('href', './src/sorter.css');
    // head.appendChild(link);

    const APP = document.querySelector('.container');
    const GRID_WIDTH = 5;
    const AIR_HEIGHT = 8;

    const AIR_SIZE = GRID_WIDTH * AIR_HEIGHT;

    let containers = [
        {
          sort: 'bio',
          color: 'url(./img-sorter/containers/bio.png)'
        },
        {
          sort: 'paper',
          color: 'url(./img-sorter/containers/paper.png)'
        },
        {
          sort: 'plastic',
          color: 'url(./img-sorter/containers/plastic.png)'
        },
        {
          sort: 'glass',
          color: 'url(./img-sorter/containers/glass.png)'
        },
        {
          sort: 'mix',
          color: 'url(./img-sorter/containers/mix.png)'
        },
    ];

    const trash = [
      {
        sort: 'plastic',
        path: 'url(./img-sorter/trash/aluminium-foil.png)'
      },
      {
        sort: 'plastic',
        path: 'url(./img-sorter/trash/plastic-bag.png)'
      },
      {
        sort: 'plastic',
        path: 'url(./img-sorter/trash/plastic-bottle.png)'
      },
      {
        sort: 'plastic',
        path: 'url(./img-sorter/trash/puszka.png)'
      },
      {
        sort: 'glass',
        path: 'url(./img-sorter/trash/glass_bottle.png)'
      },
      {
        sort: 'glass',
        path: 'url(./img-sorter/trash/glass-bottles.png)'
      },
      {
        sort: 'paper',
        path: 'url(./img-sorter/trash/box-paper.png)'
      },
      {
        sort: 'paper',
        path: 'url(./img-sorter/trash/newspaper.png)'
      },
      {
        sort: 'bio',
        path: 'url(./img-sorter/trash/apple.png)'
      },
      {
        sort: 'bio',
        path: 'url(./img-sorter/trash/banana.png)'
      },
      {
        sort: 'bio',
        path: 'url(./img-sorter/trash/leaves.png)'
      },
      {
        sort: 'mix',
        path: 'url(./img-sorter/trash/cup-mix.png)'
      },
      {
        sort: 'mix',
        path: 'url(./img-sorter/trash/tube.png)'
      },
      {
        sort: 'mix',
        path: 'url(./img-sorter/trash/fish-bone.png)'
      },
      {
        sort: 'mix',
        path: 'url(./img-sorter/trash/toy.png)'
      },
    ];

    let width =  GRID_WIDTH;
    let interval = 1000;
    let timerId;
    let nextRandom = 0;
    let score = 0;
    let lives = 3;
    let countForSpeed = 0;   //dla speedUp() function

    //create all the cells for grid
    
    const grid = createGrid();
    const scoreDisplay = createScoreDisplay();
    const gameOverDisplay = gameOverMenu();
  
    let cells = Array.from(document.querySelectorAll('.cell')); 
    const showScore = document.querySelector('.score_current');
    const showLives = document.querySelector('.lives_current');
    const startButton = document.querySelector('.btn-start');
    
    function createGrid() { 
        let cellsWrapper = document.createElement('div');
        cellsWrapper.classList.add('wrapper');
        APP.appendChild(cellsWrapper);

        for (let i = 0; i < AIR_SIZE; i++) {
            let gridElement = document.createElement('div');
            gridElement.classList.add('cell');
            gridElement.classList.add('trash');
            cellsWrapper.appendChild(gridElement);
        }

        containers.forEach(el => {
            let gridElement = document.createElement('div');
            gridElement.classList.add('cell');
            gridElement.classList.add('containers');
            gridElement.setAttribute('sort', `${el.sort}`);
            gridElement.style.backgroundImage = el.color;
            cellsWrapper.appendChild(gridElement);
        });
    }

    function createScoreDisplay() {
      let display = document.createElement('section');
      display.classList.add('score');
      let h2Score = document.createElement('h2');
      h2Score.innerHTML = 'Score';
      h2Score.classList.add('score_heading');
      display.appendChild(h2Score);
      let scoreDiv = document.createElement('div');
      scoreDiv.classList.add('score_current');
      scoreDiv.innerHTML = '0';
      display.appendChild(scoreDiv);
      let h3Lives = document.createElement('h3');
      h3Lives.innerHTML = 'Lives';
      h3Lives.classList.add('score_lives-heading');
      display.appendChild(h3Lives);
      let livesDiv = document.createElement('div');
      livesDiv.classList.add('lives_current');
      livesDiv.innerHTML = '3';
      display.appendChild(livesDiv);
      APP.appendChild(display);
      let startBtn = document.createElement('button');
      startBtn.classList.add('btn-start');
      startBtn.classList.add('btn');
      startBtn.innerHTML = 'Start';
      display.appendChild(startBtn);
    }

    function gameOverMenu() {
      let gameOverWrapper = document.createElement('div');
      gameOverWrapper.classList.add('game-over');
      gameOverWrapper.innerHTML = '<h2>Oops... The game is over!</h2><h3>Your score is:</h3>';
      APP.appendChild(gameOverWrapper);
    }

    startButton.addEventListener('click', () => {
      startButton.classList.toggle('selected');
      if(startButton.innerHTML === 'Start') {
        startButton.innerHTML = 'Pause';
      } else startButton.innerHTML = 'Start';
      if (timerId) {
        document.removeEventListener('keydown', control);
        clearInterval(timerId);
        timerId = null;
      } else {
        document.addEventListener('keydown', control);
        draw();
        timerId = setInterval(move, 1000);
        nextRandom = Math.floor(Math.random() * trash.length);
      }
    });

    function control(e) {
        if (e.keyCode === 39) {
          moveRight();
        } else if (e.keyCode === 37) {
          moveLeft();
        } else if (e.keyCode === 40) {
          move(); 
        }  
      }

    let random = Math.floor(Math.random() * trash.length);
    let current = trash[random];
    
    //move the trash down -- move()
    let currentPosition = 2;

    function draw() {
      cells[currentPosition].style.backgroundImage = current.path;
    }

    function undraw() {
      cells[currentPosition].style.backgroundImage = 'none';
    }

    function move() {
      undraw();
      currentPosition = currentPosition += width;
      stopMoving();
      draw();
    }

    function moveRight() {
      undraw();
      const isAtRight = currentPosition % width === width - 1;
      if (!isAtRight) currentPosition += 1;
      draw();
    }

    function moveLeft() {
      undraw();
      const isAtRight = currentPosition % width === 0;
      if (!isAtRight) currentPosition -= 1;
      draw();
    }

    
    function stopMoving() {
    // if 'containers' are on the next row
      if(cells[currentPosition].classList.contains('containers')) {
        addScore();

        // start a new item falling
        random = nextRandom;
        nextRandom = Math.floor(Math.random() * trash.length)
        current = trash[random];
        currentPosition = 2;
        speedUp();
        gameOver(); 
      }
    }

    function addScore() {
      if(cells[currentPosition].getAttribute('sort') === current.sort) {
        score += 10;
        showScore.textContent = score;
      } else {
        lives -= 1;
        showLives.textContent = lives;
      }
    }

    function speedUp() {
      if(countForSpeed === 5) {
        countForSpeed = 0;
        clearInterval(timerId);
        timerId = setInterval(move, interval -= 100);
      } else {
        countForSpeed += 1;
      }
    }

    function gameOver() {
      if(lives === 0) {
        clearInterval(timerId);
        timerId = null;
        addTheLastScore();
        document.querySelector('.game-over').classList.add('active');
        document.removeEventListener('keydown', control);
      }
    }

    function addTheLastScore() {
      let lastScoreWrapper = document.createElement('div');
      lastScoreWrapper.classList.add('game-over__score');

      let scoreDiv = document.createElement('div');
      scoreDiv.classList.add('game-over__score_value');
      let currentScore = document.querySelector('.score_current');
      localStorage.sorterScore = currentScore.innerHTML;
      scoreDiv.textContent = currentScore.innerHTML;
      lastScoreWrapper.appendChild(scoreDiv);

      let nameInput = document.createElement('input');
      nameInput.classList.add('game-over__score_input')
      nameInput.setAttribute('id', 'nameg');
      nameInput.setAttribute('name', 'nameg');
      nameInput.setAttribute('type', 'text');
      nameInput.setAttribute('maxlength', '15');
      lastScoreWrapper.appendChild(nameInput);

      let approveBtn = document.createElement('button');
      approveBtn.classList.add('btn-approve');
      approveBtn.classList.add('btn');
      approveBtn.innerHTML = 'Add my score!';
      lastScoreWrapper.appendChild(approveBtn);
      approveBtn.addEventListener('click', addAppScore);

      let restartBtn = document.createElement('button');
      restartBtn.classList.add('btn-restart');
      restartBtn.classList.add('btn');
      restartBtn.innerHTML = 'Restart';
      lastScoreWrapper.appendChild(restartBtn);
      restartBtn.addEventListener('click', restartFn);

      let gameOverParent = document.querySelector('.game-over');
      gameOverParent.appendChild(lastScoreWrapper);

    }

    function addAppScore() {
      let inputName = document.querySelector('.game-over__score_input');
      if(!inputName.value) {
        inputName.classList.add('wrong');
      } else {
        inputName.classList.remove('wrong');
        let approveBtn = document.querySelector('.btn-approve');
        approveBtn.removeEventListener('click', addAppScore);
        approveBtn.setAttribute('disabled', 'disabled');

        let sorterScore = JSON.parse(localStorage.getItem('gameRanking')) || [];
        let wynik = {
          scoreg: document.querySelector('.score_current').innerHTML,
          nameg: document.querySelector('.game-over__score_input').value,
        }

        sorterScore.push(wynik);
        
        localStorage.setItem('gameRanking', JSON.stringify(sorterScore));
        }
    }

    function restartFn() {
      document.location.reload();  
    }

}
