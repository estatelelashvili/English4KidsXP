class Card {
  constructor(sounds) {
    this.sounds = sounds;
    this.counter = 0;
    this.randomSounds = [];
    // this.randomSounds = this.randomizeMp3();
  }

  async buildPage() {
    let fetchedCards = await this.fetchCards();
    this.randomSounds = this.randomizeMp3(fetchedCards);
  }

  async fetchCards() {
    try {
      const response = await fetch(this.sounds);
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }
      const cards = await response.json();
      return cards;
    } catch {
      throw new Error("Something went wrong!");
    }
  }

  randomizeMp3(data) {
    let randomSounds = [];
    while (randomSounds.length < 8) {
      let randomNum = Math.floor(Math.random() * 8);
      if (randomSounds.includes(data[randomNum].wordSound)) {
      } else {
        randomSounds.push(data[randomNum].wordSound);
      }
    }
    return randomSounds;
  }

  alerma() {
    console.log(this.randomSounds);
  }

  playSound() {
    let audio = new Audio(this.randomSounds[this.counter]);
    audio.play();
    this.counter++;
    if (this.counter > 7) {
      this.counter = 0;
    }
  }
}

// let soundCollection = [
//   "../assets/sounds/dragon--_gb_1.mp3",
//   "../assets/sounds/knight--_gb_1.mp3",
//   "../assets/sounds/witch--_gb_1.mp3",
//   "../assets/sounds/king--_gb_1.mp3",
//   "../assets/sounds/mermaid--_gb_1.mp3",
//   "../assets/sounds/princess--_gb_1.mp3",
//   "../assets/sounds/wizard--_gb_1.mp3",
//   "../assets/sounds/fairy--_gb_1.mp3",
// ];

const bard = new Card("../Cards.json");
bard.buildPage();
const buttonPlay = document.getElementById("play-btn-id");
buttonPlay.onclick = () => {
  bard.playSound();
  buttonPlay.disabled = "true";
};

const card1 = document.getElementById("card1-id");
card1.onclick = () => {
  bard.playSound();
};
const card2 = document.getElementById("card2-id");
card2.onclick = () => {
  bard.playSound();
};

// const buttonAlert = document.getElementById("alert-btn-id");

// let counter = 0;
// const randomArr = randomize();

// function oneOut() {
//   let theNum = randomArr[counter];
//   counter++;
//   if (counter > 7) {
//     counter = 0;
//   }
//   return theNum;
// }
// const buttonPlay = document.getElementById("play-btn-id");
// buttonPlay.onclick = playSound;

// function playSound() {
//   let audio = new Audio(soundCollection[oneOut()]);
//   audio.play();
// }

// function randomize() {
//   let randomNumbers = [];
//   while (randomNumbers.length < 8) {
//     let randomNum = Math.floor(Math.random() * 8);
//     if (randomNumbers.includes(randomNum)) {
//     } else {
//       randomNumbers.push(randomNum);
//     }
//   }
//   return randomNumbers;
// }

// const card1 = document.getElementById("card1-id");
// card1.onclick = () => {
//   alert(card1.innerText);
// };
// const card2 = document.getElementById("card2-id");
// card2.onclick = () => {
//   alert(card2.innerText);
// };
