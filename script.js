const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const roundText = document.getElementById("round");
const playerChoiceText = document.getElementById("player-choice");
const computerChoiceText = document.getElementById("computer-choice");
const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");
const roundResultText = document.getElementById("round-result");
const gameResultText = document.getElementById("game-result");
const roundScreen = document.getElementById("round-screen");
const gameoverScreen = document.getElementById("gameover-screen");
const resultBtn = document.getElementById("result-button");
const restartBtn = document.getElementById("restart");

roundScreen.classList.add("visible");
gameoverScreen.classList.add("hide");


// Declare player scores
let playerScore = 0;
let computerScore = 0;
let round = 0;


// Randomize computer choice
function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Play Round
function playRound (player, computer) {
    let humanSelection = player.toLowerCase();
    let computerSelection = computer.toLowerCase();

    roundText.innerText = round;
    playerChoiceText.innerText = player;
    computerChoiceText.innerText = computer;

    if(humanSelection === "rock" && computerSelection === "paper"){
        roundResultText.innerText = "You Lose! Paper beats Rock.";
        computerScore++;
    }else if(humanSelection === "paper" && computerSelection === "scissors"){
        roundResultText.innerText = "You Lose! Scissors beats Paper."
        computerScore++;
    }else if(humanSelection === "scissors" && computerSelection === "rock"){
        roundResultText.innerText = "You Lose! Rock beats Scissors."
        computerScore++;
    }else if(humanSelection === computerSelection){
        roundResultText.innerText = "It's a draw!"
    }else{
        roundResultText.innerText = `You Win! ${player} beats ${computer}`
        playerScore++;
    }


    if(round === 5){
        resultBtn.classList.add("button-show");
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

// GameResult
function gameResult () {
    if(playerScore > computerScore){
        gameResultText.innerText = "Congratulations!! You Win!!"
    }else if(playerScore === computerScore){
        gameResultText.innerText = "It's a Draw!!"
    }else if(computerScore > playerScore){
        gameResultText.innerText = "Oops... You Lose!!"
    }
}

rockBtn.addEventListener("click" , () => {
    let playerChoice = rockBtn.textContent;
    console.log(playerChoice)
    let computerChoice = getComputerChoice();
    round++;
    playRound(playerChoice,computerChoice);
})

paperBtn.addEventListener("click", () => {
    let playerChoice = paperBtn.textContent;
    console.log(playerChoice)
    let computerChoice = getComputerChoice();
    round++;
    playRound(playerChoice,computerChoice);
})

scissorsBtn.addEventListener("click", () => {
    let playerChoice = scissorsBtn.textContent;
    console.log(playerChoice)
    let computerChoice = getComputerChoice();
    round++;
    playRound(playerChoice,computerChoice);
})

resultBtn.addEventListener("click", () => {
    roundScreen.classList.remove("visible");
    roundScreen.classList.add("hide");
    gameoverScreen.classList.add("visible");
    computerScoreText.innerText = computerScore;
    playerScoreText.innerText = playerScore;
    gameResult();
})

// Restart Button
restartBtn.addEventListener("click", () => {
    round = 0;
    computerScore = 0;
    playerScore = 0;
    roundText.innerText = "-";
    playerChoiceText.innerText = "-";
    computerChoiceText.innerText = "-";
    roundResultText.innerText = "";
    resultBtn.classList.remove("button-show");
    gameoverScreen.classList.remove("visible");
    roundScreen.classList.remove("hide");
    roundScreen.classList.add("visible");
    gameoverScreen.classList.add("hide");
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
})


