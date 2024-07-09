let HumanScore = 0;
let CompScore = 0;
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100);
    if (choice < 33)
        return "Rock";
    else
        if (choice > 66)
            return "Scissor";
        else
            return "Paper";
}
function getHumanChoice() {
    let choice = prompt("Enter Rock , Paper or Scissors");
    return choice;
}
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice)
       { console.log("Tie in this round !");
        HumanScore ++;
        CompScore ++;
       }

    else
        if (humanChoice === "rock" && computerChoice === "scissor" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissor" && computerChoice === "paper")
            {console.log("Congrats! " + humanChoice + " beats " + computerChoice);
              HumanScore++;
            }
        else
           { console.log("You Lose " + computerChoice + " beats " + humanChoice);
              CompScore++;
           }

}

function playGame()
{   let round=0;
    while(round!=5)
        {   const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
            round++;
        }
        if(HumanScore>CompScore)
            console.log("You win !");
        else
        if(HumanScore<CompScore)
          console.log("You lose !");
        else
          console.log("Tie!");
         

}
playGame();
