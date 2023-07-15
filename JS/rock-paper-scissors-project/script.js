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
function playRound(playerSelection = `Rock`, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
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
    else if(playerSelection == `Paper`){
        if (computerSelection == `Scissors`) {
            output = `You lose! `;
        }
        else{
            output = `You win! `;
        }
    }
    else if(playerSelection == `Scissors`){
        if (computerSelection == `Rock`) {
            output = `You lose! ` ;
        }
        else{
            output = `You win! `;
        }
    } 
    else {
        playerSelection = `Rock`;
        if (playerSelection == computerSelection) 
            return (`Tie! no points will be given`);
        else if (computerSelection == `Paper`) 
            output = `You lose! `;
        else
            output = `You win! `;         
    }
    

    if (output == `You lose! `) {
        return output + computerSelection + ` beats ` + playerSelection; 
    }
    else    
        return output + playerSelection + ` beats ` + computerSelection; 

}
function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < playerCount != 5 && computerCount != 5 ; i++) {
        let playerSelection = prompt (`Choose your weapon!`, `Rock-Paper-Scissors`);
        let round = `nothing`;
        if (playerSelection) {
            round = playRound(playerSelection, getComputerChoice());
            console.log(round);   
        }
        if (round.charAt(4) == `w`)
            playerCount++;
        else if(round.charAt(4) == `l`)
            computerCount++;
        else{}
        console.log(`Player score = ` + playerCount);
        console.log(`Computer score = ` + computerCount);
    }
}
game();

