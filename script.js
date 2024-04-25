let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let msgContainer = document.querySelector('.message-Container');
let msg = document.querySelector('#msg');
let p = document.querySelector('p');
let unhide = document.querySelector('.hide');
let gif = document.querySelector('img');
let container = document.querySelector('.container');
alert('Welcome to The TIC TAC TOE Game');
let count = 0;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
]

// setting players turn 
let turnO = true;
boxes.forEach((box)=>{
    box.addEventListener('click', ()=>{
        // console.log('the box was clicked');
        if (turnO){
            box.innerText='O';
            turnO = false;
        }else{
            box.innerText='X';
            turnO = true;
        }
        box.disabled = true;
        count++;
        console.log(count);
        let iswinner = checkWinner();
        
        if (count === 9 && !iswinner){
            Draw();
        } 
    });
});

const Draw = () => {
    msg.innerText='Oops! the match is draw';
    // unhide.style.display='block';
    msgContainer.classList.remove('hide');
    DisableBoxes();
};

//reset function for game reset.
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    unhide.style.display='none';
    container.classList.remove('hide');
    }

//disableBoxes function used here to do not allow to click any boxes after win
const DisableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
// enableBoxes function is used here to remove restriction for click and removing inner text
const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

//here this function is used to show the winner after win
const showWinner = (winner) =>{
    msg.innerText = `Congratulations winner is ${winner}`;
    unhide.style.display = 'block';
    msg.style.fontSize = '2rem';
    DisableBoxes();
};


//checking for the patterns and getting winners if pattern matches.
const checkWinner = () =>{
    for (let pattern of winPattern){
        let Pos1Val = boxes[pattern[0]].innerText;
        let Pos2Val = boxes[pattern[1]].innerText;
        let Pos3Val = boxes[pattern[2]].innerText;

        if (Pos1Val != '' && Pos2Val != '' && Pos3Val != ''){
            if (Pos1Val == Pos2Val && Pos2Val ==Pos3Val){
                console.log('winner', Pos1Val);
                showWinner(Pos1Val);  
                container.classList.add('hide');
                return true;
            }
        }
    }
}
reset.addEventListener('click', resetGame);

gif.style.height='60vh';
gif.style.display='flex';
gif.style.margin='auto';
