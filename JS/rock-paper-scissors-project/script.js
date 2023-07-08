function getComputerChoice(){
    let rand = Math.floor(Math.random()*3)+1;
    let computerChoice;
    switch (rand) {
        case 1:
            computerChoice = "Rock";
            break;
        
        case 2:
            computerChoice = "Paper";
            break;

        case 3:
            computerChoice = "Scissors";
            break;
    
        default:
            break;
    }
    return computerChoice;
}
function playRound(playerSelection, computerSelection) {
    playerSelection =`rOcK`
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log(playerSelection);
    if (playerSelection == computerSelection) {
        return (`Tie! no points will be given`);
    }
    let output;
    if(playerSelection == `Rock`){
        if (computerSelection == `Paper`) {
            output = `You lose! `;
        }
        else{
            output = `You win! `;
        }
    }
    if(playerSelection == `Paper`){
        if (computerSelection == `Scissors`) {
            output = `You lose! `;
        }
        else{
            output = `You win! `;
        }
    }
    if(playerSelection == `Scissors`){
        if (computerSelection == `Rock`) {
            output = `You lose! ` ;
        }
        else{
            output = `You win! `;
        }
    }
    if (output == `You lose! `) {
        return output + computerSelection + ` beats ` + playerSelection; 
    }
    else    
        return output + playerSelection + ` beats ` + computerSelection; 

}

