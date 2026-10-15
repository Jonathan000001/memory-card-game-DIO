const allEmojis = [
  "😺️", "🐭️", "🦊️", "🐼️", "🐷️", "🐣️", "🐔️", "🐸️",
  "🐶", "🐵", "🦁", "🐯", "🐮", "🐨", "🐰", "🐹", "🦄", "🐲",
];
let openCards = [];
let totalCards = 16;

let timerInterval = null;
let timeLeft = 0;
let timerStarted = false;
let isGameOver = false;

const gameBoard = document.getElementById("game-board");
const levelSelect= document.getElementById("level-select");
const resetBtn = document.getElementById("reset-btn");

const timerToggle = document.getElementById("timer-toggle");
const timerDisplay = document.getElementById("timer-display");
const timeLeftSpan = document.getElementById("time-left");

function initGame() {
  clearInterval(timerInterval);
  timerStarted = false;
  isGameOver = false;

  openCards = []
  gameBoard.innerHTML = "";

  const level = levelSelect.value;
  const pairsCount = level === "1" ? 8: 18;
  totalCards = pairsCount * 2;

  gameBoard.className = level === "1" ? "game grid-4x4" : "game grid-6x6";

  if (timerToggle.checked) {
    timeLeft = level === "1" ? 60 : 150;
    timeLeftSpan.textContent = timeLeft;
    timerDisplay.classList.remove("hidden");
  }else{
    timerDisplay.classList.add("hidden")
  }

  const selectedEmojis = allEmojis.slice(0, pairsCount);
  const emojis = [...selectedEmojis, ...selectedEmojis];
  let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

  for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    gameBoard.appendChild(box);
  }

}
function startTimer(){
  timerStarted = true;
  timerInterval = setInterval(() =>{
    timeLeft--;
    timeLeftSpan.textContent = timeLeft;

    if (timeLeft <= 0){
      clearInterval(timerInterval);
      isGameOver = true;
      alert("Fim do tempo! Você perdeu!");
    }
  }, 1000);
}

function handleClick() {
  if(isGameOver || this.classList.contains("boxOpen") || this.classList.contains("boxMatch")) {
    return;
  }

  if(timerToggle.checked && !timerStarted){
    startTimer();
  }

  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if(openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch(){
    if (isGameOver) return;

    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === totalCards){
      clearInterval(timerInterval);  
      isGameOver = true;
      alert("Você venceu!!!");
    }
}


levelSelect.addEventListener("change", initGame);
timerToggle.addEventListener("change", initGame)
resetBtn.addEventListener("click", initGame);

initGame();
