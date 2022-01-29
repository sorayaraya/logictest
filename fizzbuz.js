// for (i = 5; i >= 1; i--) {
//   for (j = i; j >= 1; j--) {
//     console.log(j);
//   }
//   console.log("\n");
// }

function fizzbuzz(vall) {
  for (let i = 1; i <= vall; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzbuzz(100);
