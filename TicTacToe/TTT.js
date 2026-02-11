let board = [
    "","","",
    "","","",
    "","",""
]
let winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let boxes = document.querySelectorAll(".box");
let player = true ;
let gameOver = false;

function computer(board){
    const emptyIndexes = board.map((val,index) => val === "" ? index : null).filter(val => val !== null);
    const randomIndex = Math.floor(Math.random() * emptyIndexes.length);
    const index =  emptyIndexes[randomIndex];
    boxes.forEach((box) =>{
            if(index == box.getAttribute("id")){
            box.innerText = "O";
            board[index]='O';
            console.log(board)

            box.style.color = "red"

            checkWin('O')
        }
    })
}


boxes.forEach((box)=>{
    
    box.addEventListener(("click"),()=>{
        if(box.innerText != "X" && box.innerText != "O" ){
            box.innerText = "X";
            board[box.getAttribute("id")]="X";
            console.log(board)
            checkWin('X')
            
            setTimeout(() => computer(board), 300);
            
            }
            })
    })
    

function checkWin(player){
    
   for (i of winPattern){
    const [a,b,c] = i;
    if(
        board[a] === player &&
        board[b] === player &&
        board[c] === player
    ){
        gameOver = true;
        setTimeout(()=> alert(player + " Wins!"),100)
        
    }
    }
}