// 1.keypress- start game
// level 1 start
//2. btnflas  = level 1

let gameSeq=[];
let userSeq=[];
let btns=["yellow","purple","red","green"];

let started= false;
let level=0;
let h2=document.querySelector('h2');
document.addEventListener('keypress',function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)

}
function levelUp(){
    userSeq=[];
level++;
h2.innerText=`level ${level}`;

let randomInd=Math.floor(Math.random()*3);
let randomColor=btns[randomInd];
let randBtn= document.querySelector(`.${randomColor}`);
// console.log(randomInd);
// console.log(randomColor);
// console.log(randBtn);
gameSeq.push(randomColor);
console.log(gameSeq);
gameFlash(randBtn);
}
function checkAns(index){
    // console.log(`current level: ${level}`);
  
    if(userSeq[index]=== gameSeq[index]){
    if(userSeq.length == gameSeq.length){
     setTimeout(levelUp,1000);


    }
    }else{
        h2.innerHTML=`game over! your score is <b> ${level}</b> <br> press any key to start`;
        reset();
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
              document.querySelector('body').style.backgroundColor='white';
        },150);

    }
}
function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

}
let allBtns =document.querySelectorAll(".btn");
for(btn of allBtns ){
    btn.addEventListener('click',btnPress);

}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}