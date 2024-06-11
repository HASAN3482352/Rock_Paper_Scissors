const body = document.querySelector('body');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
const h1 = document.createElement('h1');
const div = document.createElement('div');
button1.textContent='rock';
button2.textContent='paper';
button3.textContent='scissor';
button1.setAttribute('id','rock');
button2.setAttribute('id','paper');
button3.setAttribute('id','scissor');
h1.textContent='Select an option:';
ul.style.cssText="list-style-type:none;display:flex;";
li1.appendChild(button1);
li2.appendChild(button2);
li3.appendChild(button3);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
body.appendChild(h1);
body.appendChild(ul);

let humanScore=0,computerScore=0;

function playRound(humanChoice,computerChoice){
    if(humanChoice.toUpperCase()=="SCISSOR" && computerChoice=="ROCK"){
        computerScore++;
        div.textContent=`You lose! ${computerChoice} beats ${humanChoice}-------->humanScore = ${humanScore} and computerScore = ${computerScore}`;
        body.appendChild(div);
    }else if(humanChoice.toUpperCase()=="ROCK" && computerChoice=="PAPER"){
        computerScore++;
        div.textContent=`You lose! ${computerChoice} beats ${humanChoice}-------->humanScore = ${humanScore} and computerScore = ${computerScore}`;
        body.appendChild(div);
    }else if(humanChoice.toUpperCase()=="PAPER" && computerChoice=="SCISSOR"){
        computerScore++;
        div.textContent=`You lose! ${computerChoice} beats ${humanChoice}-------->humanScore = ${humanScore} and computerScore = ${computerScore}`;
        body.appendChild(div);
    }else if(humanChoice.toUpperCase()=="PAPER" && computerChoice=="ROCK"){
        humanScore++;
        div.textContent=`You win! ${humanChoice} beats ${computerChoice}-------->humanScore = ${humanScore} and computerScore = ${computerScore}`;
        body.appendChild(div);
    }
    else if(humanChoice.toUpperCase()=="SCISSOR" && computerChoice=="PAPER"){
        humanScore++;
        div.textContent=`You win! ${humanChoice} beats ${computerChoice}-------->humanScore = ${humanScore} and computerScore = ${computerScore}`;
        body.appendChild(div);
    }
    else if(humanChoice.toUpperCase()=="ROCK" && computerChoice=="SCISSOR"){
        humanScore++;
        div.textContent=`You win! ${humanChoice} beats ${computerChoice}-------->humanScore = ${humanScore} and computerScore = ${computerScore}`;
        body.appendChild(div);
    }else{
        div.textContent=`No one loses-------->humanScore = ${humanScore} and computerScore = ${computerScore}`;
        body.appendChild(div);
    }
    if(humanScore == 5 || computerScore == 5){
        if(humanScore>computerScore){
            div.textContent="You are the Winner!!!";
            body.appendChild(div);
        }else{
            div.textContent="The computer wins this time...";
            body.appendChild(div);
        }
        humanScore=0;
        computerScore=0
    }
}
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
ul.addEventListener('click',(eve) => {
    let target = eve.target;
    let opt;
    switch(target.id){
        case 'rock':
            opt = 'rock';
            break;
        case 'paper':
            opt = 'paper';
            break;
        case 'scissor':
            opt = 'scissor';
            break;
    }
    playRound(opt,getComputerChoice());
});


