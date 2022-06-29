class Page {
  constructor(cardsLink) {
    this.cardsLink = cardsLink;
    this.soundCollection = [];
  }

  async buildPage() {
    let fetchedCards = await this.fetchCards();
    this.playRandowWord(fetchedCards);
    // this.goSound();
    document.getElementById("play-btn-id").onclick = this.goSound;
  }

  async fetchCards() {
    try {
      const response = await fetch(this.cardsLink);
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

  goSound() {
    // const audio = new Audio(this.soundCollection[0]);
    // audio.play();
    console.log(this.soundCollection);
    // console.log(this.soundCollection[0]);
  }

  playRandowWord(data) {
    for (let i = 0; i < data.length; i++) {
      this.soundCollection.push(data[i].wordSound);
    }
    console.log(this.soundCollection);
  }
}

const page = new Page("../Cards.json");
page.buildPage();

// function start() {
//   let randomNumbers = [];
//   while (randomNumbers.length < 8) {
//     let randomNum = Math.floor(Math.random() * 8);
//     if (randomNumbers.includes(randomNum)) {
//     } else {
//       randomNumbers.push(randomNum);
//     }
//   }

//   console.log(randomNumbers);
// }

// start();

// function playAudio() {
//   const audio = new Audio("../assets/sounds/dragon--_gb_1.mp3");
//   audio.play();
// }

// console.log(randomInteger(0, 7));
