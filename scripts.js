function getComputerChoice() {
    let computerMove = Math.floor(Math.random() * 3);

    if (computerMove == 0) {
        return "Rock"
    } else if (computerMove == 1) {
        return "Paper"
    } else
        return "Scissors"
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection === computerSelection) {
        console.log("Tie!")
        return "tie";
    } else if (playerSelection === "paper" && computerSelection === "scissors" || 
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        return "loss"
    } else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        return "win"
    }
}

function game() {
    let computer = 0
    let user = 0

    while (computer != 3 && user != 3) {
        let playerSelection = prompt("What is your move?")
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection)
        if (result === "win") {
            user++
        } else if (result == "loss") {
            computer++
        }
        console.log(`Score: User ${user}, Computer ${computer}` )
    }

    if (computer == 3) {
        console.log("Computer wins!")
    } else {
        console.log("You win!")
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const human = document.querySelector('.human .score');
const js = document.querySelector('.js .score');
const reportWinner = document.querySelector('h3')

function updateScore(result) {
    if (human.innerHTML >= 5) {
        reportWinner.innerHTML = 'You win! :)'
        reportWinner.setAttribute('style', 'color:green')
    } else if (js.innerHTML >=  5) {
        reportWinner.innerHTML = 'You lose! :('
        reportWinner.setAttribute('style', 'color:red')
    } else {
        if (result === 'win') {
            human.innerHTML++;
        } else {
            js.innerHTML++;
        }
    }
}

rock.addEventListener('click', () => {
    updateScore(playRound('rock', getComputerChoice()));
});

paper.addEventListener('click', () => {
    updateScore(playRound('paper', getComputerChoice()));
});

scissors.addEventListener('click', () => {
    updateScore(playRound('scissors', getComputerChoice()));
});