let computerNum = 0;
let playButton = document.getElementById("play-btn");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-btn");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function() {userInput.value = ""});

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log('정답', computerNum);
}

function play() {
    let userValue = userInput.value;

    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = "1 ~ 100 사이의 숫자를 입력하세요!";
        return;
    }

    if (history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다시 입력해 주세요!";
        return;
    }

    chances--;
    chanceArea.textContent = `남은 기회 : ${chances}번`;
    console.log("chances", chances);

    if (userValue < computerNum) {
        resultArea.textContent = "↑↑UP↑↑";
    }
    else if (userValue > computerNum) {
        resultArea.textContent = "↓↓DOWN↓↓";
    }
    else {
        resultArea.textContent = "정답입니다!";
        gameOver = true;
    }

    if (chances < 1) {
        gameOver = true;
    }

    if (gameOver == true) {
        playButton.disabled = true;
    }

    history.push(userValue);
    console.log("history", history);
}

function reset() {
    userInput.value = "";
    pickRandomNum();
    resultArea.textContent = "다시 도전!!"
}

pickRandomNum()