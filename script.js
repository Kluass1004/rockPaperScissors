console.log("Rock paper scissor")
let rock=document.querySelector('#box1');
let paper=document.querySelector('#box2');
let sxr=document.querySelector('#box3');
let play=document.querySelector("#play");
let msg= document.querySelector('.msg');
let userCt=document.querySelector('#userCt')
let compCt=document.querySelector('#compCt')
let Selction=['rock', 'paper','sxr']
let user
let comp='sxr'
let userC=0;
let compC=0;
let userWin=true
rock.addEventListener('click',()=>{
    user='rock'
   play.innerText = "Play";
   play.style.backgroundColor = 'black'
})
paper.addEventListener('click',()=>{
    user='paper'
    play.innerText = "Play"
    play.style.backgroundColor = 'black'
})
sxr.addEventListener('click',()=>{
    user='sxr'
    play.innerText = "Play"
    play.style.backgroundColor = 'black'
})
play.addEventListener('click',()=>{
   
    console.log("User choice =" , user);

   randomSelection();
    console.log(" comp choice =",comp)
    if(user === comp){
        play.innerText = "The Game is drawn. Play Again"
    }
    else{
        if(user === 'rock'){
            userWin = comp == 'sxr'? true:false
        }
        else if(user === 'paper'){
            userWin = comp == 'rock'? true:false
        }
        else{
            userWin = comp == 'paper'? true:false
        }
        showWinner();
    }
   
})
function showWinner(){
    if(userWin){
        userC++;
        userCt.innerText = userC
        play.innerText = "You Win"
        play.style.backgroundColor = 'Green'
    }
    else{
        compC++;
        compCt.innerText= compC
        play.innerText = "You Lose"
         play.style.backgroundColor = 'red'
    }
}
function randomSelection(){
    comp=Selction[Math.floor([Math.random()*3])] // math.random*3 is used to crate radnom index upto 3
}