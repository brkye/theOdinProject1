let playerCount = 0;
let computerCount = 0;
const body = document.getElementsByTagName('body');
const roundText =document.getElementById('round');
const player = document.getElementById(`playerScore`);
const computer = document.getElementById('computerScore');
const winnerText = document.getElementById('winner');
const condition = document.getElementById('condition');
const buttons = document.querySelectorAll('.buttons');
const buttonParent = document.getElementsByClassName('buttons');
let removed;



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
        computerCount++;
        return output + computerSelection + ` beats ` + playerSelection; 
    }
    else    
        playerCount++;
        return output + playerSelection + ` beats ` + computerSelection; 

}

    buttons.forEach((button) => {
        button.addEventListener(`click`, () => {
            if (playerCount == 5 || computerCount ==5) {
                condition.textContent = "Game restarted. First to score 5 wins the game."
                playerCount = 0;
                computerCount = 0;
                player.textContent = `Player = ` + playerCount;
                computer.textContent = `Computer = ` + computerCount;
                roundText.textContent = '';
                winnerText.textContent = '';
                return;

            }
            condition.textContent = '';
            playerSelection = button.id;
            round = playRound(playerSelection, getComputerChoice());
            roundText.textContent = round;
            player.textContent = `Player = ` + playerCount;
            computer.textContent = `Computer = ` + computerCount;
            if (playerCount == 5) {
                winnerText.textContent = ' Player won! ';
                condition.textContent = 'Press any button to restart the game.';
                return;
            }
            if (computerCount == 5) {
                winnerText.textContent = ' Computer won! ';
                condition.textContent = 'Press any button to restart the game.';
                return; 
            }
        });
    });