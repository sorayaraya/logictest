// let n = 3;
// function makeInputVerifier(min, max) {
//   if (n > max) {
//     return "input lebih besar";
//   } else if (n < min) {
//     return "input lebih kecil";
//   } else {
//     return "input in range";
//   }
// }

// console.log(makeInputVerifier(3, 10));

// const items = [
//   { name: "Soraya", age: 27 },
//   { name: "wulan", age: 28 },
//   { name: "dede", age: 45 },
//   { name: "denia", age: 56 },
//   { name: "lestari", age: 76 },
//   { name: "dewi kusuma", age: 78 },
// ];

// const filteredItems = items.filter((item) => {
//   return item.name.length >= 8;
// });
// console.log(filteredItems);

const items = [
  { name: "Soraya", age: 27 },
  { name: "wulan", age: 28 },
  { name: "dede", age: 45 },
  { name: "denia", age: 56 },
  { name: "lestari", age: 76 },
  { name: "dewi kusuma", age: 78 },
];

// const filteredItems = items.filter((item) => {
//   return item.age >= 50;
// });
// // console.log(filteredItems);
// console.log(items);

//kalau nampilin nama aja caranya:
// const itemNames = items.map((item) => {
//   return item.name;
// });
// console.log(itemNames);

// const itemAges = items.map((item) => {
//   return [item.age];
// });
// console.log(itemAges);

// const foundItem = items.find((item) => {
//   return item.name === "Soraya";
// });
// console.log(foundItem);

// items.forEach((item) => {
//   console.log(item.age, item.name);
// });

// const total = items.reduce((curentTotal, item) => {
//   return item.age + curentTotal;
// }, 0);
// console.log(total);

const item = [1, 2, 3, 4, 7, 8, 10, 21];
const includesTwo = item.includes(315); //mau cari apakah nilai ada di dalam array ini
console.log(includesTwo);
