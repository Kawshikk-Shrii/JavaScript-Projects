let wins= 0;
let draws = 0;
let losses= 0;
let emoji ={
    "rock" : '✊',
    "paper":'✋',
    "scissor":'✌️'}

let player = document.querySelector("#player");
let computer = document.querySelector("#computer");
let result = document.querySelector(".result");
let win = document.querySelector(".win-score");
let loss = document.querySelector(".loss-score");
let drawn = document.querySelector(".draw-score");

const choices=document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        player.innerText = emoji[userChoice];
        playGame(userChoice);
    })
})

const getComputerChoice=() =>{
    let options = ['rock','paper','scissor'];
    let index = Math.floor(Math.random() * 3);
    let output =options[index];
    
    computer.innerText = emoji[output] ;
    return output;
}

const draw =() => {
    result.innerText="! Game is Draw !";
    result.style.color = "rgb(227, 236, 55)";
    draws++;
    drawn.innerText = draws;
}

const showWinner=(userWin) =>{
    
    if(userWin){
        result.innerText="You Won !!!";
        result.style.color = "#30b918"; // green for win
        wins++;
        win.innerText = wins;
    }
    else{
        result.innerText="You Lose !!!";
        result.style.color = "red";
        losses++;
        loss.innerText = losses;
    }
}

const playGame = (userChoice) =>{
    let computerChoice =getComputerChoice();
    let userWin;

    if(userChoice == computerChoice){
       draw();
    }

    else{

        if(userChoice == 'rock'){
            userWin = computerChoice == "paper" ? false : true ;
        }
        else if(userChoice == 'paper'){
            userWin = computerChoice == "scissor" ? false : true ;
        }
        else {
            userWin = computerChoice == "rock" ? false : true ;
        }
        showWinner(userWin) ;
    }
    
}

let reset = document.querySelector(".reset")
reset.addEventListener(("click"), ()=> {
    wins=0;
    losses=0;
    draws=0;
    win.innerText = 0;
    drawn.innerText = 0;
    loss.innerText = 0;
    result.style.color = "white";
player.innerText = "?";
computer.innerText = "?";
result.innerText="Game Reset ! Select your Choice"
})
