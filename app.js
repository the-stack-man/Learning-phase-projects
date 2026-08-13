let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started =false;
let level=0;
let highestLevel=0;
let highestLevelPerGame=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");

        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}


function levelUp(){
    userSeq=[];
    level++;
    highestLevelPerGame++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);

    // console.log(randBtn);


    

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
        // console.log("current level: ",level);
        // let idx=level-1;
        if(userSeq[idx]===gameSeq[idx]){
            if(userSeq.length===gameSeq.length){
                setTimeout(levelUp,1000);
          
            }
            
        }else{
            if(highestLevelPerGame>highestLevel)
                highestLevel=highestLevelPerGame;
            
            h2.innerHTML=`Game Over! You scored <b>${level}</b><br>Highest Score: ${highestLevel}<br>Press any key to start`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";


            },100);
            reset();
        }
    }

    function btnPress(){
        // if(started==false)  return;
          
             let btn=this;
             userFlash(btn);
             let userColor=btn.getAttribute("id");
             console.log(userColor);
             userSeq.push(userColor);
             checkAns(userSeq.length-1);

    }
    let allBtns=document.querySelectorAll(".btn");
    for(let btn of allBtns){
        btn.addEventListener("click",btnPress);
    }



function reset(){
     gameSeq=[];
     userSeq=[];
     started =false;
     level=0;
     highestLevelPerGame=0;

}