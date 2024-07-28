let rock=document.querySelector(".img-rock")
let paper=document.querySelector(".img-paper")
let scissors=document.querySelector(".img-scissors")
let yourScore=document.querySelector(".your-score")
let computerScore=document.querySelector(".computer-score")
let status=document.querySelector(".text-status")
let winColor=document.querySelector(".box-around-text")

let your=0; //your score
let computer=0; //computer score


// 0->rock
// 1->paper
// 2->scissors


rock.addEventListener("click", function(){
    let randomNum = Math.floor(Math.random() * 3)
    if(randomNum==0){
        status.innerHTML="The game is a draw"
        winColor.style.backgroundColor="#FFFF80"
    }
    else if(randomNum==1){
        computer++
        computerScore.innerHTML = `Computer: ${computer}`
        status.innerHTML="The computer won the game"
        winColor.style.backgroundColor="#FF0000"
    }
    else if(randomNum==2){
        your++
        yourScore.innerHTML = `You: ${your}`
        status.innerHTML="You won the game"
        winColor.style.backgroundColor="#06D001"
    }

})

paper.addEventListener("click", function(){
    let randomNum = Math.floor(Math.random() * 3)
    if(randomNum==0){
        your++
        yourScore.innerHTML = `You: ${your}`
        status.innerHTML="You won the game"
        winColor.style.backgroundColor="#06D001"
    }
    else if(randomNum==1){
        status.innerHTML="The game is a draw"
        winColor.style.backgroundColor="#FFFF80"
    }
    else if(randomNum==2){
        computer++
        computerScore.innerHTML = `Computer: ${computer}`
        status.innerHTML="The computer won the game"
        winColor.style.backgroundColor="#FF0000"
    }
})

scissors.addEventListener("click", function(){
    let randomNum = Math.floor(Math.random() * 3)
    if(randomNum==0){
        computer++
        computerScore.innerHTML = `Computer: ${computer}`
        status.innerHTML="The computer won the game"
        winColor.style.backgroundColor="#FF0000"
    }
    else if(randomNum==1){
        your++
        yourScore.innerHTML = `You: ${your}`
        status.innerHTML="You won the game"
        winColor.style.backgroundColor="#06D001"
    }
    else if(randomNum==2){
        status.innerHTML="The game is a draw"
        winColor.style.backgroundColor="#FFFF80"
    }
})