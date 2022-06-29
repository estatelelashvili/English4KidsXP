const buttonAlert = document.getElementById("alert-btn-id");

let counter = 0;
const randomArr = randomize();

function oneOut() {
  let theNum = randomArr[counter];
  counter++;
  if (counter > 7) {
    counter = 0;
  }
  return theNum;
}
const buttonPlay = document.getElementById("play-btn-id");
buttonPlay.onclick = playSound;

let soundCollection = [
  "../assets/sounds/dragon--_gb_1.mp3",
  "../assets/sounds/knight--_gb_1.mp3",
  "../assets/sounds/witch--_gb_1.mp3",
  "../assets/sounds/king--_gb_1.mp3",
  "../assets/sounds/mermaid--_gb_1.mp3",
  "../assets/sounds/princess--_gb_1.mp3",
  "../assets/sounds/wizard--_gb_1.mp3",
  "../assets/sounds/fairy--_gb_1.mp3",
];

function playSound() {
  let audio = new Audio(soundCollection[oneOut()]);
  audio.play();
}

function randomize() {
  let randomNumbers = [];
  while (randomNumbers.length < 8) {
    let randomNum = Math.floor(Math.random() * 8);
    if (randomNumbers.includes(randomNum)) {
    } else {
      randomNumbers.push(randomNum);
    }
  }
  return randomNumbers;
}

const card1 = document.getElementById("card1-id");
card1.onclick = () => {
  alert(card1.innerText);
};
const card2 = document.getElementById("card2-id");
card2.onclick = () => {
  alert(card2.innerText);
};
