let HumanScore = 0;
let CompScore = 0;
let round = 0;
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


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("Tie in this round !");
        HumanScore++;
        CompScore++;
    }

    else
        if (humanChoice === "rock" && computerChoice === "scissor" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissor" && computerChoice === "paper") {
            console.log("Congrats! " + humanChoice + " beats " + computerChoice);
            HumanScore++;
        }
        else {
            console.log("You Lose " + computerChoice + " beats " + humanChoice);
            CompScore++;
        }
    const hscore = document.querySelector(".hscore");
    const cscore = document.querySelector(".cscore");
    hscore.innerHTML = HumanScore;
    cscore.innerHTML = CompScore;
    round++;
    const roundn = document.querySelector("span");
    roundn.innerHTML = round;
    if (round === 5)
        finalScore();

}

function playGame() {
    const computerSelection = getComputerChoice();
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissor = document.querySelector("#scissors");
    rock.addEventListener('click', () => {
        playRound('rock', computerSelection);
    });
    paper.addEventListener('click', () => {
        playRound('paper', computerSelection);
    });
    scissor.addEventListener('click', () => {
        playRound('scissors', computerSelection);
    });
    console.log(round);
}
function finalScore() {
   const result=document.querySelector(".finalResult");
    if (HumanScore > CompScore)
        result.textContent = "You win !";
    else
        if (HumanScore < CompScore)
            result.textContent = "You lose !";
        else
            result.textContent = "Tie!";


}
playGame();
