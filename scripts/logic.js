let userScore = 0;
let comScore = 0;

let move1 = document.querySelector('#move1');
let move2 = document.querySelector('#move2');

let result = document.querySelector('#text-result');
let score = document.querySelector('#score');

let btnRock = document.querySelector('#btn-rock');
let btnPaper = document.querySelector('#btn-paper');
let btnScissors = document.querySelector('#btn-scissors');



let playRock = () => {
    playRound('ROCK', getComputerChoice());
}

let playPaper = () => {
    playRound('PAPER', getComputerChoice());
}

let playScissors = () => {
    playRound('SCISSORS', getComputerChoice());
}

activateButtons();

function activateButtons() {
    btnRock.addEventListener('click', playRock);


    btnPaper.addEventListener('click', playPaper);


    btnScissors.addEventListener('click', playScissors);
}

function ceaseButtons() {
    btnRock.removeEventListener('click', playRock);


    btnPaper.removeEventListener('click', playPaper);


    btnScissors.removeEventListener('click', playScissors);
}


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 1) {
        return 'ROCK';
    } else if (choice == 2) {
        return 'PAPER';
    } else {
        return 'SCISSORS'
    }
}

function playRound(playerSelection, computerSelection) {
    p1 = playerSelection;
    if (p1 == 'ROCK') {
        move1.style.backgroundImage = "url('assets/rock.png')";
    } else if (p1 == 'PAPER') {
        move1.style.backgroundImage = "url('assets/paper.png')";
    } else {
        move1.style.backgroundImage = "url('assets/scissors.png')"
    }

    com = computerSelection;
    if (com == 'ROCK') {
        move2.style.backgroundImage = "url('assets/rock.png')";
    } else if (com == 'PAPER') {
        move2.style.backgroundImage = "url('assets/paper.png')";
    } else {
        move2.style.backgroundImage = "url('assets/scissors.png')"
    }

    if (p1 == com) {
        result.textContent = "It's a tie!";
    } else if ((p1 == 'ROCK' && com == 'PAPER') || (p1 == 'PAPER' && com == 'SCISSORS') || (p1 == 'SCISSORS' && com == 'ROCK')) {
        result.textContent = `You lose! ${com} beats ${p1}!`;
        comScore++;
    } else if ((p1 == 'PAPER' && com == 'ROCK') || (p1 == 'SCISSORS' && com == 'PAPER') || (p1 == 'ROCK' && com == 'SCISSORS')) {
        result.textContent = `You win! ${p1} beats ${com}!`;
        userScore++;
    } else {
        result.textContent = 'Oops! Something went wrong! Please try again!';
    }

    score.textContent = `You: ${userScore} | Monster: ${comScore} `;

    if (userScore >= 5) {
        result.innerHTML = 'You won! | <span style="text-decoration: underline; cursor: pointer;" onclick="reset();">PLAY AGAIN?</span>';
        ceaseButtons();
    } else if (comScore >= 5) {
        result.innerHTML = 'You lost! | <span style="text-decoration: underline; cursor: pointer;" onclick="reset();">PLAY AGAIN?</span>';
        ceaseButtons();
    }
}

function reset() {
    userScore = 0;
    comScore = 0;
    score.textContent = "You: 0 | Monster: 0";
    result.textContent = "";
    move1.style.backgroundImage = "";
    move2.style.backgroundImage = "";
    activateButtons();
}