let computerSelection;
let playerSelection;
let selection1 = 'Rock', selection2 = 'Paper', selection3 = 'Scissors';

let computerPlay = function() {
    let a = Math.round((Math.random() * 10) * 1000) / 1000;
    
    if (a <= 3.333) {
        computerSelection = 'Rock';
    } 
    else if (a <= 6.666) {
        computerSelection = 'Paper';
    } 
    else if (a <= 10) {
        computerSelection = 'Scissors';
    }
    return computerSelection;
}

let playerPlay = function() {
    playerSelection = prompt('Choose between: Rock, Paper and Scissors');
}

let rockPaperScissors =  function() {
    playerPlay();
    computerPlay();
    let result;
    let a;
    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
        a = 'win';
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
        a = 'win';
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
        a = 'win';
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        result = `You Lose! ${playerSelection} is beaten by ${computerSelection}`;
        a = 'loose';
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        result = `You Lose! ${playerSelection} is beaten by ${computerSelection}`;
        a = 'loose';
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        result = `You Lose! ${playerSelection} is beaten by ${computerSelection}`;
        a = 'loose';
    }
    else if (playerSelection == computerSelection) {
        result = `It's a tie! ${playerSelection} equals ${computerSelection}`;
    }
    
    return result;
}

function game(){
    for ( let i = 0; i < 5; i++) {
        console.log(rockPaperScissors());
    }
    if ((a = 'win') > (a = 'loose')) {
        console.log('You won!');
    }
    else if ((a = 'win') < (a = 'loose')) {
        console.log('You lost!');
    }
}