let HumanScore = 0;
let CompScore = 0;
let round = 0;
const roundRes=document.querySelector(".roundRes");
const himg=document.querySelector(".himg");
const cimg=document.querySelector(".cimg");
const cimage=document.createElement("img");
const himage=document.createElement("img");
cimage.src="/home/riddhika05/Desktop/repos/Rock-Paper-Scissors-TOP/Ques.avif";
himage.src="/home/riddhika05/Desktop/repos/Rock-Paper-Scissors-TOP/Ques.avif";
himg.appendChild(himage);
cimg.appendChild(cimage);

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice ==0)
        return "Rock";
    else
        if (choice ==1)
            return "Scissor";
        else
            return "Paper";
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if(computerChoice==="rock")
        cimage.src="/home/riddhika05/Desktop/repos/Rock-Paper-Scissors-TOP/ROCK.avif";
    else
    if(computerChoice==="paper")
        cimage.src="/home/riddhika05/Desktop/repos/Rock-Paper-Scissors-TOP/PAPER.avif";
    else 
     if(computerChoice==="scissors")
        cimage.src="/home/riddhika05/Desktop/repos/Rock-Paper-Scissors-TOP/SCISSORS.avif";
     if(humanChoice==="rock")
        himage.src="/home/riddhika05/Desktop/repos/Rock-Paper-Scissors-TOP/ROCK.avif";
    else
    if(humanChoice==="paper")
        himage.src="/home/riddhika05/Desktop/repos/Rock-Paper-Scissors-TOP/PAPER.avif";
    else 
     if(humanChoice==="scissors")
        himage.src="/home/riddhika05/Desktop/repos/Rock-Paper-Scissors-TOP/SCISSORS.avif";
    if (humanChoice === computerChoice) {
        roundRes.textContent="Tie in this round !";
        HumanScore++;
        CompScore++;
    }

    else
        if (humanChoice === "rock" && computerChoice === "scissor" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissor" && computerChoice === "paper") {
            roundRes.textContent="Congrats! " + humanChoice + " beats " + computerChoice;
            HumanScore++;
        }
        else {
             roundRes.textContent="You Lose " + computerChoice + " beats " + humanChoice;
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
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissor = document.querySelector("#scissors");
    rock.addEventListener('click', () => {
        playRound('rock', getComputerChoice());
    });
    paper.addEventListener('click', () => {
        playRound('paper', getComputerChoice());
    });
    scissor.addEventListener('click', () => {
        playRound('scissors',getComputerChoice());
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
            setTimeout(function(){
                location.reload();
            }, 2000);


}
playGame();
