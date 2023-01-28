let button = document.getElementsByTagName("button")[0];
let input = document.getElementsByTagName("input")[0];
let sBox = document.querySelector(".suggestion-box");
let scoreBoard  = document.querySelector(".score span"); 
let rev = document.querySelector(".revealer")

let ans = Math.ceil(Math.random() * 100) % 21;
let score = 10;
function handleClick(){
    let val = +input.value;
    if(val > 20 || val < 1){
        sBox.innerText = "Enter Valid Number";
        sBox.style = 'background-color: red'
    }
    else if(val === ans){
    sBox.textContent = "Yahhh!!! You Won the Game. Your Guess is Correct";

}
    else{
        if(val > ans) sBox.innerText = "Enter small number";
        else sBox.innerText  = "Enter large number";
        score -= 2;
    }
    scoreBoard.innerText = score;

    if(score === 0){
        sBox.innerText = "Game Over"; 
    }
    if(score === 0 || val === ans){
        rev.innerText = ans;
        input.disabled = true;
        button.disabled = true;
    }
}

button.addEventListener("click", handleClick);
