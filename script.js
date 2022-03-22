let choices;

function computerPlay() {
    choices = ["rock" , "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length )];
    return computerChoice;
}

function round(playerSelection , computerSelection) {


    console.log(computerSelection);

    let win = `Yow win! ${playerSelection} beats ${computerSelection}`;
    let lose = `Yow Lose! ${computerSelection} beats ${playerSelection}`;
    let result;
    if(playerSelection == computerSelection){
        result = "Draw!";
    }
    else if( (playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock") ){
        result = win;
    }
    else {result = lose;}

    return result;
}

let i=0 ;

function game(){
    let playerPoints = 0;
    let computerPoints = 0;

    for(let roundCount = 0 ; roundCount < 5 ; roundCount++){
        let playerSelection = (prompt("Rock,Paper or Scissors?" ,"")).toLowerCase();
        let computerSelection = computerPlay();
        let pointResult = round(playerSelection,computerSelection);
        if(pointResult.includes("win")) {
            playerPoints++;
        }
        else if(pointResult.includes("lose")){
            computerPoints++;
        }
        else{
            playerPoints++;
            computerPoints++;
        }
        alert(pointResult);

    }
    finalResult = `The score is: You ${playerPoints} - ${computerPoints} Computer`
    alert(finalResult);
}

game();