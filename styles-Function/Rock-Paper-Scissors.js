let result = ' ';
let computerMove = ' ';
let playerMove = ' ';
let move= ' ';

let Results = {
    Wins: 0,
    Losses: 0,
    Ties: 0
}

function resetScore () {
    Results.Wins = 0;
    Results.Losses = 0;
    Results.Ties = 0;
    alert('Score Resetted');
    scoreOnPage ();
}

function scoreOnPage () {
    document.querySelector('.scoreOnScreen')
    .innerHTML = `Wins: ${Results.Wins}, Losses: ${Results.Losses}, Ties: ${Results.Ties}`;
}

function resultOnPage () {
    document.querySelector('.resultOnScreen')
    .innerHTML= `Result: ${result}`;
}

function playGame (playerMove) {

    const computerMove = computerMove2();
    
    if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You Loose';
        } 
        else if (computerMove === 'Scissors') {
            result= ('Tie');
        } 
        else if(computerMove === 'Paper') {
            result =('You Won');
        }

    }
    else if (playerMove === 'Paper'){
        if (computerMove === 'Rock') {
            result=('You Won');
        } 
        else if (computerMove === 'Scissors') {
            result=('You Loose');
        } 
        else if(computerMove === 'Paper') {
            result=('Tie');
        }
    } 
    else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
        result=('Tie');
        } 
        else if (computerMove === 'Scissors') {
            result=('You Won');
        } 
        else if(computerMove === 'Paper') {
            result=('You Loose');
        }
    }

    if (result === 'You Won') {
        Results.Wins += 1;
    }
    else if (result === 'You Loose'){
        Results.Losses += 1;
    }
    else {
        Results.Ties += 1;
    }

    scoreOnPage ();
    resultOnPage ();
    
    document.querySelector('.movesOnScreen')
    .innerHTML= `You chose: <img class="Moves" src="images/movess/${playerMove}-emoji.png">  Computer chose: <img class="Moves" src="images/movess/${computerMove}-emoji.png">`;
    
}

function computerMove2() {

    const randomNumber = Math.random();
    let computerMove = ' ';

    if (randomNumber<1/3) {
        computerMove= 'Rock' ;
    } 
    else if (randomNumber>1/3 && randomNumber<2/3) {
        computerMove= 'Scissors' ;
    } 
    else if (randomNumber>2/3) {
        computerMove= 'Paper' ;
    }
    return computerMove;
}