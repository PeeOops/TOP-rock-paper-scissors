
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

console.log(getHumanChoice());