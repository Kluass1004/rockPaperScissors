console.log("Rock paper scissor")
let rock=document.querySelector('#box1');
let paper=document.querySelector('#box2');
let sxr=document.querySelector('#box3');
let Selction=['rock', 'paper','sxr']
let user
let comp

rock.addEventListener('click',()=>{
    user='rock'
    console.log('rock selected')
    comp = randomSelection();
    console.log(comp)
})
paper.addEventListener('click',()=>{
    console.log('paper selected')
})
sxr.addEventListener('click',()=>{
    console.log('scrs selected')
})
function randomSelection(){
      return Selction.random()
}