let gameChoices = ["rock", "paper", "scissors"];

let rock = document.getElementById("rock").id;
let paper = document.getElementById("paper").id;
let scissors = document.getElementById("scissors").id;
let finalResult = document.getElementById("result");
let iconMyPick = document.getElementById("icon-mypick");
let iconHousePick = document.getElementById("icon-housepick");

const gamePage = document.getElementById("#gamePage");
const resultPage = document.getElementById("#resultPage");

let housePicked = gameChoices[Math.floor(Math.random() * gameChoices.length)]; //escolha aleatoria

resultPage.style.display = "none";

function startGame() {
  gamePage.style.display = "none";
  resultPage.style.display = "block";
}

function selectedPaper() {
  iconMyPick.innerHTML = `
        <img src="./images/icon-paper.svg" alt="">
    `;

  startGame();
  console.log("selecionei papel");

  if (housePicked === "paper") {
    showtieMessage();
  }
  if (housePicked === "rock") {
    showWonMessage();
  }
  if (housePicked === "scissors") {
    showLoseMessage();
  }
}

function selectedRock() {
  iconMyPick.innerHTML = ` <img src="/images/icon-rock.svg" alt="" />`;

  startGame();
  if (housePicked === "rock") {
    showtieMessage();
  }
  if (housePicked === "scissors") {
    showWonMessage();
  }
  if (housePicked === "paper") {
    showLoseMessage();
  }
}

function selectedScissors() {
  iconMyPick.innerHTML = ` <img src="/images/icon-scissors.svg" alt="" />`;
  startGame();
  if (housePicked === "scissors") {
    showtieMessage();
  }
  if (housePicked === "rock") {
    showWonMessage();
  }
  if (housePicked === "paper") {
    showLoseMessage();
  }
}
function showWonMessage() {
  finalResult.textContent = "Você venceu";
}

function showtieMessage() {
  finalResult.textContent = "Deu empate";
}

function showLoseMessage() {
  finalResult.textContent = "Você perdeu";
}
