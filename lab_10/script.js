let cardsArray = Array.from({ length: 8 }, (_, i) => i).flatMap(i => [i, i]);
let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;
let gameStarted = false;
let moves = 0;
let score = 0;
let timer;
let timeRemaining = 300; 

let gameBoard = document.getElementById('gameBoard');
let startButton = document.getElementById('startGame');
let restartButton = document.getElementById('restartGame');
let moveCounter = document.getElementById('moveCounter');
let scoreCounter = document.getElementById('scoreCounter');
let timerDisplay = document.getElementById('timer');

function resetGame() {
    clearInterval(timer);
    gameBoard.innerHTML = '';
    moves = 0;
    score = 0;
    timeRemaining = 300;
    updateCounters();
    lockBoard = false;
    hasFlippedCard = false;
    gameStarted = false;
    [firstCard, secondCard] = [null, null];
    shuffle(cardsArray);
    createCards();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCards() {
    cardsArray.forEach((number) => {
        const card = document.createElement('div');
        card.classList.add('card', 'hidden');
        card.dataset.number = number;
        card.textContent = number;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}

function updateCounters() {
    moveCounter.textContent = `Moves: ${moves}`;
    scoreCounter.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time: ${formatTime(timeRemaining)}`;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimer() {
    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            timerDisplay.textContent = `Time: ${formatTime(timeRemaining)}`;
        } else {
            clearInterval(timer);
            alert("Time's up! Game over.");
            resetGame();
        }
    }, 1000);
}

function flipCard() {
    if (!gameStarted || lockBoard || this === firstCard || this.classList.contains('matched')) return;

    this.classList.remove('hidden');
    this.classList.add('flipped');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;
        moves++;
        checkForMatch();
        updateCounters();
    }
}

function checkForMatch() {
    if (firstCard.dataset.number === secondCard.dataset.number) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        score += 10;
        resetBoard();
        updateCounters();
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.add('hidden');
            secondCard.classList.add('hidden');
            resetBoard();
        }, 1000);
    }
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


startButton.addEventListener('click', () => {
    gameStarted = true;
    startTimer();
});


restartButton.addEventListener('click', resetGame);


resetGame();































































/* Danya4kas game */