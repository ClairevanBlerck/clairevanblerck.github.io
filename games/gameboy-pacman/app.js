document.addEventListener('DOMContentLoaded', () => {
    const width = 28; // 28 x 28 = 784 squares
    const grid = document.querySelector ('.grid');
    const scoreDisplay = document.getElementById ('score');
    let score = 0;

    const layout = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,4,1,1,4,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,4,4,4,1,2,2,2,2,2,2,1,4,4,4,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]

    const squares = []

    //Legend
    //0 - pac-dot
    //1 - wall
    //2 - ghost-lair
    //3 - power-pellet
    //4 - empty

    // draw the grid and render it
    function createGrid() {
        for (let i=0; i < layout.length; i++) {
            const square = document.createElement('div');
            grid.appendChild(square);
            squares.push(square);

            //add layout to the board
            if (layout[i] === 0) {
                squares[i].classList.add('pac-dot', 'dot');
            } else if (layout[i] === 1) {
                squares[i].classList.add('wall');
            } else if (layout[i] === 2) {
                squares[i].classList.add('ghost-lair')
            } else if (layout[i] === 3) {
                squares[i].classList.add('power-pellet');
            }
        }
    }
    createGrid()

    //starting position of pac-man
    let pacmanCurrentIndex = 574;

    squares[pacmanCurrentIndex].classList.add('pac-man');

    //move pac-man
    function movePacman(e) {

        squares[pacmanCurrentIndex].classList.remove('pac-man');

        switch(e.keyCode) {
            // move up
            case 38:
                if(pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex -width].classList.contains('wall') && !squares[pacmanCurrentIndex -width].classList.contains('ghost-lair')) pacmanCurrentIndex -= width;
                break;

            // move right
            case 39:
                if(pacmanCurrentIndex % width <= width -1 && !squares[pacmanCurrentIndex +1].classList.contains('wall') && !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')) pacmanCurrentIndex += 1;
                // check if pacman is at the right-side exit
                if ((pacmanCurrentIndex +1) === 392) {
                    pacmanCurrentIndex = 364;
                }
                break;

            // move down
            case 40:
                if(pacmanCurrentIndex + width <= layout.length && !squares[pacmanCurrentIndex +width].classList.contains('wall') && !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')) pacmanCurrentIndex += width;
                break;

            // move left
            case 37:
                if(pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex -1].classList.contains('wall') && !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')) pacmanCurrentIndex -= 1;
                // check if pacman is at the left-side exit
                if ((pacmanCurrentIndex -1) === 363) {
                    pacmanCurrentIndex = 391;
                }
                break;
        }

        squares[pacmanCurrentIndex].classList.add('pac-man');

        pacDotEaten()
        powerPelletEaten()
        gameOver()
        checkForWin()

    }
    document.addEventListener('keyup', movePacman, pacDotEaten);

    // what happens them pac-man collides with a pac-dot
    function pacDotEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('pac-dot', 'dot')) {
            score++;
            scoreDisplay.innerHTML = score;
            squares[pacmanCurrentIndex].classList.remove('pac-dot', 'dot');
        }
    }

    //what happens when pac-man collides with a pac-dot
    function powerPelletEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
            score+=10;
            scoreDisplay.innerHTML = score;
            squares[pacmanCurrentIndex].classList.remove('power-pellet');
            ghosts.forEach(ghost => ghost.isScared = true);
            setTimeout(unScare, 10000);
        }
    }

    function unScare() {
        ghosts.forEach(ghost => ghost.isScared = false);
    }

    // ghost template
    class ghost {
        constructor (className, startIndex, speed) {
            this.className = className;
            this.startIndex = startIndex;
            this.speed = speed;
            this.currentIndex = startIndex;
            this.timerID = NaN;
            this.isScared = false;
        }
    }

    ghosts = [
        new ghost('blinky', 348, 250),
        new ghost('pinky', 376, 400),
        new ghost('inky', 351, 300),
        new ghost('clyde', 379, 500),
    ]

    //starting position of ghosts
    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className);
        squares[ghost.currentIndex].classList.add('ghost');
    });

    //moving ALL ghosts - random
    ghosts.forEach(ghost => moveGhosts(ghost))

    function moveGhosts(ghost) {
        const directions = [-1, 1, width, -width];
        let direction = directions[Math.floor(Math.random() * directions.length)];

        ghost.timerID = setInterval(function() {
            // prevent ghosts from moving into walls and another ghost
           if (!squares[ghost.currentIndex + direction].classList.contains('wall') && !squares[ghost.currentIndex + direction].classList.contains('ghost')) {
               // remove any trace of ghost
               squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghosts');
               // change direction by 1
               ghost.currentIndex += direction;
               // redraw ghost
               squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
               } else direction = directions[Math.floor(Math.random() * directions.length)];

            // add scared-ghosts class for when isScared = true
            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add('scared-ghosts');
            }

            // add pac-man ability to eat scared-ghosts
            if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
                // remove ghost
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghosts');
                ghost.currentIndex = ghost.startIndex;
                //add to score
                score += 100;
                scoreDisplay.innerHTML = score;
                // respawn ghost
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
            }

            // check to see if ghost moves into pac-man
            gameOver()

        //add unique speeds
        }, ghost.speed)
    } gameOver()

    // check to see if pac-man moves into ghost
    function gameOver() {
        if (squares[pacmanCurrentIndex].classList.contains('ghost') &&
          !squares[pacmanCurrentIndex].classList.contains('scared-ghosts')) {
          ghosts.forEach(ghost => clearInterval(ghost.timerId))
          document.removeEventListener('keyup', movePacman)
          //setTimeout(function(){ alert("Game Over"); }, 200)
          scoreDisplay.innerHTML = 'Game over';
        }
    }

    //check for a win
    function checkForWin() {
        if (score >= 274) {
          ghosts.forEach(ghost => clearInterval(ghost.timerId));
          document.removeEventListener('keyup', movePacman);
          //setTimeout(function(){ alert("You have WON!"); }, 500);
          scoreDisplay.innerHTML = 'YOU WON!';
        }
      }

})