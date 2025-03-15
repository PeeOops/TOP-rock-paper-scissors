


// Randomize computer choice
function getComputerChoice () {
    let choices = ["Rock", "Paper", "Scissors"];
    
    return choices[Math.floor(Math.random() * choices.length)];
}

// Human Choice Input
function getHumanChoice () {
    let input = prompt("Choice :");
    return input;
}



const humanSelective = getHumanChoice();
const computerSelective = getComputerChoice();

    
// Declare player scores
let humanScore = 0;
let computerScore = 0;


function playGame(){
    // Single Round
    function playRound (humanChoice, computerChoice) {
        let human = humanChoice.toLowerCase();
        let computer = computerChoice.toLowerCase();
        let round = 1;

        console.log("Round: " + round);
        console.log("You : " + human);
        console.log("Computer : " + computer);

        if (human === "rock" && computer === "paper"){
            console.log("You Lose! Paper beats Rock");
            computerScore++;
        }else if(human === "paper" && computer === "scissors"){
            console.log("You Lose! Scissors beats Paper");
            computerScore++;
        }else if(human === "scissors" && computer === "rock"){
            console.log("You Lose! Rock beats Scissors");
            computerScore++;
        }else if(human === computer) {
            console.log("It's a draw!");
        }else{
            console.log("You Win! " + human + " beats " + computer);
            humanScore++;
        }
    }

    return playRound(humanSelective, computerSelective);
}

playGame();





// // GameOver
//     for(let i = 0; i <= 5; i++){
//         playRound(humanSelective, computerSelective);
//     }


// if (round === 5){
//     if(humanScore > computerScore){
//         console.log("You Win! Score : " + humanScore);
//     }else{
//         console.log("You Lose! Score: " + computerScore);
//     }
// }