var playerSeleciton
var computerSelection;
const choices = ['Rock', 'Paper', 'Scissors'];
const userChoice = document.getElementById('userChoice');
let playerScore = 0;
let computerScore = 0;

options.onclick = function(e){
    playerSelection = e.target.id;
    random();
    userChoice.innerHTML = playerSelection;
    cpuChoice.innerHTML = computerSelection;
    gamePlay();
    winner();
}

function random() {
    computerSelection = choices[Math.floor(Math.random()*choices.length)];
}

// game play function
function gamePlay() {
    if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore+=1;
        document.getElementById('playerScore').innerHTML = playerScore;
        document.getElementById('result').innerHTML = 'You Win!';
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore+=1;
        document.getElementById('playerScore').innerHTML = playerScore;
        document.getElementById('result').innerHTML = 'You Win!'
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore+=1;
        document.getElementById('playerScore').innerHTML = playerScore;
        document.getElementById('result').innerHTML = 'You Win!';
    } else if(playerSelection === computerSelection) {
        document.getElementById('result').innerHTML = 'TIE!';
    } else {
        computerScore+=1;
        document.getElementById('computerScore').innerHTML = computerScore;
        document.getElementById('result').innerHTML = 'Computer Wins';
    }
}

function winner() {
    if(playerScore === 5 && computerScore < 5) {
        alert('You Win!!!');
    } else if (computerScore === 5 && playerScore < 5) {
        alert('You let the Computer win...');
    }
}

restart.onclick = function(e){
    window.location.reload(true);
}
