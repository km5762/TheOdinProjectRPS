const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const human = document.querySelector('.human .score');
const js = document.querySelector('.js .score');
const reportWinner = document.querySelector('h3')
let gameEnd = false;

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
    if (!gameEnd) {
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();

        if (playerSelection === computerSelection) {
            reportWinner.innerHTML = "Tie!";
        } else if (playerSelection === "paper" && computerSelection === "scissors" || 
            playerSelection === "rock" && computerSelection === "paper" ||
            playerSelection === "scissors" && computerSelection === "rock") {
            reportWinner.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}`;
            js.innerHTML++;
        } else {
            reportWinner.innerHTML = `You win! ${playerSelection} beats ${computerSelection}`;
            human.innerHTML++;
        }

        if (human.innerHTML >= 5) {
            reportWinner.innerHTML = 'You win!!! :)'
            reportWinner.setAttribute('style', 'color:green; text-shadow: 5px 5px 1px #0b4f0e;')
            gameEnd = true;
        } else if (js.innerHTML >= 5) {
            reportWinner.innerHTML = 'You lose!!! :('
            reportWinner.setAttribute('style', 'color:red; text-shadow: 5px 5px 1px #7a0707;')
            gameEnd = true;
        }
    }
}

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});