const fruitBasket = {
  apple: 27,
  grape: 0,
  pear: 14,
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getNumFruit(fruit) {
  return sleep(1000).then((v) => fruitBasket[fruit]);
}

// async function control() {
//   console.log("Start");

//   const numApples = await getNumFruit("apple");
//   console.log(numApples);

//   const numGrapes = await getNumFruit("grape");
//   console.log(numGrapes);

//   const numPears = await getNumFruit("pear");
//   console.log(numPears);

//   console.log("End");
// }

// control();

const fruitsToGet = ["apple", "grape", "pear"];

async function forLoop() {
  console.log("Start");

  for (let i = 0; i < fruitsToGet.length; i++) {
    const fruit = fruitsToGet[i];
    const numFruit = await getNumFruit(fruit);
    console.log(numFruit);
  }

  console.log("End");
}

forLoop();
