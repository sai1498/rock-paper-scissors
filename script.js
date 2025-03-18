let playerScore = 0;
let computerScore = 0;

const options = document.querySelectorAll('.option');  
const message = document.querySelector('#message');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');

const generateComputerChoice = () => {
    const choices = ['stone', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

const draw = () => {
    message.innerText = 'Draw!!!!';
    message.style.color = "black";
}

options.forEach((option) => {
    option.addEventListener("click", () => {  
        const playerChoice = option.getAttribute("id");
        playerGame(playerChoice);  
    });
});

const playerGame = (playerChoice) => {
    const computerChoice = generateComputerChoice();

    if (playerChoice === computerChoice) {
        draw();
    } else {
        let playerWins;
        
        if (playerChoice === "stone") {
            playerWins = computerChoice === "paper" ? false : true;
        } else if (playerChoice === "paper") {
            playerWins = computerChoice === "scissors" ? false : true;
        } else {
            playerWins = computerChoice === "stone" ? false : true;
        }

        showWinner(playerWins, playerChoice, computerChoice);
    }
}

const showWinner = (playerWins, playerChoice, computerChoice) => {
    if (playerWins) {
        playerScore++;
        playerScoreDisplay.innerText = playerScore;  
        message.innerText = `${playerChoice} beats ${computerChoice}. You win!`;
        message.style.color = "green";
    } else {
        computerScore++;
        computerScoreDisplay.innerText = computerScore;  
        message.innerText = `${computerChoice} beats ${playerChoice}. You lose!`;
        message.style.color = "red";
    }
}
