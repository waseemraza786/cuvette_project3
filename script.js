let userScore = 0;
let computerScore=0;

let  choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
let body = document.querySelector("body");

const getCompChoice=()=>{
    //rock paper scissor
    const options = ["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game Draw";
    msg.style.backgroundColor="black";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
            userScorePara.innerText=userScore;
        console.log('you win');
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }else{
        computerScore++;
        compScorePara.innerText =computerScore;
        console.log('you lose');
        msg.innerText=`You Lose!${compChoice} beat your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}
const playGame= (userChoice)=>{

console.log("userChoice =",userChoice)
//Generate computer choice-> modular way of programming
const compChoice = getCompChoice();
console.log("comp Choice=",compChoice);
if(userChoice===compChoice){
    drawGame();

} else{
    let userWin =true;
    if(userChoice==="rock"){
        //scissor paper
        userWin=compChoice==="paper" ?false : true;
    }else if(userChoice==="paper") {
        //rock scissor
        userWin= compChoice ==="scissor" ? false:true;
    }
    else{
        userWin=compChoice=="rock" ?false:true;

    }
    showWinner(userWin,userChoice,compChoice);
}


}
choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")

        console.log("choice was clicked", userChoice);
        playGame(userChoice)
    })
    })
    
msgrule = document.querySelector(".msgrule");
console.log(msgrule)
rule = document.querySelector(".rulebtn");
console.log(rule);
cross =  document.querySelector(".cross");
cross.addEventListener("click",()=>{
    msgrule.style.visibility="hidden";
    cross.style.visibility="hidden";
    
    
})
rule.addEventListener("click",()=>{
    msgrule.style.visibility="visible";
    cross.style.visibility="visible";
})

