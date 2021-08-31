const gameForm = document.querySelector("#Game");
const setNum = document.querySelector("#beteen");
const setGuess = document.querySelector("#Guess");
const getdisplay = document.querySelector("#display");
const getResult = document.querySelector("#result");

const HIDDEN_CLASSNAME = "hidden";
const HIDDEN_CLASSNAME2 = "hidden_2";

function setGame(event) {
  event.preventDefault();
  getResult.classList.remove(HIDDEN_CLASSNAME);
  getdisplay.classList.remove(HIDDEN_CLASSNAME2);
  const numbetween = parseInt(setNum.value, 10);
  const inputGuess = parseInt(setGuess.value, 10);
  const randomNumber = Math.ceil(Math.random() * numbetween);
  getdisplay.innerText = `You chose: ${inputGuess}, the machine chose: ${randomNumber}`;
  if (inputGuess === randomNumber) {
    getResult.innerText = "You Win";
  } else {
    getResult.innerText = "You lost";
  }
}

gameForm.addEventListener("submit", setGame);