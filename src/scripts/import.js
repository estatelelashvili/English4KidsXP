import cards from "../rsSchool_assets/cards.js";

// alert(cards.length);

const [
  Categories,
  Actions_A,
  Actions_B,
  Animals_A,
  Animals_B,
  Clothes,
  Emotions,
  Weather,
  Transportation,
] = cards;

// console.log(Categories);
// console.log(Actions_A);
// console.log(Actions_B);
// console.log(Animals_A);
// console.log(Animals_B);
// console.log(Clothes);
// console.log(Emotions);

// let count = 0;
// for (let card of cards) {
//   //   console.log(card);
//   for (let item of card) {
//     count++;
//     console.log(item);
//     console.log(count);
//   }
// }
let categoryCount = 0;
let cardCount = 0;
for (let card of cards) {
  for (let item of card) {
    if (typeof item === "object" && !Array.isArray(item) && item !== null) {
      cardCount++;
    } else {
      categoryCount++;
    }
  }
}
console.log(cardCount);
console.log(categoryCount);
