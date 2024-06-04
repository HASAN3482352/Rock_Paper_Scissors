function getComputerChoice(){
    const rand = Math.floor(Math.random()*3) + 1;
    let opt = "";
    if(rand==1){
        opt = "ROCK";
    }else if(rand==2){
        opt = "PAPER";
    }else{
        opt = "SCISSOR";
    }
    return opt;
}
function getHumanChoice(){
    let opt = prompt("Rock, Paper or Scissor?");
    return opt;
}
function playGame(){
    let humanScore=0,computerScore=0;
    function playRound(humanChoice,computerChoice){
        if(humanChoice.toUpperCase()=="SCISSOR" && computerChoice=="ROCK"){
            alert(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }else if(humanChoice.toUpperCase()=="ROCK" && computerChoice=="PAPER"){
            alert(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }else if(humanChoice.toUpperCase()=="PAPER" && computerChoice=="SCISSOR"){
            alert(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }else if(humanChoice.toUpperCase()=="PAPER" && computerChoice=="ROCK"){
            alert(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else if(humanChoice.toUpperCase()=="SCISSOR" && computerChoice=="PAPER"){
            alert(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else if(humanChoice.toUpperCase()=="ROCK" && computerChoice=="SCISSOR"){
            alert(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }else{
            alert("No one loses");
            i--;
        }
    }
    for(i=0;i<5;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
    if(humanScore>computerScore){
        alert("You are the Winner!!!");
    }else{
        alert("The computer wins this time...");
    }
}
playGame();