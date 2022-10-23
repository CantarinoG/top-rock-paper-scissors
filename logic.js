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
    } else {
        return 'Oops! Something went wrong! Please try again!';
    }
}

function game() {
    let userScore = 0;
    let comScore = 0;
    for (let i = 0; i < 5; i++) {
        let p1 = prompt("Choose a value: ROCK, PAPER or SCISSORS.");
        let com = getComputerChoice();
        let result = playRound(p1, com);
        console.log(`Round ${i + 1}: ${result}`)
        if (result.includes('win')) {
            userScore++;
        } else if (result.includes('lose')) {
            comScore++;
        }
    }

    if (userScore > comScore) {
        console.log('You won the game!');
    } else if (userScore < comScore) {
        console.log('You lost the game!');
    } else {
        console.log('The game ended in a tie!');
    }
    console.log(`Score:
    You: ${userScore}
    Com: ${comScore}`);

}

game();