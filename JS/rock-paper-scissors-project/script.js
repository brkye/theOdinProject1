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
getComputerChoice();
