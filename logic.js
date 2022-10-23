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
    p1 = playerSelection.toUpperCase();
    com = computerSelection;
    if (p1 == com) {
        return "It's a tie!";
    } else if ((p1 == 'ROCK' && com == 'PAPER') || (p1 == 'PAPER' && com == 'SCISSORS') || (p1 == 'SCISSORS' && com == 'ROCK')) {
        return `You lose! ${com} beats ${p1}!`;
    } else if ((p1 == 'PAPER' && com == 'ROCK') || (p1 == 'SCISSORS' && com == 'PAPER') || (p1 == 'ROCK' && com == 'SCISSORS')) {
        return `You win! ${p1} beats ${com}!`;
    }
}